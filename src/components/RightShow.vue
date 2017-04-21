<template>
	<section>
		<div class="rightShow"></div>
	</section>
</template>
<!-- <script>
	export default {
		data:function(){
			return {
				fileUrl: '',
				fileName:''
			}
		},
		methods:{
			choosecoverimg: function (e) {
				var file = e.target.files[0];
				var data = new FormData();
				data.append('file', file);  

				this.$http.post('http://172.16.0.107:9011/pages/159/file', data)
				.then((res)=>{
					console.log(res)
					this.fileUrl = 'http://172.16.0.107:9011/pages/159/'+res.data.data.key;
				}, (err)=>{
					console.log(err)
				});			  
				this.fileName = e.target.files[0].name;
				this.$emit('choosecoverimg',this.fileName)
			}

		}
	}

</script> -->
<style style lang="sass" scoped>
	section{
		width: calc(100% - 250px);
		height: calc(100% - 100px);
		box-sizing: border-box;
		padding: 20px;
		float: right;
	}
	.rightShow{
		width: 100%;
		height: 100%;
		background: pink;
	}
</style>