<template>
	<div>
		<div class="mbox" >
			<div class="m-fiexd">
				<div class="m-fidex-left">
					<ul>
						<li> 
							<img src="/static/img/358.png"/>
							<p>关注</p>
						</li>
						<li> 
							<img src="/static/img/358.png"/>
							<p>关注</p>
						</li>
						<li> 
							<img src="/static/img/358.png"/>
							<p>关注</p>
						</li>
					</ul>
				</div>
				<div class="m-fidex-right">
					<span  @click="gw(sdata.name)">购买</span>
				</div>
			</div>
			<div class="m-header-xq">
				<span @click="back">返回</span>
				<img src="/static/img/358.png"/>
			</div>
			<div class="m-img-header">
				<div class="m-mig-header">
					<img src="/static/img/358.png"/>
				</div>
				<div class="m-xq-name">
					<div class="m-xq-no1">
						<h6>{{sdata.name}}</h6>
						<span>预售</span>
					</div>
					<div class="m-xq-on2">
						<span>￥{{sdata.price}}</span>
						<div class="m-text-right">
							<span class="sp-1">自营</span>
							<span class="sp-2">降价通知</span>
						</div> 
					</div>
					<div class="m-xq-on3">
						<ul>
							<li>重量 <span>{{sdata.weight}}</span></li>
							<li>规格 <span>{{sdata.specification}}</span></li>
							<li>货号 <span>052033</span></li>
							<li>发货 <span>陆续发货</span></li>
						</ul>
					</div>
						<div class="m-xq-on4">
							商品评价(暂无.购买后来发表评论)
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
				sdata:{},
				arr:JSON.parse(localStorage.getItem('cart')) || []
			}
		},
		created() {
			console.log(this.$route.params.obj)
			this.sdata = this.$route.params.obj
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			gw(item){
				console.log(1)
				if(this.arr.length!=0){
					for(var i=0;i<this.arr.length;i++){
						if(this.arr[i].name == item){
							this.arr[i].count++;
							break;
						}else{
							this.arr[i].count = 1
							this.arr.push(this.sdata)
						}
						
					}
				}else{
					this.sdata.count = 1
					this.arr.push(this.sdata)
				}
				localStorage.setItem('cart',JSON.stringify(this.arr))
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/css/mrem.scss';
	.m-fiexd{
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		.m-fidex-left{
			width:70%;
			float: left;
			background:black;
			ul{
				display: flex;
				justify-content: space-around;
				li{
					font-size:rem(16);
					color: white;
					img{
						width:rem(40);
						height:rem(40);
					}
				}
			}
		}
		.m-fidex-right{
			width: 30%;
			height: rem(60);
			float: right;
			background: green;
			span{
				text-decoration: none;
				color: white;
				text-align: center;
				line-height: rem(60);
			}
		}
	}
	.m-header-xq{
		padding: rem(8);
		border-bottom: 1px solid #ccc;
		span{
			font-size: rem(24);
			text-align: center;
			color: green;
		}
		img{
			width: rme(18);
			height: rem(18);
			position: absolute;
			top: rem(12);
			right: rem(20);
		}
	}
	.m-img-header{
		padding: rem(8);
		.m-mig-header{
			img{
				width: 100%;
				height: 100%;
			}
		}
		.m-xq-no1{
			h6{
				font-size: rem(14);
				display: inline-block;
				line-height: rem(30);
			}
			span{
				width: rem(30);
				height: rem(18);
				border: 1px solid #008000;
				color: #008000;
				font-size: rem(12);
				float: right;
				display: inline-block;
			}
		}
		.m-xq-on2{
			height: rem(60);
			margin-top:rem(5);
			border-bottom: 2px solid #ccc;
			span{
				font-size: rem(30);
				color: red;
				float: left;
				line-height: rem(60);
			}
			.m-text-right{
				margin-top: rem(16);
				float: right;
				.sp-1{
					width: rem(50);
					height: rem(30);
					background: #008000;
					color: white;
					font-size: rem(12);
					text-align: center;
					line-height: rem(30);
				}
				.sp-2{
					width: rem(80);
					height: rem(30);
					border: 1px solid #ccc;
					color: #ccc;
					line-height:rem(30);
					font-size: rem(14);
				}
			}
		}
		.m-xq-on3{
			li{
				width: 100%;
				height: rem(25);
				font-size: rem(14);
				line-height: rem(25);
				color: #ccc;
				span{
					padding-left: rem(20);
					font-size: rem(12);
				}
			}
		}
		.m-xq-on4{
			height:rem(25);
			line-height: rem(25);
			font-size: rem(14);
		}
	}
</style>