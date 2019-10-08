<template>
	<div class="wrap">
		<div class="top">
			<h3>购物车</h3>
			<span @click="onShow()">{{show?'编辑':'完成'}}</span>
		</div>
		<ul class="list">
			<li v-for="item,index in list">
				<div class="select" @click="onSelect(index)" ><img :src="item.flag?'/static/img/勾选.png':'/static/img/未勾选.png'"/></div>
				<img src="/static/img/358.png"/>
				<div class="name">
					<p>{{item.name}}</p>
					<div>
						<div class="price">¥{{item.price}}</div>
						<div class="num">
							<span @click="cut(index)">-</span>
							<input type="text" name="" id="" :value="item.count" />
							<span @click="add(index)">+</span>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<div class="btm">
			<div class="allSelect" @click="onAllSelect()">
				<img :src="allSelect?'/static/img/勾选.png':'/static/img/未勾选.png'"/>
				<p>全选</p>
			</div>
			<div class="allPrice" v-show="show">
				<p>合计(不含运费):</p>
				<h3>¥{{allPrice}}</h3>
			</div>
			<div class="btn" v-show="show">去结算({{allNum}})</div>
			<div class="delete" v-show="!show" @click="onDelete()">删除</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				list:[
					{
						"name":"五花肉烤肉卷",
						"price":"368.00",
						"img":"src",
						"id":"0",
						"count":"1",
						"specification":"整箱",
						"weight":"15.00kg",
						"attention":false,
						"recording":false,
						"flag":true
					},{
						"name":"五花肉烤肉卷",
						"price":"368.00",
						"img":"src",
						"id":"0",
						"count":"1",
						"specification":"整箱",
						"weight":"15.00kg",
						"attention":false,
						"recording":false,
						"flag":true
					},{
						"name":"五花肉烤肉卷",
						"price":"368.00",
						"img":"src",
						"id":"0",
						"count":"1",
						"specification":"整箱",
						"weight":"15.00kg",
						"attention":false,
						"recording":false,
						"flag":true
					}
				],
				allSelect:false,
				allPrice:0,
				allNum:0,
				show:true
			}
		},
		mounted(){
			console.log(this.list)
			setTimeout(()=>{
				this.list = JSON.parse(localStorage.getItem('cart')) || [];
			},30)
			setTimeout(()=>{
				this.all();
			},80)
		},
		computed:{
			
		},
		methods:{
			onSelect(index){//单选按钮
				this.list[index].flag = !this.list[index].flag;
				this.selectFn(this.list)==this.list.length?this.allSelect = true:this.allSelect = false;
				this.all();
				localStorage.setItem('cart',JSON.stringify(this.list));
			},
			onAllSelect(){//全选按钮
				this.allSelect = !this.allSelect;
				this.list.forEach(item=>{
					item.flag = this.allSelect;
				})
				this.all();
				localStorage.setItem('cart',JSON.stringify(this.list));
			},
			selectFn(arr){//单选按钮调用方法
				let num = 0;
				arr.forEach(item=>{
					if(item.flag){
						num++;
					}
				})
				return num;
			},
			cut(index){//减按钮
				this.list[index].count--;
				if(this.list[index].count<1){
					this.list[index].count = 1;
				}
				this.all();
				localStorage.setItem('cart',JSON.stringify(this.list));
			},
			add(index){//加按钮
				this.list[index].count++;
				this.all();
				localStorage.setItem('cart',JSON.stringify(this.list));
			},
			all(){//总价总数计算函数
				var allPrice = 0;
				var allNum = 0;
				this.list.forEach(item=>{
					if(item.flag){
						allPrice+=item.price*item.count;
						allNum+=item.count-0;
					}
				})
				this.allPrice = allPrice;
				this.allNum = allNum;
			},
			onShow(){//显示隐藏
				this.show = !this.show;
			},
			onDelete(){//删除按钮
				this.list.forEach((item,index)=>{
					if(item.flag){
						this.list.splice(index,1);
					}
				})
				localStorage.setItem('cart',JSON.stringify(this.list));
				this.all()
			}
		}
	}
</script>
<style scoped lang="scss">
@import "@/assets/css/rem.scss";
@import "./reset.css";
*{
	margin:0;
	padding:0;
}
.wrap{
	width:100vw;
	height: calc(100vh - 5.625rem);
	overflow-x: hidden;
	padding-bottom:rem(100);
	.top{
		width:100%;
		position:relative;
		text-align: center;
		margin-top:rem(30);
		h3{
			font-size:rem(30);
		}
		span{
			position:absolute;
			right:rem(30);
			top:0px;
		}
	}
	.list{
		li{
			width:100vw;
			height:rem(220);
			border-top:1rem solid #000;
			border-bottom:1rem solid #000;
			margin-top:rem(30);
			display: flex;
			justify-content: flex-start;
			align-items: center;
			.select{
				width:rem(80);
				height:rem(50);
				line-height:rem(50);
				text-align: center;
				border-radius:50%;
				overflow:hidden;
				margin-left:rem(20);
				img{
					width:100%;
					height:100%;
				}
			}
			>img{
				width:rem(200);
				height:rem(200);
				margin:0 rem(30);
			}
			.name{
				width:100%;
				height:rem(200);
				display: flex;
				flex-flow: column nowrap;
				text-align: left;
				>div{
					display: flex;
					justify-content: space-between;
					margin-top:rem(100);
					margin-right:rem(30);
					.price{
						color:red;
					}
					.num{
						display: flex;
						justify-content: flex-start;
						span{
							width:rem(50);
							height:rem(50);
							line-height:rem(50);
							text-align: center;
							border:1px solid #666;
						}
						input{
							outline:none;
							border:none;
							width:rem(80);
							height:rem(50);
							line-height:rem(50);
							text-align: center;
							border:1px solid #666;
						}
					}
				}
			}
		}
	}
	.btm{
		width:100vw;
		height:rem(100);
		position:fixed;
		left:0;
		bottom:rem(80);
		background: #999;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		color:#fff;
		.allSelect{
			display: flex;
			justify-content: flex-start;
			margin-left:rem(20);
			align-items: center;
			img{
				width:rem(50);
				height:rem(50);
			}
			p{
				color:#fff;
				margin-left:rem(20);
			}
		}
		.allPrice{
			margin:0 rem(20);
			h3{
				font-size:rem(35);
				color:#fff;
			}
			p{
				color:#fff;
			}
		}
		.btn{
			height:100%;
			display: flex;
			align-items: center;
			text-align: center;
			padding:0 rem(40);
			background: green;
			position:absolute;
			top:0;
			right:rem(0);
			cursor: pointer;
		}
		.delete{
			padding:rem(10) rem(30);
			border-radius:rem(8);
			background: red;
			color:#fff;
			position:absolute;
			right:rem(20);
			top:rem(25);
		}
	}
}
</style>