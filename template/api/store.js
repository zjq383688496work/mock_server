module.exports = {
	'/chaoyue': {
		name: '公用工具',
		type: 'application/x-www-form-urlencoded',
		parentKey: 'result',
		parent: {
			meta: {
				errno: 0,
				msg:  '操作成功'
			},
			result: {
				page: null,
				data: ''
			}
		},
		child: {
			'/uploadImage': {
				name: '上传图片',
				type: 'multipart/form-data',
				method: 'post',
				json: {
					page: null,
					'data|1': [
						'http://img.weiye.me/zcimgdir/headimg/32d7529d24439f8c4a22f753c918326e_o.jpg'
					]
				}
			},
			'/Base64Image': {
				name: '上传图片',
				method: 'post',
				json: {
					page: null,
					'data|1': [
						'http://img.weiye.me/zcimgdir/headimg/32d7529d24439f8c4a22f753c918326e_o.jpg'
					]
				}
			}
		}
	},
	'/store': {
		name: '公用工具',
		type: 'application/x-www-form-urlencoded',
		parentKey: 'result',
		parent: {
			meta: {
				errno: 0,
				msg:  '操作成功'
			},
			result: {
				data: ''
			}
		},
		child: {
			'/getStoreList': {
				name: '预约列表',
				method: 'get',
				json: {
					'data|12': [{
						'id|+1': 0,
						'name|1': ['法拉利', '保时捷', '布加迪', '大润发', '家乐福', 'GTR', '战神', '神秘海域'],
						'price|1': ['398.99', '98.99', '28.99', '58.99', '48.99', '198.99', '698.99'],
						'floor|1': ['B2', 'B1', 'L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8'],
						'no|1': ['101', '102', '103', '104', '105', '106'],
						'create_time': 1489664102,
						'mall_id': '54f403eae4b002000cf63762',
						'pic|1': [
							'http://img.weiye.me/zcimgdir/headimg/32d7529d24439f8c4a22f753c918326e_o.jpg',
							'https://p2.gexing.com/G1/M00/64/57/rBACE1SlL0OzK4rHAAAqSGfZXxQ133_200x200_3.jpg?recache=20131108',
							'https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=b2ce6c1d0b24ab18e043e93105cacaf5/5d6034a85edf8db12bbbf55f0b23dd54564e7470.jpg',
							'https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=8531b75eb119ebc4c02d7e9fb216e3c4/94cad1c8a786c917833eda02cb3d70cf3bc757c8.jpg'
						]
					}],
					'page|1-4': 1,
					page_size: 12,
					'total|200': 0,
					total_page: 1,
				}
			},
			'/getFloor': {
				name: '楼层列表',
				method: 'get',
				json: {
					'data|3-8': [{
						id:              '5a532b82130b38000b1884a7',
						'name|+1':        ['B2', 'B1', 'L1', 'L2', 'L3', 'L4', 'L5', 'L6'],
						picture:         'http://rongyi.b0.upaiyun.com/system/mall_area/picture/5a532b82130b38000b1884a7/201801181835551443.jpg',
						sort:            1
					}]
				}
			},
			'/getCatg': {
				name: '分类列表',
				method: 'get',
				json: {
					'data|3-8': [{
						id:              '5a532b82130b38000b1884a7',
						'name|+1':        ['服饰', '亲子', '娱乐', '其他', '餐饮', '互动', '教育', '美容美发'],
						picture:         'http://rongyi.b0.upaiyun.com/system/mall_area/picture/5a532b82130b38000b1884a7/201801181835551443.jpg',
						sort:            1
					}]
				}
			},
			'/imgListType': {
				name:'图片类别',
				method:'get',
				json:{
					'data|1-5':[{
						createAt:1516106353,
						createBy:"system",
						id:12,
						isDefault:1,
						isPublic:1,
						mallId:null,
						module:1,
						'name|+1':["全部","促销图文","折扣控件","新春图文"],
						rank:1000,
						'sourceNum|+1':[12,23,34,12,2,34,45],
						state:1,
						type:1,
						updateAt:1516106353,
						updateBy:"system"
					}]
				}
			}, 
			'/videoListType': {
				name:'视频类别',
				method:'get',
				json:{
					'data|1-5':[{
						createAt:1516106353,
						createBy:"system",
						id:12,
						isDefault:1,
						isPublic:1,
						mallId:null,
						module:1,
						'name|+1':["全部","促销图文","折扣控件","新春图文"],
						rank:1000,
						'sourceNum|+1':[12,23,34,12,2,34,45],
						state:1,
						type:2,
						updateAt:1516106353,
						updateBy:"system"
					}]
				}
			},
			'/imgList':{
				name:'图片列表',
				method:'get',
				json:{
					'data|5-15':[{
						attribute: "1080*1920",
						createAt: 1516206844,
						createBy: "superadmin",
						detail: null,
						format: null,
						groupId: 17,
						height: null, 
						'id|+1': [105,106,107,108,109,110,111,112,114,115,116,117,118,119,120],
						isPublic: 1,
						layerList: null,
						left: null,
						mallId: null,
						module: 1,
						name: "促销图文.png",
						preview: null,
						size: 1640,
						sourceLeft: null,
						sourceTop: null,
						state: 1,
						tagId: null,
						token: null,
						top: null,
						type: 1,
						updateAt: null,
						updateBy: null,
						'url|+1': ["http://rongyi.b0.upaiyun.com/system/smartService/null/201801180034041097.png","http://rongyi.b0.upaiyun.com/system/smartService/null/201801180034041093.png"],
						width: null
					}],
					'page':{
						currentPage:1,
						pageSize:14,
						totalCount:19,
						totalPage:2,
					}
				}
			},
			'/videoList':{
				name:'视频列表',
				method:'get',
				json:{
					'data|5-15':[{
						attribute: "1080*1920",
						createAt: 1516206844,
						createBy: "superadmin",
						detail: null,
						format: null,
						groupId: 17,
						height: null,
						'id|+1': [105,106,107,108,109,110,111,112,114,115,116,117,118,119,120],
						isPublic: 1,
						layerList: null, 
						left: null,
						mallId: null,
						module: 1,
						name: "促销图文.mp4",
						preview: null,
						size: 1640,
						sourceLeft: null,
						sourceTop: null,
						state: 1,
						tagId: null,
						token: null,
						top: null, 
						type: 1,
						updateAt: null,
						updateBy: null,
						url: "http://rongyi.b0.upaiyun.com/system/smartService/null/201801172349577284.mp4",
						width: null
					}],
					'page':{
						currentPage:1,
						pageSize:14,
						totalCount:19,
						totalPage:2,
					}
				}
			},
			'/wonderfulActivity':{
				name:'精彩活动',
				method:'get',
				json:{
					'data|3-8':[{
						'title|+1':["全部","促销图文","折扣控件","新春图文"],
						'url|+1': [
							"http://rongyi.b0.upaiyun.com/system/smartService/null/201801180034041097.png",
							"http://rongyi.b0.upaiyun.com/system/smartService/null/201801180034041093.png",
							'http://img.weiye.me/zcimgdir/headimg/32d7529d24439f8c4a22f753c918326e_o.jpg',
							'https://p2.gexing.com/G1/M00/64/57/rBACE1SlL0OzK4rHAAAqSGfZXxQ133_200x200_3.jpg?recache=20131108',
							'https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=b2ce6c1d0b24ab18e043e93105cacaf5/5d6034a85edf8db12bbbf55f0b23dd54564e7470.jpg',
							'https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=8531b75eb119ebc4c02d7e9fb216e3c4/94cad1c8a786c917833eda02cb3d70cf3bc757c8.jpg'
						],
					}]
				}
			},
			'/storeDetails':{
				name:'店铺介绍',
				method:'get',
				json:{
					'data|+1':{
						'images|3-8':[{
							'title|+1':["全部","促销图文","折扣控件","新春图文"],
							'url|+1': [
								"http://rongyi.b0.upaiyun.com/system/smartService/null/201801180034041097.png",
								"http://rongyi.b0.upaiyun.com/system/smartService/null/201801180034041093.png",
								'http://img.weiye.me/zcimgdir/headimg/32d7529d24439f8c4a22f753c918326e_o.jpg',
								'https://p2.gexing.com/G1/M00/64/57/rBACE1SlL0OzK4rHAAAqSGfZXxQ133_200x200_3.jpg?recache=20131108',
								'https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=b2ce6c1d0b24ab18e043e93105cacaf5/5d6034a85edf8db12bbbf55f0b23dd54564e7470.jpg',
								'https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=8531b75eb119ebc4c02d7e9fb216e3c4/94cad1c8a786c917833eda02cb3d70cf3bc757c8.jpg'
							],
						}], 
						'text|+1':[
							'发斯蒂芬斯蒂芬斯蒂芬和法国恢复',
							'两款发动机管理费看过了代付款 挤房间国家的法律机构几个地方了机构估计偶尔梧桐儿你的快乐十分积极第二',
							'无人防护等级考核干部个发你的鬼地方个健康地方高房价的快感加工费的脸孔根据对方考虑价格根据对方立刻感觉给你答复了恐惧感环境发生的符合积分第三方发的数据开放发货速度快,',
							'护肤就是看到房价多少了空间发解放路开始的',
							'跟偶尔铁皮人公开奇偶的烦恼可滚动公开答复给对方看见欧力给赶快来放大空间'
						]
					}
				}
			}
		}
	},
}