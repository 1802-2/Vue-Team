<template>
	<scroll class="scr" ref="caipuScroll">
		<div>
			<div class="caipu-box" v-for="(item,index) in caipuData">
				<img v-lazy="item.img" alt="">
				<div>
					<p>{{item.name}}</p>
					<p>{{item.price}}</p>
					<p>人气菜</p>
				</div>
			</div>
		</div>
	</scroll>
</template>

<script>
	import scroll from "@/tang/scrol";
	export default{
		components:{
			scroll
		},
		data(){
			return{
				caipuData:[],
				scr:{}
			}
		},
		methods:{
			init(){
				this.axios.get('/static/tang/caipu.json').then(res=>{
					console.log(res.data.data)
					this.caipuData = res.data.data
				})
				this.scr = this.$refs.caipuScroll.wrapper
			}
		},
		created(){
			this.$nextTick(()=>{
				this.init()
			})
		}
	}
</script>

<style lang="scss" scoped>
	@import "../assets/css/rem.scss";
	.scr{
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		.caipu-box{
			width: 100%;
			height: rem(180);
			display: flex;
			align-items: center;
			border-bottom: 1px solid #ccc;
			div{
				height: rem(140);
				display: flex;
				flex-wrap: wrap;
				align-content: space-between;
				margin-left: rem(20);
				&>p:nth-child(2){
					width: 100%;
					color: red;
				}
				&>p:nth-child(3){
					font-size: rem(24);
					color: gray;
				}
			}
			img{
				width: rem(140);
				height: rem(140);
				border: 1px solid #ccc;
				margin-left: rem(40);
			}
		}
	}
</style>
