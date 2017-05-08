<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="登录账号">
      <el-input v-model="form.account"></el-input>
    </el-form-item>
    <el-form-item label="你的昵称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="电子邮件">
      <el-input v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item label="设置密码">
      <el-input v-model="form.password" type='password'></el-input>
    </el-form-item>
    <el-form-item label="确认密码">
      <el-input v-model="form.confirmPassword" type='password'></el-input>
    </el-form-item>
    <el-form-item label="上传头像">
      <el-upload
        class="avatar-uploader"
        action="//jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarScucess"
        :before-upload="beforeAvatarUpload">
        <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>
    <el-form-item label="个人说明">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即注册</el-button>
    </el-form-item>
  </el-form>
</template>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
<script>
  export default {
    data() {
      return {
        form: {
          account: '',
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          imageUrl: '',
          desc: ''
        },
        domain: 'http://127.0.0.1:3000/users/'
      }
    },
    methods: {
      onSubmit() {
        let data = {
          account : this.form.account,
          name : this.form.name,
          email : this.form.email,
          password : this.form.password, 
          confirmPassword : this.form.confirmPassword, 
          imageUrl : this.form.imageUrl, 
          description : this.form.desc
        }
        this.$http.post(this.domain + 'userInfo', data)
        .then((res)=>{
          this.$message({
            message: '恭喜你，注册成功！',
            type: 'success'
          });
        }, (err)=>{
           this.$message.error('注册失败！');
        }); 
      },
      handleAvatarScucess(res, file) {
        console.log(res,file)
        this.form.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>