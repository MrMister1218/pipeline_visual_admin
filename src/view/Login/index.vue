<template>
  <div class="page">
    <!-- 插件下载按钮 -->
      <a href="http://" target="_blank" rel="noopener noreferrer" class="plugin">点击下载插件</a>
    <!-- 左图 -->
    <div class="chips">
    </div>
  <!-- 登录表单 -->
    <div class="login-container">
      <div class="website_name">
        <span>地下管网</span><span>三维可视化</span><span>信息管理平台</span>
      </div>
      <div class="school">
        <span class="arrow1"></span>
        <p>南京中医药大学 </p>
        <span class="arrow2"></span>
      </div>
      <div class="login_bg">
          <div class="title-container">
            <h3 class="title">用户登录</h3>
          </div>
          <form action="" method="post">
            <div class="username_container" >
              <input type="text" placeholder="用户名"><i></i>
            </div>
            <div class="pwd_container">
              <input type="password" placeholder="密码"><i></i>
            </div>
            <div class="aboutPwd">
              <span><input type="checkbox" id="keepPwd"><label for="keepPwd">记住密码</label></span>
              <a href="">忘记密码？</a>
            </div>
            <button @click="onLogin($event)">登录</button>
            <div class="tip">
              <p>注意：使用IE浏览器查看</p>
            </div>
          </form>
      </div>  
    </div>
  </div>
</template>
<script>
export default {
  name:'Login',
  methods:{
    onLogin(){
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less" scoped>
.page{
  position: relative;
  background: url(../../assets/images/login/背景.png);
  background-size: 100% auto;
  .chips{
    position: absolute;
    
    left: 200px;
    top: 268px;
    background: url(../../assets/images/login/左图.png) no-repeat;
    background-size: contain;
    width: 39.2%;
    height: 58%;
    z-index: 1;
  }
}
 .plugin{
  position: absolute;
  top: 46px;
  right: 80px;
  display: block;
  width: 130px;
  height: 50px;
  width: 130px;
  height: 50px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #58E2F5;
  line-height: 50px;
  text-align: center;
  background: url(../../assets/images/login/矢量智能对象.png);
  background-size: contain;
}
.login-container{
  position: absolute;
  top: 247px;
  right: 190px;
  width: 667px;
  height: 620px;
  z-index: 2;
  .website_name{
    width: 667px;
    height: 42px;
    font-size: 43px;
    font-weight: 400;
    color: #CFDDE7;
    line-height: 70px;
    text-align: center;
    :nth-child(1),:nth-child(3){
      color: #CFDDE7;
    }
    :nth-child(2){
      color: #58E2F5;
    }
  }
  .school{
    margin: 24px auto 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .arrow1{
      display: block;
      width: 217px;
      height: 22px;
      // background-color:red;
      background: url(../../assets/images/login/组\ 1.png);
      background-size: contain;
      }
    p {
      display: block;
      height: 26px;
      font-size: 26px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #92BEF0;
      line-height: 26px;
    }
    .arrow2{
      display: block;
      width: 217px;
      height: 22px;
      // background-color:red;
      background: url(../../assets/images/login/组\ 1.png);
      background-size: contain;
      -moz-transform:scaleX(-1);
      -webkit-transform:scaleX(-1);
      -o-transform:scaleX(-1);
      transform:scaleX(-1);
      /*IE*/
      filter:FlipH;
    }
  }
  .login_bg{
    position: absolute;
    margin-top: 21px;
    left: 50%;
    transform: translateX(-50%);
    width: 605px;
    height: 509px;
    background: url(../../assets/images/login/登录框.png) no-repeat;
    background-size: contain;
  }
    .title-container{
      position: absolute;
      top: 94px;
      left: 239px;
      height: 27px;
      font-size: 27px;
      font-weight: bold;
      color: #CFDDE7;
      line-height: 64px;
    }
    form{
      overflow: hidden;
      position: absolute;
      top: 146px;
      left: 137px;
      width: 315px;
      height: 267px;
      .username_container,.pwd_container{
        position: relative;
      }
      .username_container input,.pwd_container input{
        width: 100%;
        height: 47.2px;
        border: none;
        margin-bottom: 14px;
        background-color: #00376C ;
        font-size: 18px;
        font-weight: 600;
        color: #B4C6D2;
        padding-left:60px;
      }
      .username_container i,.pwd_container i{
        display: block;
        position: absolute;
        top: 16px;
        left:22px;
        width: 16px;
        height: 18px;
      }
      .username_container i{
        background: url(../../assets/images/login/用户.png);
        background-size: contain;
      }
      .pwd_container i{
        background: url(../../assets/images/login/密码.png);
        background-size: contain;
      }
      .aboutPwd{
        display: flex;
        // background-color:yellow ;
        justify-content: space-between;
        font-size: 12px;
        color: #C3D4E0;
        a{
        color: #C3D4E0;
        }
      }
      button{
        display: block;
        margin-top: 38px;
        width: 100%;
        height: 47.3px;
        color: #154C82;
        font-size: 16px;
        font-weight: 700;
        background-color: #58E2F5 ;
        border-radius: 7px;
      }
      .tip p{
        position: absolute;
        color: #58E2F5;
        font-size: 14px;
      }
    }
}
  @media screen and (max-width:1080px) {
    .page{
      display: flex;    
      justify-content: center;
    }
    .login-container{
    position: static;
    margin-top: 22.8704vw;
  }
       .plugin{
      top: 4.2593vw;
      right: 7.4074vw;
    }
  }
  @media screen and (max-width:668px){
    .login-container{
      top: 36.976vw;
      right: 28.4431vw;
      width: 99.8503vw;
      height: 92.8144vw;
      .website_name{
        width: 99.8503vw;
        height: 6.2874vw;
        font-size: 6.4371vw;
        line-height: 10.479vw;
      }
      .school{
        margin: 3.5928vw auto 0;
        .arrow1{
          width: 32.485vw;
          height: 3.2934vw;
          }
        p {
          height: 3.8922vw;
          font-size: 3.8922vw;
          line-height: 3.8922vw;
        }
        .arrow2{
          width: 32.485vw;
          height: 3.2934vw;
        }
      }
      .login_bg{
        margin-top: 3.1437vw;
        width: 90.5689vw;
        height: 76.1976vw;
      }
        .title-container{
          top: 14.0719vw;
          left: 35.7784vw;
          height: 4.0419vw;
          font-size: 4.0419vw;
          line-height: 9.5808vw;
        }
        form{
          top: 21.8563vw;
          left: 20.509vw;
          width: 47.1557vw;
          height: 39.9701vw;
          .username_container input,.pwd_container input{
            height: 7.0659vw;
            margin-bottom: 2.0958vw;
            font-size: 2.6946vw;
            padding-left:8.982vw;
          }
          .username_container i,.pwd_container i{
            top: 2.3952vw;
            left:3.2934vw;
            width: 2.3952vw;
            height: 2.6946vw;
          }
          .aboutPwd{
            font-size: 1.7964vw;
          }
          button{
            margin-top: 5.6886vw;
            height: 7.0808vw;
            font-size: 2.3952vw;
            border-radius: 1.0479vw;
          }
          .tip p{
            font-size: 2.0958vw;
          }
        }
    }
  }

</style>