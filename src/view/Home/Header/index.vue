<template>
  <div class="header">
    <div class="logo"></div>
    <div class="mainTitle">
        地下管网三维可视化信息管理平台
    </div>
    <ul class="nav">
        <li><a href="#">系统主页</a></li>
        <li><a href="#">地下管网系统</a></li>
        <li><a href="#">能源管理系统</a></li>
        <li><a href="#">官网侧漏系统</a></li>
        <li><a href="#">官网运维系统</a></li>
        <li><a href="#">资源下载</a></li>
    </ul>

    <div class="userInfo">
        <span>2022-5-23  星期一 10:46</span> <span class="avatar"></span>
    </div>

    <div class="underLine"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.header{
    position: relative;
    width:100%;
    height: 100px;
    padding: 0 30px;
    box-sizing: border-box;
    .logo{
        position: absolute;
        top: 20px;
        width: 200px;
        height: 36px;
        background: url(@/assets/images/home/logo.png) no-repeat;
        background-size: contain;
    }
    .mainTitle{
        position: absolute;
        top: 62px;
        left: 30px;
        color: #28F2FF;
        font-size: 22px;
        font-weight: 500;

    }
    .nav{
        position: absolute;
        display: flex;
        width: 1064px;
        height: 37px;
        left: 50%;
        margin-top: 22px;
        transform: translateX(-50%);
        justify-content: space-between;
        li{

            background: linear-gradient(0deg, #28F2FF 0%, rgba(0, 24, 68, 0.22) 100%);
            display: block;
            line-height: 37px;
            text-align: center;
            background: linear-gradient(0deg, rgba(160, 230, 251, 0.38) 0%, #75A3E7 100%);
            border: 1px solid;
            border-image: linear-gradient(0deg, rgba(65, 216, 238, 0), #5CD7FF, #9FBFE3, #90F4F3, #12CCD8) 1 1;
            opacity: 0.8;
            a{
                color: #FFFFFF;
                font-size: 16px;
                font-weight: 400;
                width: 169px;
                height: 37px;
                display: block;
            }
        }
    }
    .userInfo{
        position: absolute;
        display: flex;
        top: 23px;
        right:0px;
        width: 263px;
        height: 31px;
        justify-content: space-between;
        align-content: center;
        span{
            color: #FFFFFF;
            font-size: 18px;
            font-weight: 400;
            line-height: 31px;
        }
        .avatar{
            display: inline-block;
            width: 32px;
            height: 31px;
            background: url(@/assets/images/home/用户.png)no-repeat;
        }
    }

    .underLine{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 21px;
        background: url(@/assets/images/home/形状\ 1\ 拷贝\ 2.png);
        background-size: contain;
    }
    

    
}
</style>