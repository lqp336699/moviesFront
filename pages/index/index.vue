<template>
	<view class="content">
		<uni-search-bar v-model="searchValue" placeholder="搜索视频" @confirm="search"></uni-search-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				searchValue: ''
			}
		},
		onLoad() {},
		methods: {
			search() {
				this.$http({
					url: "/getMovieList",
					data: {
						search: this.searchValue
					},
					method: 'get'
				}).then(res => {
					console.log(res, "ooooooo")
				})
			}
		}
	}
</script>

<style>

</style>