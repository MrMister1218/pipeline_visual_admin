<template>
  <div class="container">
    <div class="title">
        <i></i>物联设备
    </div>
    <div class="devices-container">
        <div class="online"><span><i>964</i> 台</span><img src="@/assets/images/home/在线.png" alt="">在线</div>
        <div class="offline"><span><i>86</i> 台</span><img src="@/assets/images/home/离线.png" alt="">离线</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },


}
</script>

<style lang="less" scoped>
  .container{
    position: relative;
    width: 400px;
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
    .devices-container{
        margin: 70px auto;
        display: flex;
        width: 161+161+18px;
        height: 193px;
        justify-content: space-between;
        div{
            position: relative;
            text-align: center;
            color: #E9F2F3;
            font-size: 16px;
            span{
                position: absolute;
                left: 50%;
                top:93px;
                transform: translateX(-50%);
                i{
                    font-size: 22px;
                    font-weight: bold;
                }
            }
        }
        .online i{
            color:#30FFD1
        }
         .offline i{
            color:#FFCF29
        }
    }
  }
</style>