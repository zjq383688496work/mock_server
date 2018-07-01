// const proj   = require('../../template/index')
const Router = require('koa-router')
const router = new Router()
const Mock   = require('mockjs')
const config = require('../../config')
const Tree   = require('require-folder-tree')

const proj   = Tree(config.root + '/template/api')

// console.log(proj)

router.prefix('/api')

var delayRes = (ctx, data) => {
	ctx.body = data
}

// 返回数据格式
function result(node, parent, pj, path) {
	return async (ctx) => {
		let type   = pj.type,
			method = node.method,
			pk     = pj.parentKey,
			RP     = new RegExp(node.type || type)

		var ct = ctx.header['content-type']
		if (method === 'post' && !RP.test(ct)) {
			ctx.status = 400
			return ctx.body = 'Content-Type Error!'
		}

		let data  = node.json,
			array = node.array	// String: '|1-4'
		if (array) {
			parent[`${pk}${array}`] = data
			delete parent[pk]
			data = Mock.mock(parent)
		} else {
			parent[pk] = Mock.mock(data)
			data = parent
		}
		delayRes(ctx, data)
	}
}

for (let p in proj) {
	let project = proj[p]
	RouteCreate(`/${p}`, project)
}

function RouteCreate(path, project) {
	for (let p in project) {
		let route  = new Router(),
			pj     = project[p],
			type   = pj.type,
			parent = pj.parent,
			pk     = pj.parentKey

		route.prefix(path + p)

		for (let q in pj.child) {
			console.log(q)
			let node   = pj.child[q]
			let method = node.method
			route[method](q, result(node, parent, pj, q))
		}

		router.use(route.routes(), route.allowedMethods())
	}
}

module.exports = router
