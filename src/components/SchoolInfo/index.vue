<template>
  <div class="container">
    <div class="title">
        <i></i>学校概况
    </div>
    <img src="@/assets/images/home/school.png" alt="">
    <ul>
        <li>占地面积：<span>1500</span>亩</li>
        <li>年度用电：<span>2389.34</span>KW·h</li>
        <li>用电同比：<span>153.7%</span>↓</li>
        <li>师生人数：<span>50274</span>人</li>
        <li>管网长度：<span>2910</span>KM</li>
        <li>物联设备：<span>4000</span>台</li>
        <li>管井数量：<span>830</span>台</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .container{
        position: relative;
        width: 400px;
        height: 270px;
        background: url(@/assets/images/home/矩形\ 2.png);
        background-size: 100%;
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
        }
        img{
            position: absolute;
            top: 53px;
            left: 26px;
            border: 1px solid #28F2FF;
        }
        ul{
            position: absolute;
            top: 44px;
            left: 204px;
            font-size: 14px;
            color: #E9F2F3;
            font-weight: 400;
            line-height: 28px;
            span{
                font-size: 18px;
                color: #28F2FF;
                margin-right:7px ;
            }
        }
    }
</style>