<template>
	<div class='reg'>
		<regMain></regMain>
	</div>
</template>
<script>
	import regMain from './Other/Register.vue';
	var Data = {
		
	};
	export default {
		components: {
			regMain
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
	}
</style>