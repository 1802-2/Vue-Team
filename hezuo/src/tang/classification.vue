<template>
	<div v-if="data[0]!=undefined" class="t-box">
		<div class="t-left">
			<ul>
				<li v-for="(item,index) in data" @click="leftTap(index)" :class="{active:num==index}">{{item.name}}</li>
			</ul>
		</div>
		<div class="t-right">
			<div class="t-right-box" v-for="(item,index) in data[num].arr">
				<p class="t-right-tlt">
					<span>{{item.title}}</span>
					<span>></span>
				</p>
				<div class="sp-zl">
					<div v-for="(items,indexs) in item.list" @click="zlchild(items)">
						<img v-lazy="items.img" alt="">
						<p class="sp-zl-tlt">{{items.name}}</p>
					</div>
				</div>
			</div>
		</div>
		<zlchild :zldata="zld" ref="zlc"></zlchild>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				data:[],
				num:0,
				zld:[],
				flag:false
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
			},
			zlchild(item){
				console.log(item.list)
				this.zld = item.list
				this.flag = true
				this.$refs.zlc.out()
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
				.sp-zl-tlt{
					font-size: rem(28);
					color: gray;
				}
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
	.active{
		background: white;
	}
	.t-right-tlt{
		display: flex;
		justify-content: space-between;
		border-left: 3px solid green;
		margin: rem(10) rem(10);
		 span{
			 margin: 0 rem(10);
		 }
	}
</style>
