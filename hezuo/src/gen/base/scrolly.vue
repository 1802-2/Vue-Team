<template>
  <div  ref="scrollY">
      <slot></slot>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default{
    data(){
      return {
        scrollY:{}
      }
    },
    mounted(){
     setTimeout(()=>{
       this.inits()
     },300)
    },
    methods:{
      inits(){
        this.scrollWrap=new BScroll(this.$refs.scrollY,{
            click:true,
            probeType:3,
          })
      }
    }
  }
</script>

<style>
</style>
