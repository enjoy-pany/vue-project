<template>
	<div>
		<span class="forFile">
			<p>{{fileName}}</p>
			<input type="file" name='bg' v-on:change="choosecoverimg">
		</span>
		<div class="showImg"><img id="showImgs" v-bind:src="fileUrl" /></div>
		<input type="hidden" class="hide" v-model="fileUrl" />
	</div>
</template>
<script>
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

</script>
<style>
	.showImg{
		width: 250px;
		height: 250px;
	}
	.showImg>img{
		width: 100%;
		height: 100%
	}
</style>