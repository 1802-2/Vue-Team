<template>
  <div class="home">
    <scrolly class="scrollY-wrap">
      <div class="scrollY-inner">
        <banner></banner>
        <homeBtn></homeBtn>
        <hometitle>
          <li slot="title1" class="title1">
            <span>美鲜</span>
            <span>资讯</span>
            <span>中秋节物流放假通知</span>
          </li>
          <li slot="title2">
            <span>更多></span>
          </li>
        </hometitle>
        <div class="title-list">
          <img src="/static/img/358.png" alt="">
           <img src="/static/img/358.png" alt="">
        </div>
        <hometitle>
          <li slot="title1" class="home-title">
            <i></i> <span>美鲜预告</span><i></i>
          </li>
          <li slot="title2">
            <span>更多></span>
          </li>
        </hometitle>
        <scrollx class="scrollX-wrap">
          <div class="title-list">
           <ul >
              <li v-for="item in  goods" @click="xq(item)">
                 <img :src="item.img" alt="">
                 <p>{{item.name}}</p>
                 <span> ￥{{item.price}}</span>
              </li>
           </ul>
          </div>
        </scrollx>
        <hometitle>
          <li slot="title1" class="home-title">
            <i></i> <span>美鲜惠</span><i></i>
          </li>

        </hometitle>
        <scrollx class="scrollX-wrap">
          <div class="title-list">
           <ul >
              <li v-for="item in 6">
                 <img src="/static/img/358.png" alt="">
              </li>
           </ul>
          </div>
        </scrollx>
        <!-- 推荐 -->
        <hometitle>
          <li slot="title1" class="home-title">
            <i></i> <span>推荐商品</span><i></i>
          </li>
        </hometitle>
        <div>
          <ul class="goodList">
            <li v-for="item in  goods" @click="xq(item)">
              <img :src="item.img" alt="">
              <div>
                <p>{{item.name}}</p>
                <p><span>￥ {{item.price}}</span> <span>/{{item.specification}}</span></p>
                <p><span>美鲜自营</span></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scrolly>
  </div>


</template>

<script>
  import banner from "../base/banner.vue"
  import homeBtn from "../base/home-btn.vue"
  import hometitle from "../base/home-title.vue"
  import scrollx from "../base/scrollx.vue"
  import scrolly from "../base/scrolly.vue"
  export default {
    components: {
      banner,
      homeBtn,
      hometitle,
      scrollx,
      scrolly
    },
    data() {
      return {
        goods:[
          {
          	"name":"Mydibel 嘉迪多菜1/4薯条2kg/袋...",
          	"price":"113.00",
          	"img":"/static/img/358.png",
          	"id":"0",
          	"count":"0",
          	"specification":"单袋",
          	"weight":"15.00kg",
          	"attention":false,
          	"recording":false
          },
          {
          	"name":"Mydibel 嘉迪多菜1/4薯条2kg/袋...",
          	"price":"113.00",
          	"img":"/static/img/358.png",
          	"id":"0",
          	"count":"0",
          	"specification":"单袋",
          	"weight":"15.00kg",
          	"attention":false,
          	"recording":false
          },
          {
          	"name":"Mydibel 嘉迪多菜1/4薯条2kg/袋...",
          	"price":"113.00",
          	"img":"/static/img/358.png",
          	"id":"0",
          	"count":"0",
          	"specification":"单袋",
          	"weight":"15.00kg",
          	"attention":false,
          	"recording":false
          },
          {
          	"name":"Mydibel 嘉迪多菜1/4薯条2kg/袋...",
          	"price":"113.00",
          	"img":"/static/img/358.png",
          	"id":"0",
          	"count":"0",
          	"specification":"单袋",
          	"weight":"15.00kg",
          	"attention":false,
          	"recording":false
          },
          {
          	"name":"Mydibel 嘉迪多菜1/4薯条2kg/袋...",
          	"price":"113.00",
          	"img":"/static/img/358.png",
          	"id":"0",
          	"count":"0",
          	"specification":"单袋",
          	"weight":"15.00kg",
          	"attention":false,
          	"recording":false
          },
          {
          	"name":"Mydibel 嘉迪多菜1/4薯条2kg/袋...",
          	"price":"113.00",
          	"img":"/static/img/358.png",
          	"id":"0",
          	"count":"0",
          	"specification":"单袋",
          	"weight":"15.00kg",
          	"attention":false,
          	"recording":false
          },
          {
          	"name":"Mydibel 嘉迪多菜1/4薯条2kg/袋...",
          	"price":"113.00",
          	"img":"/static/img/358.png",
          	"id":"0",
          	"count":"0",
          	"specification":"单袋",
          	"weight":"15.00kg",
          	"attention":false,
          	"recording":false
          }
        ]
      }
    },
		methods:{
			xq(item){
					this.$router.push({
						name:'xq',
						params:{
							obj:item
						}
					})
			}
		}
  }
</script>

<style lang="scss">
  @import "@/assets/css/rem.scss";
  .scrollY-wrap{
   height: calc(100vh - 2.5rem);
   overflow: hidden;
  }
  .scrollX-wrap{
    width: 100vw;
  }

  .title1{
    display: flex;
    align-items: center;
    &>span:nth-child(2){
      padding:rem(5) rem(10);
      background: #FE6139;
      color:#fff;
      font-size: rem(10);
      border-radius: rem(5);
      margin: 0 rem(10);
    }
     &>span:nth-child(3){
      position: relative;
      padding: rem(10);
      font-size: rem(10);
     }
     &>span:nth-child(3):after{
       position:absolute;
       top:-10%;
       left:0;
       display: block;
       content: "";
       width: 1px;
       height: rem(40);
       border-left: 1px solid #ccc;
     }
  }
  .home-title {
  width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &>span {
      margin: 0 rem(20);
    }

    &>i {
      width: 20%;
      border-top: rem(1) solid #eee;
      height: rem(1);
    }
  }
  .title-list{
    display: flex;
    width: 100vw;
    &>img{
      width: 50%;
      height:rem(120);
    }
    &>ul{
       display: flex;
        width:200vw;

          border-top:rem(1) solid #ccc;

      &>li{
        width: rem(120);
        font-size: rem(10);
        text-align: center;
         line-height: rem(25);

        img{
          display: block;
          width: 100%;
          height: rem(130);
          border-right:1px solid #ccc;
           box-sizing: border-box;
          margin-bottom: rem(10) rem(2);
        }

        p{

          padding:rem(2);
        }
        span{
          color:#f00;
        }
      }
      &>li:last-child {
        img{
          border: 0;
        }
      }
    }
  }



  .goodList{
    &>li{
      display: flex;
      border-top:rem(1) solid #ccc;
      padding: rem(10);
      &>img{
        width:rem(100);
        height: rem(100);
      }
      &>div{
        padding: rem(10);
        &>p{
           margin-bottom: rem(10);
        }
        &>p:nth-child(1){

        }
        &>p:nth-child(2){
          &>span:nth-child(1){
            color:#F2733D;
          }
          &>span:nth-child(2){
            color:#CACACA;
          }
        }
        &>p:nth-child(3){
          margin-bottom: 0;
          &>span{
            color:#fff;
           background:#1AA034;
           font-size: rem(10);
           padding: rem(5) rem(10);
           border-radius:rem(5);
          }
        }
      }
    }
  }
</style>
