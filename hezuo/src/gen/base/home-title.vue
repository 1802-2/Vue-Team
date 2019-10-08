<template>
  <div id="title">
    <ul>
      <slot name="title1"></slot>
     <slot name="title2"></slot>
    </ul>

  </div>
</template>

<script>
</script>

<style scoped lang="scss">
  @import "@/assets/css/rem.scss";
  #title>ul{
    display: flex;
    align-items: center;
    padding:rem(15) rem(10);
    height: rem(35);
    justify-content: space-between;
    position: relative;
    &>li:nth-child(2){
      color:#BBBBBB;
      font-size: rem(10);
      position:absolute;
      right: rem(10);
    }
  }

</style>
