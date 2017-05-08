<template>
	<div id="app">
		<headMain></headMain>
		<div class="router">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	import headMain from './components/common/Header.vue';
	var Data = {

	};
	export default {
		components: {
			headMain
		},
		data: function () {
			return Data;
		},
		methods:{

		}
	}
</script>
<style>
	/*@import 'element-ui/lib/theme-default/index.css'*/
	*{
		margin: 0;
		padding: 0
	}
	li{
		list-style: none;
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
	.router{
		width: 100%;
		height: calc(100% - 100px);
	}
	.rightShow{
		width: 100%;
		height: 100%;
	}
</style>