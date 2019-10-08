<template>
  <nav class="home-list">
      <ul>
        <li>
          <img src="/static/img/358.png" alt="">
          <span>新上架</span>
        </li>
        <li>
          <img src="/static/img/358.png" alt="">
          <span>样品区</span>
        </li>
        <li>
          <img src="/static/img/358.png" alt="">
          <span>好货推荐</span>
        </li>
        <li>
          <img src="/static/img/358.png" alt="">
          <span>推荐列表</span>
        </li>
      </ul>
  </nav>
</template>

<script>
</script>

<style scoped lang="scss">
   @import "@/assets/css/rem.scss";
.home-list{
 width:100vw;
  &>ul{

    display: flex;
    justify-content: space-around;
    border-bottom: rem(1) solid #eee;
    padding:rem(10) 0;
  }
  &>ul>li>img{
    display: block;
    width: rem(50);
    height: rem(50);
    margin:rem(10) auto;
  }
}
</style>
