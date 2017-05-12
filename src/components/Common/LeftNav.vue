<template>
	<section>
		<ul class="leftNav">
			<li v-for="(item, index) in navList">
				<i v-bind:class="{'el-icon-caret-bottom': item.ac, 'el-icon-caret-right': !item.ac}"  v-on:click="active(item, index)"></i>
				<router-link :to="{path: item.path}">{{item.navList_1}}</router-link>
			</li>
		</ul>
	</section>
</template>
<script>
	export default {
		data:function(){
			return {
				navList:[
					{navList_1: '信息查询',path:'/todolist/todolist_1', ac: false},
					{navList_1: '课程预约',path:'/todolist/todolist_2', ac: false},
					{navList_1: '事务列表',path:'/todolist/todolist_3', ac: false},
					{navList_1: '导航四',path:'/todolist/todolist_4', ac: false}
				]
			}
		},
		methods:{
			active: function(item, index){
				item.ac = !item.ac
			}
		}
	}

</script>
<style style lang="sass" scoped>
	section{
		width: 250px;
		height: 100%;
		float: left;
		box-sizing: border-box;
    	border-right: 1px #d1d1d1 solid;
    	padding-top: 20px;
	}
	.leftNav{
		width: 100%;
		height: 100%;
		li{
			width: 100%;
			line-height: 45px;
			background: #fafafa;
			margin-bottom: 20px;
			text-align: center;
			a{
				text-decoration: none;
				color: #333;
			}
			i{
				text-indent: -2em;
				cursor: pointer;
			}
		}
	}
</style>