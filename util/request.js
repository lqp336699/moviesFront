let baseUrl = 'http://192.168.1.108:3000/api'

let http = function({
	url,
	data = {},
	method = 'get',
	loading
}) {
	if (loading) {
		uni.showLoading({
			title: '请稍后...'
		})
	}
	data.token = uni.getStorageSync('token') || ''
	return new Promise(function(reslove, reject) {
		uni.request({
			url: baseUrl + url,
			data,
			method,
			header: {
				'token': uni.getStorageSync('token') || ''
			},
			success(res) {
				if (res.data.code == 1) {
					reslove(res.data)
				} else if (res.data.code == -1) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				} else {
					reject(res.data)
					uni.showToast({
						title: res.data.msg,
						icon: 'none'
					})
				}
				if (loading) {
					uni.hideLoading()
				}
			},
			fail(res) {
				uni.showToast({
					title: '系统错误',
					icon: 'none'
				})
				if (loading) {
					uni.hideLoading()
				}
			}
		})
	})
}

export default http