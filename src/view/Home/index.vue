<template>
  <div class="page">
    <div class="screen-container">
      <Header></Header>
      <div class="screen-body">
        <section class="screen_left">
          <div class="left_top">
            <SchoolInfor></SchoolInfor>
          </div>
          <div class="left_middle">
            <PipeNetCont></PipeNetCont>
          </div>
          <div class="left_bottom">
            <BuildingCost></BuildingCost>
          </div>
        </section>
        <section class="screen_middle">
          <div class="middle_top">
            <Map></Map>
          </div>
          <div class="middle_bottom">
            <AlertInfo></AlertInfo>
          </div>
        </section>
        <section class="screen_right">
          <div class="right_top">
            <SchoolCostCompare></SchoolCostCompare>
          </div>
          <div class="right_middle">
            <PipeWellPercent></PipeWellPercent>
          </div>
          <div class="right_bottom">
            <Devices></Devices>
          </div>
        </section>
      </div>

    </div>  
  </div>
</template>

<script>
import Header from '@/view/Home/Header'
import SchoolInfor from '@/components/SchoolInfo'
import PipeNetCont from '@/components/PipeNetCount'
import BuildingCost from '@/components/BuildingCost'
import Map from '@/components/Map'
import SchoolCostCompare from '@/components/SchoolCostCompare'
import PipeWellPercent from '@/components/PipeWellPercent'
import Devices from '@/components/Devices'
import AlertInfo from '@/components/AlertInfo'
export default {
  name:'',
  components:{
    Header,
    SchoolInfor,
    PipeNetCont,
    BuildingCost,
    Map,
    SchoolCostCompare,
    PipeWellPercent,
    Devices,
    AlertInfo
  }
}
</script>

<style lang="less" scoped>
.page{
  position: relative;
  background: url(@/assets/images/login/背景.png);
  background-size: 100% auto;
}
.screen-container{
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 0 30px;
  box-sizing: border-box;
  .screen-body{
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: 22px;
    .screen_left{
      height: 100%;
      width: 21.5%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .left_top{
        width: 100%;
      }
      .left_middle{
        width: 100%;
        margin-top:20px ;
      }
      .left_bottom{
        width: 100%;
        margin-top:20px ;
      }
      
    }
    .screen_middle{
      height: 100%;
      width: 54.8%;
      margin-left: 1.2%;
      margin-right: 1.2%;
      .middle_top{
        width: 100%;
      }
      .middle_bottom{
        width: 100%;
        margin-top:20px ;
      }
    }
    .screen_right{
      height: 100%;
      width: 21.5%;
      .right_top{
        width: 100%;
      }
      .right_middle{
        width: 100%;
        margin-top:20px ;

      }
      .right_bottom{
        width: 100%;
        margin-top:20px ;
      }
    }
  }
}




</style>