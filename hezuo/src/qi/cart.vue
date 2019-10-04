<template>
	<div class="wrap">
		<div class="top">
			<h3>购物车</h3>
			<span>编辑</span>
		</div>
		<ul class="list">
			<li v-for="item in list">
				<div class="select"><img src="./img/勾选.png"/></div>
				<img src="../assets/logo.png"/>
				<div class="name">
					<p>{{item.name}}</p>
					<div>
						<div class="price">¥{{item.price}}</div>
						<div class="num">
							<span>-</span>
							<input type="text" name="" id="" :value="item.count" />
							<span>+</span>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<div class="btm">
			<div class="allSelect">
				<img src="./img/勾选.png"/>
				<p>全选</p>
			</div>
			<div class="allPrice">
				<p>合计(不含运费):</p>
				<h3>¥220.00</h3>
			</div>
			<div class="btn">去结算(2)</div>
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
						"count":"0",
						"specification":"整箱",
						"weight":"15.00kg",
						"attention":false,
						"recording":false,
					},{
						"name":"五花肉烤肉卷",
						"price":"368.00",
						"img":"src",
						"id":"0",
						"count":"0",
						"specification":"整箱",
						"weight":"15.00kg",
						"attention":false,
						"recording":false
					},{
						"name":"五花肉烤肉卷",
						"price":"368.00",
						"img":"src",
						"id":"0",
						"count":"0",
						"specification":"整箱",
						"weight":"15.00kg",
						"attention":false,
						"recording":false
					},{
						"name":"五花肉烤肉卷",
						"price":"368.00",
						"img":"src",
						"id":"0",
						"count":"0",
						"specification":"整箱",
						"weight":"15.00kg",
						"attention":false,
						"recording":false
					},{
						"name":"五花肉烤肉卷",
						"price":"368.00",
						"img":"src",
						"id":"0",
						"count":"0",
						"specification":"整箱",
						"weight":"15.00kg",
						"attention":false,
						"recording":false
					}
				]
			}
		},
		mounted(){
			console.log(this.list)
		}
	}
</script>
<style scoped="" lang="scss">
@import "./rem.scss";
@import "./reset.css";
*{
	margin:0;
	padding:0;
}
.wrap{
	width:100vw;
	padding-bottom:px(100);
	.top{
		width:100%;
		position:relative;
		text-align: center;
		margin-top:px(30);
		h3{
			font-size:px(30);
		}
		span{
			position:absolute;
			right:px(30);
			top:0px;
		}
	}
	.list{
		li{
			width:100vw;
			height:px(220);
			border-top:1px solid #000;
			border-bottom:1px solid #000;
			margin-top:px(30);
			display: flex;
			justify-content: flex-start;
			align-items: center;
			.select{
				width:px(80);
				height:px(50);
				line-height:px(50);
				text-align: center;
				border-radius:50%;
				overflow:hidden;
				margin-left:px(20);
				img{
					width:100%;
					height:100%;
				}
			}
			>img{
				width:px(200);
				height:px(200);
				margin:0 px(30);
			}
			.name{
				width:100%;
				height:px(200);
				display: flex;
				flex-flow: column nowrap;
				text-align: left;
				>div{
					display: flex;
					justify-content: space-between;
					margin-top:px(100);
					margin-right:px(30);
					.price{
						color:red;
					}
					.num{
						display: flex;
						justify-content: flex-start;
						span{
							width:px(50);
							height:px(50);
							line-height:px(50);
							text-align: center;
							border:1px solid #666;
						}
						input{
							outline:none;
							border:none;
							width:px(80);
							height:px(50);
							line-height:px(50);
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
		height:px(100);
		position:fixed;
		left:0;
		bottom:0;
		background: #999;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		color:#fff;
		.allSelect{
			display: flex;
			justify-content: flex-start;
			margin-left:px(20);
			align-items: center;
			img{
				width:px(50);
				height:px(50);
			}
			p{
				color:#fff;
				margin-left:px(20);
			}
		}
		.allPrice{
			margin:0 px(20);
			h3{
				font-size:px(35);
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
			padding:0 px(40);
			background: green;
			position:absolute;
			top:0;
			right:px(0);
			cursor: pointer;
		}
	}
}
</style>