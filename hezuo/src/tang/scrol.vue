<template>
	<div ref="wrapperr">
		<slot></slot>
	</div>
</template>

<script>
	import bscroll from 'better-scroll'
	export default{
		data(){
			return{
				wrapper:{}
			}
		},
		created() {
			setTimeout(()=>{
				this.initt()
			},100)
		},
		methods:{
			initt(){
				this.wrapper = new bscroll(this.$refs.wrapperr,{scrollX:true,scrollY:true,click:true,probeType:3})
			}
		}
	}
</script>

<style>
</style>
