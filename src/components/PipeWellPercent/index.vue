<template>
  <div class="container">
    <div class="chart" ref="PipeWell_ref"></div>
  </div>
</template>

<script>
export default {
  data() {

    return {
      chartInstance:null,
      data:[
        {name:'给水管井',value:20.62},
        {name:'雨水管井',value:18.56},
        {name:'污水管井',value:16.49},
        {name:'供电管井',value:17.11},
        {name:'燃气管井',value:11.55},
        {name:'检查井',value:15.67},
      ]
    }
  },
  mounted() {
    this.initChart()
    this.updateChart()
  },
  methods:{
    initChart(){
      this.chartInstance=this.$echarts.init(this.$refs.PipeWell_ref)
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
          text:'▎管井占比',
          textStyle:{
            color:'#fff',
            fontSize:16,
            weight:400
          },
          left:16,
          top:16
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 30,
            top: '23%',
            textStyle:{
                color:'#fff'
            },
            formatter:'{name}',
             itemGap : 20
        },
        series: [
            {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [30, 120],
            center: ['30%', '55%'],
            roseType: 'area',
            data:this.data,
            label: {
                show: true,
                position: 'inner',
                fontSize:12,
                color:'#fff',
                formatter:'{b}\n{d}%'
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