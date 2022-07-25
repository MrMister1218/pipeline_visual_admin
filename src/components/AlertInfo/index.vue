<template>
  <div class="container">
    <div class="title">
        <i></i>报警信息
    </div>
    <ul class="head">
      <li><span class="type">全部</span><span class="count">{{sum}}</span></li>
      <li v-for="(item,index) in alertCount" :key="index"><span class="type">{{item.type}}</span><span class="count">{{item.count}}</span></li>
    </ul>
    <div class="alertMsg">
      <ul>
        <li v-for="(item,index) in alertMsg" :key="index">
        <span class="serial">{{item.serial}}</span>
        <span class="area">{{item.area}}</span>
        <span class="alertType"><img src="@/assets/images/home/椭圆 5 拷贝.png" alt="">{{item.alertType}}</span>
        <span class="date">{{item.date}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alertCount:[
        {type:'建筑',count:80},
        {type:'水表',count:94},
        {type:'电表',count:87},
        {type:'网关',count:106},
        {type:'水平衡',count:39},
        {type:'电平衡',count:85},
        {type:'管网侧漏',count:73},
        ],
      sum:0,  
      alertMsg:[
        {serial:1,area:'后勤集团',alertType:'网关通讯告警',date:'2022-05-23 14:32:00'},
        {serial:2,area:'大阪1号',alertType:'网关通讯告警',date:'2022-05-23 14:32:00'},
        {serial:3,area:'图书馆',alertType:'网关通讯告警',date:'2022-05-23 14:32:00'},
        {serial:4,area:'风雨操场',alertType:'网关通讯告警',date:'2022-05-23 14:32:00'},
        {serial:5,area:'教学楼',alertType:'网关通讯告警',date:'2022-05-23 14:32:00'},
        {serial:6,area:'学生餐厅',alertType:'网关通讯告警',date:'2022-05-23 14:32:00'},
      ]
    }
  },
  mounted(){
    this.getSum()
  },
  methods:{
    getSum(){
      for(let i=0;i<this.alertCount.length;i++){
        this.sum+=this.alertCount[i].count
      }
    }
  }
 
}
</script>

<style lang="less" scoped>
    .container{
        position: relative;
        width: 1020px;
        height: 310px;
        background: url(@/assets/images/home/矩形\ 2.png) no-repeat;
        background-size: 100% 100%;
        .title{
                position: absolute;
                display: flex;
                top: 16px;
                left: 16px;
                width: 78px;
                height: 18px;
                color: #FFFFFF;
                font-size: 16px;
                font-weight: 400;
                vertical-align: middle;
                justify-content: space-between;
                align-items: center;
                i{  
                    display: inline-block;
                    width: 3px;
                    height: 16px;
                    background-color: #28F2FF;
                }
        };
        .head {
          position: absolute;
          top: 51px;
          left: 30px;
          li{
            box-sizing: border-box;
            width: 180px;
            height: 28px;
            background: url(@/assets/images/home/矩形\ 519.png); 
            margin-bottom: 4px; 
            padding:0 29px;
            line-height:28px;
            display: flex;
            justify-content: space-between;
            .type{
              font-size: 14px;
              font-weight: 400;
              color: #E9F2F3;
            }
            .count{
              font-size: 16px;
              font-weight: 500;
              color: #1CDDFF;
            }
          }
        }
        .alertMsg{
            position: absolute;
            right: 68px;
            bottom: 16px;
            width: 680px;
            height: 266px;
            // background-color: #fff;
            ul li{
              display: flex;
              justify-content: space-between;
              width: 100%;
              height: 43px;
              border-bottom: 1px solid #4b77a48e;
              line-height: 42px;
              font-size: 14px;
              font-weight: 400;
              color: #E9F2F3;
              .alertType{
                display: flex;
                font-size: 14px;
                font-weight: 550;
                color: #FF4646;
              }
            }
        }
    }
</style>