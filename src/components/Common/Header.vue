<template>
	<header>
		<div class="logo">
			<img v-bind:src="logo" alt="">
		</div>
		<div class="name">{{name}}</div>
		<div class="userInfo">
			<div class="userAva">
				<img v-bind:src="user.userAva" alt="">
			</div>
			<div class="userName">{{user.userName}}</div>
		</div>
	</header>
</template>
<script>
	export default {
		data:function(){
			return {
				logo: 'assets/image/logo.png',
				name:'123123123',
				user: this.userInfo
			}
		},
		props:['userInfo'],
		updated: function(){
			console.log(this.userInfo)
		}
	}

</script>
<style style lang="sass" scoped>
	header{
		width: 100%;
		height: 100px;
		background: #fafafa;
		box-sizing: border-box;
		padding: 10px 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 1px #d1d1d1 solid;
	}
	.logo{
		width: 80px;
		height: 100%;
		padding: 0 30px;
    	border-right: 1px #d1d1d1 solid;
		img{
			width: 100%;
			height: 100%
		}
	}
	.name{
		width: calc(100% - 80px - 200px);
		height: 100%;
		box-sizing: border-box;
		padding: 20px;
		line-height: 40px;
	    font-size: 24px;
	    color: #333;
	}
	.userInfo{
		width: 200px;
		height: 100%;
		margin-right: 20px;
		.userAva{
			width: 80px;
			height: 100%;
			border-radius: 80px;
			float: right;
			overflow: hidden;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.userName{
			width: 120px;
			height: 100%;
			line-height: 80px;
			text-align: center;
			font-size: 24px;
			color: #333
		}
	}
</style>