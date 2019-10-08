<template>
	<div>
		<router-view/>
		<ul class="tag">
			<li @click="sy">首页</li>
			<li @click="fl">分类</li>
			<li @click="cp">菜谱中心</li>
			<li @click="gw">购物车</li>
			<li @click="my">我的美鲜</li>
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
			sy(){
				this.$router.push({
					name:'home'
				})
			},
			fl(){
				this.$router.push({
					name:'fl'
				})
			},
			cp(){
				this.$router.push({
					name:'caipu'
				})
			},
			gw(){
				this.$router.push({
					name:'cart'
				})
			},
			my(){
				this.$router.push({
					name:'ino'
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
		align-items: center;
		list-style: none;
	}
</style>
