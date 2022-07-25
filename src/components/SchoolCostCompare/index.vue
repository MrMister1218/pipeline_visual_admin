<template>
  <div class="container">
    <div class="chart" ref="SchoolCostCompare"></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            chartInstance:null,
            data:[
                {
                    mouth:'1月',
                    costIn2018:15000 ,
                    costIn2019: 15000,
                },
                {
                    mouth:'2月',
                    costIn2018:20000 ,
                    costIn2019: 25000,
                },
                {
                    mouth:'3月',
                    costIn2018: 15000,
                    costIn2019: 18000,
                },
                {
                    mouth:'4月',
                    costIn2018:29000 ,
                    costIn2019: 28000,
                },
                {
                    mouth:'5月',
                    costIn2018: 37000,
                    costIn2019: 34000,
                },
                {
                    mouth:'6月',
                    costIn2018: 33000,
                    costIn2019: 30000,
                },
                {
                    mouth:'7月',
                    costIn2018: 45000,
                    costIn2019: 47000,
                },
                {
                    mouth:'8月',
                    costIn2018: 48500 ,
                    costIn2019: 49000,
                },
                {
                    mouth:'9月',
                    costIn2018: 38000,
                    costIn2019: 39000,
                },
                {
                    mouth:'10月',
                    costIn2018: 28000,
                    costIn2019: 30000,
                },
                {
                    mouth:'11月',
                    costIn2018: 20000,
                    costIn2019: 21500,
                },
                {
                    mouth:'12月',
                    costIn2018: 16000,
                    costIn2019: 16000,
                },
                
            ]
        }
    },
  mounted() {
    this.initChart()
    this.updateChart()
  },
  methods: {
    initChart(){
            this.chartInstance=this.$echarts.init(this.$refs.SchoolCostCompare)
        },
        updateChart(){
            const mouth=this.data.map(item=>{
                return item.mouth
            })
             const costIn2018=this.data.map(item=>{
                return item.costIn2018
            })
             const costIn2019=this.data.map(item=>{
                return item.costIn2019
            })
            const option={
                title:{
                text:'▎学校用电同比',
                textStyle:{
                    color:'#fff',
                    fontSize:16,
                    weight:400
                },
                left:16,
                top:16
                },
                grid:{
                    top:'35%',
                    left: '1%',
                    right: '2%',
                    bottom: '3%',
                    containLabel: true
                },
                legend: {
                    top: '16%' ,
                    textStyle:{
                        color:'#fff', 
                    }
                },
                xAxis:{
                    type:'category',
                    data:mouth,
                    axisLabel:{
                        interval:0
                    },
                    
                    
                },
                yAxis:{
                    type:'value',
                    name:'KW·H',
                },
                series:[
                    {
                        name:'2018年用电量',
                        type:'bar',
                        barWidth:10,
                        data:costIn2018,
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

                    },
                    {
                        name:'2019年用电量',
                        type:'line',
                        data:costIn2019,
                        itemStyle:{
                            color:'#F8BE42',
                        }
                    },
                ]
            }
            this.chartInstance.setOption(option)
        }
  },

}
</script>

<style lang="less" scoped>
    .container{
    position: relative;
    width: 400px;
    height: 270px;
    background: url(@/assets/images/home/矩形\ 2.png);
    background-size: 100%;
    }
</style>