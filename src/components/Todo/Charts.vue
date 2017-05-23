<template>
  <div>
    <div id="main" style="width: 600px;height: 400px;"></div>
    <div class="btn">
      <span class="wrapper">
        <el-button type="success" v-on:click='upData'>更新</el-button>
        <el-button type="danger">删除</el-button>
        <el-button type="info" v-on:click='addData'>添加</el-button>
      </span>
    </div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    name: 'chart',
    data () {
      return {
        charts: '',
        opinion:['石家庄','武汉','北京','天津','成都','郑州'],
        opinionData:[
          {value:0, name:'石家庄'},
          {value:0, name:'武汉'},
          {value:0, name:'北京'},
          {value:0, name:'天津'},
          {value:0, name:'成都'},
          {value:0, name:'郑州'}
        ],
        domain: 'http://127.0.0.1:3000/users/'
      }
    },
    methods:{
      drawBar(id){
        this.charts = echarts.init(document.getElementById(id))
        this.charts.setOption({
         title: {
          text: '五月份参考均价图',
          left: 'center'
         },
         tooltip: {
           trigger: 'item',
           formatter: '{a}<br/>{b}:{c}'
         },
         legend: {
           orient: 'vertical',
           x: 'left',
           data:['房价(元/平米)']
         },
         xAxis: {
            data: this.opinion
         },
         yAxis: {},
         series: [
           {
             name:'房价(元/平米)',
             type:'bar',
             data:this.opinionData
           }
         ]
       })
      },
      addData () {
        this.opinion.push('张家口')
        this.opinionData.push({value:200, name:'张家口'})
        this.$nextTick(function() {
            this.drawBar('main')
        })
      },
      upData () {
        this.opinion = []
        this.opinionData = []
        this.$http.get(this.domain + 'getCharsData')
        .then((res)=>{
          if(res.data.length == 0){
            alert('刷新失败！')
          }else{
            console.log(res)
            for(let i in res.data){
              this.opinion.push(res.data[i].city);
              this.opinionData.push({value: res.data[i].price, name: res.data[i].city})
            }
            console.log(this.opinion)
            this.$nextTick(function() {
                this.drawBar('main')
            })
          }
        }, (err)=>{
          console.log(err)
        });
      } 
    },
    mounted () {
      this.upData();
      this.$nextTick(function() {
          this.drawBar('main')
      })
    }
  }
</script>