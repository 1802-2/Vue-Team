<template>
	<div class="zl-box" v-show="flag">
		<div>
			<span @click="out"><</span>
		</div>
		<div class="zl-tlt">
			<span>111</span>
			<span>销量</span>
			<span>价格</span>
		</div>
		<div v-for="(item,index) in zldata" class="zl-lists">
			<img v-lazy="item.img" alt="">
			<div>
				<p>{{item.name}}</p>
				<p>
					<span>￥{{item.price}}</span>
					<span>/{{item.specification}}</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			zldata:{
				type:Array,
				default: ()=>[]
			}
		},
		data(){
			return{
				flag:false
			}
		},
		methods:{
			out(){
				this.flag = !this.flag
			}
		},
		created() {
			
		}
		
	}
</script>

<style lang="scss" scoped>
	@import "../assets/css/rem.scss";
	.zl-box{
		width: 100vw;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		background: white;
		.zl-tlt{
			width: 100%;
			height: rem(100);
			border-bottom: 1px solid #ccc;
			display: flex;
			span{
				width: 33%;
				height: 100%;
				text-align: center;
				line-height: rem(100);
			}
		};
		.zl-lists{
			width: 100%;
			height: rem(180);
			display: flex;
			align-items: center;
			border-bottom:1px solid #ccc;
			img{
				width: rem(140);
				height: rem(140);
				border: 1px solid #ccc;
				margin-left: rem(50);
			}
			div{
				height: rem(140);
				margin-left: rem(30);
				display: flex;
				flex-wrap: wrap;
				align-content: space-between;
				p{
					width: 100%;
				}
				&>p:nth-child(2){
					span:nth-child(1){
						color: red;
						display: inline-block;
						font-weight: bold;
					}
					span:nth-child(2){
						color: gray;
					}
				}
			}
		}
	}
</style>
