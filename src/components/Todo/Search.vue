<template>
  <div>
    <el-form  :label-position="labelPosition" ref="formData" :model="formData" label-width="200px">
      <el-form-item label="Input user_name for t_id:">
        <el-input
          placeholder="user_name for teacher"
          icon="search"
          v-model="formData.input1"
          :on-icon-click="teaSeachClick">
        </el-input>
      </el-form-item>
      <el-form-item label="Input user_name for  s_id:">
        <el-input
          placeholder="user_name for student"
          icon="search"
          v-model="formData.input2"
          :on-icon-click="stuSeachClick">
        </el-input>
      </el-form-item>
    </el-form>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="user_name"
        label="user_name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="s_id"
        label="s_id">
      </el-table-column>
      <el-table-column
        prop="t_id"
        label="t_id">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formData: {
          input1: '',
          input2: '',
        },
        labelPosition: 'top',
        tableData: [],
        domain: 'http://127.0.0.1:3000/users/'
      }
    },
    methods: {
      teaSeachClick(ev) {
        console.log(ev);
        let userName = this.formData.input1;
        this.$http.get(this.domain + 'queryByTeacher?user_name='+userName )
        .then((res)=>{
          console.log(res)
          if(res.data.length == 0){
            alert('输入的用户信息不存在！')
          }else{
            this.tableData.push({id: this.tableData.length+1,user_name: userName,s_id:'',t_id: res.data[0].id})
          }
        }, (err)=>{
          console.log(err)
        }); 
      },
      stuSeachClick(ev) {
        console.log(ev);
        let userName = this.formData.input2;
        this.$http.get(this.domain + 'queryByUser?user_name='+userName )
        .then((res)=>{
          console.log(res)
          if(res.data.length == 0){
            alert('输入的用户信息不存在！')
          }else{
            this.tableData.push({id: this.tableData.length+1,user_name: userName,s_id:res.data[0].id,t_id: ''})
          }
        }, (err)=>{
          console.log(err)
        }); 
      }
    }
  }
</script>