<template>
	<section>
		<ul class="leftNav">
			<li v-for="item in navList">
				<i v-bind:class="classObject"  v-on:click="active"></i>
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
					{navList_1: '导航一',path:'/nav1'},
					{navList_1: '导航二',path:'/nav2'},
					{navList_1: '导航三',path:'/nav3'},
					{navList_1: '导航四',path:'/nav4'}
				],
				isActive: true
			}
		},
		methods:{
			active: function(){
				if(this.isActive == true){
					this.isActive = false
				}else{
					this.isActive = true
				}
			}
		},
		computed: {
			classObject: function(){
				return {
					"el-icon-caret-right": this.isActive,
					"el-icon-caret-bottom": !this.isActive
				}
			}
		}
	}

</script>
<style style lang="sass" scoped>
	section{
		width: 250px;
		height: calc(100% - 100px);
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