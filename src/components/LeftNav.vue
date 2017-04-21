<template>
	<section>
		<ul class="leftNav">
			<li v-for="item in navList">{{item.navList_1}}</li>
		</ul>
	</section>
</template>
<script>
	export default {
		data:function(){
			return {
				navList:[
					{navList_1: '导航一'},
					{navList_1: '导航二'},
					{navList_1: '导航三'},
					{navList_1: '导航四'}
				]
			}
		},
		methods:{

		}
	}

</script>
<style style lang="sass" scoped>
	section{
		width: 250px;
		height: calc(100% - 120px);
		float: left;
	}
	.leftNav{
		width: 100%;
		height: 100%;
		background: green;
		li{
			width: 100%;
			line-height: 45px;
			background: #fafafa;
			margin: 20px 0;
			text-align: center;
			
		}
	}
</style>