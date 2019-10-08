<template>
  <div  ref="scrollX">
      <slot></slot>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default{
    data(){
      return {
        scrollX:{}
      }
    },
    mounted(){
     setTimeout(()=>{
       this.inits()
     },300)
    },
    methods:{
      inits(){
        this.scrollWrap=new BScroll(this.$refs.scrollX,{
            click:true,
            probeType:3,
            scrollY:false,
            scrollX:true
          })
          let children=this.$refs.scrollX.children[0].children[0].children;
          let w=0;
          Array.from(children).forEach(item=>{
            w+=item.clientWidth;
          })

          console.log(w)
          this.$refs.scrollX.children[0].style.width=w+"px"
      }
    }
  }
</script>

<style>
</style>
