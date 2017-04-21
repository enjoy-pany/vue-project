<template>
	<div id="app">
		<headMain></headMain>
		<leftNav></leftNav>
		<rightShow></rightShow>
		<!-- <bg v-on:choosecoverimg="getName"></bg>
		<button type='button' v-on:click="onSend">提交</button> -->
	</div>
</template>
<script>
	import bg from './components/uploadbg.vue';
	import headMain from './components/Header.vue';
	import leftNav from './components/LeftNav.vue';
	import rightShow from './components/RightShow.vue';
	var Data = {
		configData:{
	        one:{
				bg:"",
				title:"",
				des:""
			},
			source:[{
				subTitle:"",
				textList:[
					{
						text:'',
						audio:''
					}
				],
				imgList:[
					{
						img:'',		
						audio:''
					}
				]
			}]
		}
	};
	export default {
		components: {
			bg,
			headMain,
			leftNav,
			rightShow
		},
		data: function () {
			return Data;
		},
		methods:{
			getName: function (msg) {
				this.configData.one.bg = msg;
			},
			onSend:function(){
	    		var data = this.configData;
	    		var _data = JSON.stringify(data);
	    		console.log(_data)
	    	}
		}
	}
</script>
<style>
	*{
		margin: 0;
		padding: 0
	}
	html,body{
		width: 100%;
		height: 100%
	}
	#app{
		width: 100%;
		height: 100%;
		background-color: #fafafa;
	}
</style>