<template>
  <div class="container">
    <div class="chart" ref="PipeNet_ref"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartInstance:null,
      data:[
        {
          pipe:'给水',
          long:530
        },
        {
          pipe:'雨水',
          long:640
        },
        {
          pipe:'污水',
          long:420
        },
        {
          pipe:'供电',
          long:750
        },
        {
          pipe:'路灯',
          long:600
        },
        {
          pipe:'燃气',
          long:500
        },
        
      ]
    }
  },
  mounted() {
    this.initChart()
    this.updateChart()
  },
  methods:{
    initChart(){
      this.chartInstance=this.$echarts.init(this.$refs.PipeNet_ref)
    },
    getData(){

    },
    updateChart(){
      const pipe=this.data.map((item)=>{
        return item.pipe
      })
      const long=this.data.map(item=>{
        return item.long
      })
      const option={
        title:{
          text:'▎管网统计',
          textStyle:{
            color:'#fff',
            fontSize:16,
            weight:400
          },
          left:16,
          top:16
        },
        grid:{
          left: '3%',
          right: '4%',
          bottom: '3%',
          top:'23%',
          containLabel: true
        },
        xAxis:{
          type:'category',
          data:pipe,
          axisLabel:{
            color:'#E9F2F3',
          },
          axisLine:{
            lineStyle:{
              color:'#206489'
            }
          },

        },
        yAxis:{
          type:'value',
          name:'单位:KM',
          axisLine:{
            show:true,
            lineStyle:{
              color:'#206489'
            }
          },
          axisLabel:{
            color:'#E9F2F3'
          },
          splitLine:{
            lineStyle:{
              color:'#072651'
            }
          }

        },
        series:[
          {
            name:'管网长度',
            type:'bar',
            data:long,
            barWidth:'16px',
            itemStyle: {
              normal: {
                color: this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{  
                  offset: 0,
                  color: '#001541'
                }, {
                  offset: 1,
                  color: '#28F2FF'
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