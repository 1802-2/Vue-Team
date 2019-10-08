<template>
	<div>
		<router-view/>
		<ul class="tag">
			<li>首页</li>
			<li @click="fl">分类</li>
			<li @click="cp">菜谱中心</li>
			<li>购物车</li>
			<li>我的美鲜</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			fl(){
				this.$router.push({
					name:'fl'
				})
			},
			cp(){
				this.$router.push({
					name:'caipu'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../assets/css/rem.scss';
	.tag{
		width: 100vw;
		height: rem(80);
		border: 1px solid #ccc;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: space-around;
		list-style: none;
	}
</style>
