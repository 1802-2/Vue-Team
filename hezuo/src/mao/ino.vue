<template>
	<div>
		<div class="m-box">
			<div class="m-header">
				我的美鲜
			</div>
			<div class="m-dl">
				<div>登陆/注册</div>
			</div>
			
			<div class="n-sfk">
				<div class="m-dd">
					<span class="m-dd-1">我的订单</span>
					<span class="m-dd-2">查看全部订单</span>
				</div>
				<div class="m-sh">
					<ul>
						<li>
							<img src="/static/img/358.png"/>
							<span>待付款</span>
						</li>
						<li>
							<img src="/static/img/358.png"/>
							<span>待付款</span>
						</li>
						<li>
							<img src="/static/img/358.png"/>
							<span>待付款</span>
						</li>
						<li>
							<img src="/static/img/358.png"/>
							<span>待付款</span>
						</li>
					</ul>
				</div>
			</div>
			
			<div class="n-sfk">
				<div class="m-dd">
					<span class="m-dd-1">我的钱包 </span>
				</div>
				<div class="m-sh">
					<ul>
						<li>
							<p>0.00</p>
							<span>待付款</span>
						</li>
						<li>
							<p>0</p>
							<span>优惠卷</span>
						</li>
					</ul>
				</div>
			</div>
			
			<div class="m-jf">
					<ul>
						<li>
							<img src="/static/img/358.png"/>
							<span>待付款</span>
						</li>
						<li>
							<img src="/static/img/358.png"/>
							<span>待付款</span>
						</li>
						<li>
							<img src="/static/img/358.png"/>
							<span>待付款</span>
						</li>
					</ul>
				</div>
				
			<div class="m-syn">
				<ul>
					<li>
						<img src="/static/img/358.png"/>
						<span>待付款</span>
					</li>
					<li>
						<img src="/static/img/358.png"/>
						<span>待付款</span>
					</li>
					<li>
						<img src="/static/img/358.png"/>
						<span>待付款</span>
					</li>
					<li>
						<img src="/static/img/358.png"/>
						<span>待付款</span>
					</li>
					<li>
						<img src="/static/img/358.png"/>
						<span>待付款</span>
					</li>
					<li>
						<img src="/static/img/358.png"/>
						<span>待付款</span>
					</li>
					<li>
						<img src="/static/img/358.png"/>
						<span>待付款</span>
					</li>
					<li>
						<img src="/static/img/358.png"/>
						<span>待付款</span>
					</li>
				</ul>
			</div>
			
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	@import '@/assets/css/mrem.scss';
	.m-box{
		.m-header{
			padding:rem(10) 0;
		}
		.m-dl{
			width:100%;
			height:rem(160);
			background:#8cbc28;
			position: relative;
			div{
				width: rem(100);
				height:rem(100);
				border-radius:50%;
				background: white;
				font-size:rem(16);
				line-height: rem(100);
				position:absolute;
				left:50%;
				top:50%;
				margin-left:rem(-55);
				margin-top:rem(-55);
				border:10px solid #a5cc55;
			}
		}
		.n-sfk{
			padding: rem(10);
			.m-dd{
				width:100%;
				height:rem(40);
				.m-dd-1{
					float: left;
					font-size: rem(14);
				}
				.m-dd-2{
					float: right;
					font-size: rem(14);
				}
			}
			.m-sh{
				width: 100%;
				ul{
					display: flex;
					justify-content: space-around;
					li{
						img{
							width: rem(35);
							height: rem(20);
						}
						span{
							font-size: rem(16);
							display: block;
							line-height: rem(20);
						}
					}
				}
				
			}
			
		}
		.m-jf{
				width: 100%;
				ul{
					display: flex;
					justify-content: space-around;
					li{
						img{
							width: rem(35);
							height: rem(20);
						}
						span{
							font-size: rem(16);
							display: block;
							line-height: rem(20);
						}
					}
				}
			}
			.m-syn{
				width: 100%;
				ul{
					display: flex;
					flex-wrap: wrap;
					
					li{
						width:33%;
						height: rem(80);
						img{
							width: rem(35);
							height: rem(20);
						}
						span{
							font-size: rem(16);
							display: block;
							line-height: rem(20);
						}
					}
				}
			}
	}
</style>