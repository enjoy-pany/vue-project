<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="登录账号">
      <el-input v-model="form.account"></el-input>
    </el-form-item>
    <el-form-item label="登录密码">
      <el-input v-model="form.password" type='password'></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
      <el-button type="primary" @click="goRegister">立即注册</el-button>
    </el-form-item>
  </el-form>
</template>
<style>

</style>
<script>
  export default {
    data() {
      return {
        form: {
          account: '',
          password: ''
        },
        domain: 'http://127.0.0.1:3000/users/'
      }
    },
    methods: {
      onSubmit() {
        let data = this.form.account;
        this.$http.get(this.domain + 'login?account='+ data)
        .then((res)=>{
          if(res.data.length==0){
            this.$message.error('用户名不存在！');
          }else if(res.data[0].password == this.form.password){
            this.$message({
              message: '恭喜你，登录成功！',
              type: 'success'
            });
            const storage=window.localStorage;
            let userObj = {"loginName": res.data[0].name,"loginNav": res.data[0].imageUrl};
            storage.setItem("userInfo",JSON.stringify(userObj));
            this.$router.push('/todolist')
          }else{
            this.$message.error('密码错误！');
          }
        }, (err)=>{
           this.$message.error('登录失败！');
        }); 
      },
      goRegister() {
        this.$router.push('/register')
      }
    }
  }
</script>