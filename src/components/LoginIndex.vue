<template>
	<div class='reg'>
		<logMain></logMain>
	</div>
</template>
<script>
	import logMain from './Other/Login.vue';
	var Data = {
		
	};
	export default {
		components: {
			logMain
		},
		data: function () {
			return Data;
		}
	}
</script>
<style>
	.reg{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		width: 500px;
		padding: 20px;
	    background-color: #fff;
	    border: 1px #d5d3d3 solid;
	    border-radius: 10px;
	}
</style>