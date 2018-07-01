module.exports = {
	'/data': {
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
			'/global':{
				name:'全局',
				method:'get',
				array: '|5-20',
				json: [{
					'date|+1': [ '周一', '周二', '周三', '周四', '周五', '周六', '周日' ],
					'terminalCounting|2-50': 4,
					'totalPopulation|10000-300000': 0,
					'clickPopulation|10000-300000': 0,
					'scanPopulation|2000-50000':    0,
					'orderNum|200-5000':            0,
					'orderAmount|200000-5000000':   0,
					'averageStayTime|2-50':         0,
					'clickPopulation|500-2000':     100,
					'scanPopulation|50-500':        100,
					'orderNum|20-100':              10
				}]
			}
		}
	},
	'/map': {
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
			'/global':{
				name:'全局',
				method:'get',
				json: {
					date:             '日期',
					terminalCounting: '终端数',
					totalPopulation:  '总数',
					clickPopulation:  '点击数',
					scanPopulation:   '扫码数',
					averageStayTime:  '停留时间',
					orderNum:         '订单数',
					orderAmount:      '订单金额'
				}
			}
		}
	}
}