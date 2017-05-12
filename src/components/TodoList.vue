<template>
	<div class="todoList">
		<leftNav></leftNav>
		<div class="rightShow">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	import leftNav from './common/LeftNav.vue';
	var Data = {
		
	};
	export default {
		components: {
			leftNav
		},
		data: function () {
			return Data;
		}
	}
</script>
<style>
	.todoList{
		width: 100%;
		height: 100%;
	}
	.rightShow{
		width: calc(100% - 250px);
		height: 100%;
		box-sizing: border-box;
		padding: 40px;
		float: right;
	}
</style>