<template>
  <div class="ListCon">
      <div class="addListBnt">
        <el-button type="text" @click="dialogVisible = true">点击添加 Card</el-button>
        <el-dialog @open="openCard()" @close="closeCard()" title="提示" v-model="dialogVisible">

          <el-form :model="form">
            <el-form-item label="名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="日期" :label-width="formLabelWidth">
              <el-date-picker
                v-model="form.date"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions0">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="概要" :label-width="formLabelWidth">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容"
                v-model="form.desc">
              </el-input>
            </el-form-item>
          </el-form>

          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>
      <div class="list" v-for="(item,index) in cardData">
        <div class="listBg">
          <img src="assets/image/listBg.jpg" alt="">
        </div>
        <div class="listAva">
          <img v-bind:src="userAva" alt="">
        </div>
        <div class="userName">{{userName}}</div>
        <ul class="listText">
          <li><em>Name:</em> <p>{{item.name}}</p></li>
          <li><em>Date:</em> <p>{{item.date}}</p></li>
          <li><em>Desc:</em> <p class="descP">{{item.desc}}</p></li>
        </ul>
        <div class="btn">
          <div class="btnEdit" @click="cardEdit(item)">编辑</div>
          <div class="btnDetail" @click="cardDetail(item)">详细</div>
          <div class="btnDele" @click="cardDele(index)">删除</div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // userName: '',
        // userAva: '', 
        dialogVisible: false,
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        form: {
          name: '',
          date: '',
          desc: ''
        },
        formLabelWidth: '120px',
        cardData: [
          {
            name: 'Hello word',
            date: '2017-5-11',
            desc: 'Hello wordHello wordHello word',
          },
          {
            name: 'Hello word',
            date: '2017-5-11',
            desc: 'Hello wordHello wordHello word',
          },
          {
            name: 'Hello word',
            date: '2017-5-11',
            desc: 'Hello wordHello wordHello word',
          },
          {
            name: 'Hello word',
            date: '2017-5-11',
            desc: 'Hello wordHello wordHello word',
          },
          {
            name: 'Hello word',
            date: '2017-5-11',
            desc: 'Hello wordHello wordHello word',
          },
          {
            name: 'Hello word',
            date: '2017-5-11',
            desc: 'Hello wordHello wordHello word',
          }
        ],
        domain: 'http://127.0.0.1:3000/users/'
      }
    },
    methods: {
      cardDele: function(index){
        this.cardData.splice(index,1)
        console.log(index)
      },
      cardEdit: function(item){
        console.log(item)
      },
      cardDetail: function(item){
        console.log(item)
      },
      closeCard: function(){
        console.log('close')
      },
      openCard: function(){
        console.log('open')
      }
    },
    updated: function(){
      this.$store.commit('getLocalMes');
    },
    mounted: function(){
      this.$store.commit('getLocalMes');
      // this.$nextTick(()=>{//更新state的另一种方法，区别于computed方式
      //   this.userName = this.$store.state.userName;
      //   this.userAva = this.$store.state.userAva;
      // });
    },
    computed: {
      userAva: function () {
        return this.$store.state.userAva;
      },
      userName: function () {
        return this.$store.state.userName;
      }
    }
  }
</script>
<style  style lang="sass" scoped>
  img{
    width: 100%;
    height: 100%;
  }
  .ListCon{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;


  }
  .list{
    width: 250px;
    background-color: #fff;
    box-shadow: 3px 4px 20px #999;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    margin: 20px;
  }
  .listBg{
    width: 100%;
    height: 30%;
  }
  .listAva{
    width: 60px;
    height: 60px;
    border-radius: 50px;
    border: 3px #fff solid;
    box-shadow: 2px 2px 10px #999;
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translate(-50%,-50%);
    overflow: hidden;
  }
  .userName{
    width: 100%;
    text-align: center;
    color: #333;
    font-size: 24px;
    padding-top: 22px;
  }
  .listText{
    width: 100%;
    height: 50%;
    padding: 15px;
    box-sizing: border-box;
    li{
      line-height: 26px;
      color: #999;
      em{
        font-style: normal;
        color: #333
      };
      p{
        font-size: 14px;
        margin-left: 5px;
        display: inline-block;
      }
    }
  }
  .btn{
    width: 90%;
    height: 20%;
    padding: 15px;
    box-sizing: border-box;
    text-align: center;
    border-top: 1px #d1d1d1 solid;
    transform: translateX(5%);
    .btnEdit{
      display: inline-block;
      width: 25%;
      height: 26px;
      color: #fff;
      text-align: center;
      line-height: 26px;
      background-color: #d1d1d1;
      border-radius: 5px;
      margin: 0 5px;
      cursor: pointer;
    }
    .btnDetail{
      @extend .btnEdit;
    }
    .btnDele{
      @extend .btnEdit;
    }
  }
  .descP{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .addListBnt{
    width: 100%;
  }
</style>