<template>
	<div v-if="data[0]!=undefined" class="t-box">
		<div class="t-left">
			<ul>
				<li v-for="(item,index) in data" @click="leftTap(index)">{{item.name}}</li>
			</ul>
		</div>
		<div class="t-right">
			<div class="t-right-box" v-for="(item,index) in data[num].arr">
				<p>
					<span>{{item.title}}</span>
					<span>查看全部></span>
				</p>
				<div class="sp-zl">
					<div v-for="(items,indexs) in item.list">
						<img :src="items.img" alt="">
						<p>{{items.name}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				data:[],
				num:0
			}
		},
		methods:{
			init(){
				this.axios.get("/static/tang/fenlei.json").then(res=>{
					console.log(res.data.data)
					this.data = res.data.data
				})
			},
			leftTap(index){
				this.num = index
			}
		},
		created() {
			this.init()
		}
	}
</script>

<style lang="scss" scoped>
	@import "../assets/css/rem.scss";
	.t-box{
		display: flex;
	}
	.t-left{
		width: rem(180);
		border-right:1px solid #ccc;
		 ul{
			 width: 100%;
			 background: #f3f4f6;
			 li{
				 width: 100%;
				 height: rem(90);
				 border-bottom:1px solid #e0e0e0;
				  font-size: rem(26);
				  text-align: center;
				  line-height: rem(90);
			 }
		 }
	}
	.t-right{
		width: calc(100vw - 5.7rem);
		.t-right-box{
			width: 100%;
			.sp-zl{
				width: 100%;
				display: flex;
				div{
					width: 33%;
					height: rem(180);
					text-align: center;
					img{
						width: rem(124);
						height: rem(124);
					}
				}
			}
		}
	}
</style>
