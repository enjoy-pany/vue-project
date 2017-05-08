<template>
	<div class="todoList">
		<leftNav></leftNav>
		<section>
			<div class="rightShow">
				<router-view></router-view>
			</div>
		</section>
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
	section{
		width: calc(100% - 250px);
		height: calc(100% - 100px);
		box-sizing: border-box;
		padding: 20px;
		float: right;
	}
</style>