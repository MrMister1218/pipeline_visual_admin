<template>
  <div class="container">
    <div class="chart" ref="buildingCost_ref"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartInstance:null,
      data:[
        {building:'通讯楼',
          cost:'9.75'
        },
        {building:'学生公寓',
          cost:7.36
        },
        {building:'外语楼',
          cost:4.95
        }, 
        {building:'2号餐厅',
          cost:6.04
        },
        {building:'1号餐厅',
          cost:6.89
        },
        {building:'实验楼',
          cost:5.28
        },
        {building:'教学楼',
          cost:12.60
        },
      ] 
    }
  },
  mounted() {
    this.initChart()
    this.updateChart()
  },
  methods:{
    //初始化chart
    initChart(){
      this.chartInstance=this.$echarts.init(this.$refs.buildingCost_ref)
    },
    getData(){

    },
    //格式化数据并配置chart
    updateChart(){
      this.data.sort((a,b)=>{
        return a.cost-b.cost
      })
      const buildings=this.data.map((item=>{
        return item.building
      }))
      const cost=this.data.map((item)=>{
        return item.cost
      })
      const option={
        title:{
          text:'▎学校建筑用电排名',
          textStyle:{
            color:'#fff',
            fontSize:16,
            weight:400
          },
          left:16,
          top:16
        },
        tooltop:{
          trigger:'item',
          formatter:'{c}%'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis:{
          type:'value',
          splitLine:{
            show:false
          },
          axisLine:{
            lineStyle:{
              color:'#206489'
            }
          },
          axisLabel:{
            show:false
          },
        },
        yAxis:{
          type:'category',
          data:buildings,
          axisLine:{
            lineStyle:{
              color:'#206489'
            }
          },
          axisLabel:{
            color:'#E9F2F3',
          },
        },
        series:[
          {
            name:'用电占比',
            type:'bar',
            showBackground: true,
            label: {
              position: 'right',
              show: true,
              color: '#fff' ,
            },
            data:cost,
            barWidth:'14px',
              itemStyle: {
                normal: {
                  borderRadius:[0, 7, 7, 0],
                  color: this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{  
                    offset: 0,
                    color: '#03132E'
                  }, {
                    offset: 1,
                    color: '#F8BE42'
                  }]),
                }
            },

          }
        ]
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>

<style lang="less" scoped>
  .container{
  width: 400px;
  height: 310px;
  background: url(@/assets/images/home/矩形\ 2.png) no-repeat;
  background-size: 100% 100%;
  }
</style>