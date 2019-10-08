<template>
  <div class="banner-wrap">
    <mt-swipe :auto="5000" class="banner">
      <mt-swipe-item v-for="src in banner" class="banner-item"><img :src="'/static/img/'+src" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        banner: ['358.png', '358.png', '358.png', '358.png','358.png']
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/css/rem.scss";
  .banner-wrap {
    width:100vw;
    height: rem(260);

    & img{
      width: 100%;
       height: rem(260);
    }
  }
  .banner-wrap  >>> .mint-swipe-indicator{
    width: rem(10);
    height:rem(10);
    background:#fff;
    opacity: .5;
  }
  .banner-wrap >>>  .is-active{
    opacity: 1;
  }
</style>
