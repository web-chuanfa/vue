<template>
  <div id="app" @click="resetComponent">
    <div class="app-head">
        <div class="app-head-inner">
          <router-link :to="{path: '/'}">
             <img src="../assets/images/logo.png" alt="">
          </router-link>
            <div class="head-nav">
                <ul class="head-list">
                    <li>{{ username }}</li>
                    <li class="nav-pile" v-if="username !== ''">|</li>
                    <li v-if="username !== ''" @click="quitClick">退出</li>
                    <li v-if="username === ''" @click="logClick">登录</li>
                    <li class="nav-pile">|</li>
                    <li @click="regClick" v-if="username === ''">注册</li>
                    <li class="nav-pile" v-if="username === ''">|</li>
                    <li @click="aboutClick">关于</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="app-content">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
    <div class="footer">
      <div class="footer__container">
        <div class="footer__main__info">
          <div class="footer__infoTop">
            <ul class="footer__nav">
              <li><a href="/about" data-td-click="PC010032" data-td-label="美易理财-关于我们">关于我们</a></li>
              <li><a href="/private" data-td-click="PC010033" data-td-label="美易理财-隐私条款">隐私条款</a></li>
              <li><a href="/legal" target="_blank" data-td-click="PC010034" data-td-label="美易理财-法律保障">法律保障</a></li>
              <li><a href="/guide" data-td-click="PC010035" data-td-label="美易理财-新手指引">新手指引</a></li>
              <li><a href="/safety" data-td-click="PC010036" data-td-label="美易理财-安全保障">安全保障</a></li>
              <li><a href="/help" data-td-click="PC010037" data-td-label="美易理财-帮助中心">帮助中心</a></li>
              <li style="border-right: none"><a href="/joinus" data-td-click="PC010038" data-td-label="美易理财-加入我们">加入我们</a></li>
              <div class="clearfix">
              </div>
            </ul>
          </div>
          <div class="footer__main__contact">
            <div class="telNum">
              4008&nbsp;133&nbsp;233
            </div>
            <div class="telTime">
              9:00-18:00
            </div>
          </div>
          <div style="margin: 20px 0;height: 16px">
            <p>
              Copyright © 2017 国美（天津）互联网信息科技有限公司
            </p>
            <p>
              <span></span>津ICP备15008983号-1
            </p>
            <p>
              <span></span>市场有风险，投资需谨慎
            </p>
          </div>
        </div>
        <div class="footer__main">
          <div class="footer__main__app">
            <div class="footer__app--ios">
              <img src="../assets/images/dApp.png" alt="美易理财app下载二维码" style="width: 105px;height: 105px;padding: 5px;border: 1px solid #e6e6e6"><span class="bottomCon">下载手机APP</span>
            </div>
            <div class="footer__app--android" style="margin-left:0">
              <img src="../assets/images/gzh.png" alt="美易理财微信公众号" style="width: 105px;height: 105px;padding: 5px;border: 1px solid #e6e6e6"><span class="bottomCon">关注美易理财</span>
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix">
      </div>
    </div>
    <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
         <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
    </my-dialog>
    <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
        <RegForm></RegForm>
    </my-dialog>
    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
        <LogForm @has-login="onSuccessLog"></LogForm>
    </my-dialog>
  </div>
</template>

<script>
import { eventBus } from '../eventBus'
import Dialog from './base/dialog'
import LogForm from './logForm'
import RegForm from './regForm'
export default {
  components: {
    MyDialog: Dialog,
    LogForm,
    RegForm
  },
  data () {
    return {
        isShowAboutDialog: false,
        isShowRegDialog: false,
        isShowLogDialog: false,
        username:''
    }
  },
  methods: {
      aboutClick() {
          this.isShowAboutDialog = true
      },
      regClick (){
          this.isShowRegDialog = true
      },
      logClick () {
          this.isShowLogDialog = true
      },
      closeDialog (attr){
          this[attr] = false
      },
      onSuccessLog (data){
          this.closeDialog ('isShowLogDialog')
          this.username = data.username
      },
      quitClick (){
          this.username = ''
      },
      resetComponent (){
        eventBus.$emit('rest-component')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
   /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  body {
    background: #f0f2f5;
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    font-size: 14px;
    color: #444;
  }
  .app-head {
    background: #fff;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
  }
  .app-head-inner {
    width: 1200px;
    margin: 0 auto;
  }
  .head-logo {
    float: left;
  }
  .app-head-inner img {
    width: 194px;
    margin-top: 26px;
  }
  .head-nav {
    float: right;
  }
  .head-nav ul {
    overflow: hidden;
  }
  .head-nav li {
    cursor: pointer;
    float: left;
  }
  .nav-pile {
    padding: 0 10px;
  }
  .app-foot {
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top: 30px;
  }
  .container {
    width: 1200px;
    margin: 0 auto;
  }
  .hr {
    height: 1px;
    width: 100%;
    background: #ddd;
  }
  .button {
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }
  .button:hover {
    background: #4fc08d;
  }
  .g-form {

  }
  .g-form-line {
    padding: 15px 0;
  }
  .g-form-label {
    width: 100px;
    font-size: 16px;
    display: inline-block;
  }
  .g-form-input {
    display: inline-block;
  }
  .g-form-input input {
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
  }
  .g-form-btn {
    padding-left: 100px;
  }
  .g-form-error {
    color: red;
    padding-left: 15px;
  }
      body {
    background:#fff;
    font-family:'Microsoft YaHei','Lucida Sans Unicode','Myriad Pro',PingFang,'Hiragino Sans GB','Heiti SC',Verdana,simsun
}
body {
    width:100%;
    display:inline-block;
    min-width:1200px;
    background:#f4f4f4
}
a {
    color:#666;
    text-decoration:none
}
a:active,a:hover {
    text-decoration:none
}
body,button,input,select,textarea {
    font-family:'Microsoft YaHei','Lucida Sans Unicode','Myriad Pro',PingFang,'Heiti SC',Verdana,simsun;
    outline:0!important
}
.footer {
    background:#fff;
    min-height: 184px;
}
.footer__container {
    width:1180px;
    margin:auto
}
.footer__main {
    zoom:1;
    padding-top:40px;
    padding-bottom:40px
}
.footer__main__contact {
    background:#fff url(../assets/images/telpart.png) no-repeat;
    width:251px;
    height:51px;
    margin:5px 0;
}
.telNum {
    font-size:26px;
    height:30px;
    line-height:36px;
    color:#666;
    text-indent:.5px;
    width:230px;
    font-weight:500;
    margin-left:58px
}
.telTime {
    font-size:10px;
    height:15px;
    line-height:24px;
    color:#666;
    text-align:left;
    width:230px;
    text-indent:.5px;
    margin-left:58px
}
.footer__main__app {
    float:left;
    width:390px;
    margin-top:-2px
}
.footer__app--android,.footer__app--ios {
    float:right;
    color:#333;
    font-size:12px;
    text-align:center;
    margin-left:30px;
    position:relative
}
.footer__main__info {
    color:#2c2a2b;
    font-size:12px;
    margin-top:10px;
    width:790px;
    float:left
}
.footer__main__info p {
    color:#777;
    font-size:12px;
    float:left;
    padding-right:10px;
    position:relative;
    padding-left:10px
}
.footer__main__info p:first-child {
    padding-left:0
}
.footer__main__info p>span {
    position:absolute;
    top:0;
    left:0;
    border-left:1px solid #e6e6e6;
    height:12px;
    width:0
}
.footer__nav {
    list-style:none;
    margin-left:-10px
}
.footer__nav li {
    padding:0 10px;
    float:left;
    height:15px;
    line-height:15px;
    border-right:1px solid #e6e6e6
}
.footer__nav li a {
    font-size:15px;
    color:#777
}
.footer__nav li a:hover {
    color:#333
}
.tabitem {
    color:#333;
    font-weight:400
}
.tabitem-active {
    color:#2188ca
}
.tabitem:hover {
    color:#2188ca
}
.tabitem:active {
    color:#2188ca
}
.messageNum {
    display:block;
    position:absolute;
    right:6px;
    top:0;
    /* background:url(../assets/images/ty.png) no-repeat center; */
    width:7px;
    height:7px
}
.bottomCon {
    position:absolute;
    bottom:0;
    display:block;
    width:117px;
    left:0;
    height:30px;
    line-height:25px;
    bottom:-30px;
    color:#999
}
.footer__infoTop {
    height:32px;
    width:790px;
    padding:10px 0;
    padding-top: 20px;
}
.gomefinance,.gomefinance>a {
    position:relative;
    float:left;
    height:30px;
    line-height:30px;
    list-style:none;
    font-weight:300;
    font-size:12px;
    color:#5e5e5e
}
.gomefinance {
    padding-left:17px
}
.gomefinance>i {
    position:absolute;
    left:0;
    top:8px;
    height:13px;
    width:14px;
    /* background:url(../assets/images/icon1home.png) */
}
.risk-tip {
    width:150px;
    font-weight:400;
    font-size:12px;
    line-height:28px;
    float:left;
    margin-left:10px;
    color:#bbb
}
.qr-icon>i.header-left-icon-mobile {
    position:absolute;
    left:8px;
    top:-1px;
    height:17px;
    width:12px;
    /* background-image:url(../assets/images/icon3mobile.png) */
}
.down-qrcode:after {
    content:'';
    border:5px solid red;
    border-color:#f8f8f8 transparent transparent;
    position:absolute;
    left:77px;
    top:5px
}
.down-qrcode:before {
    content:'';
    border:5px solid #000;
    border-color:#000 transparent transparent;
    position:absolute;
    left:77px;
    top:5px
}
.lianxikefu:after {
    content:'';
    border:5px solid red;
    border-color:#f8f8f8 transparent transparent;
    position:absolute;
    left:64px;
    top:5px
}
.lianxikefu:before {
    content:'';
    border:5px solid #000;
    border-color:#000 transparent transparent;
    position:absolute;
    left:64px;
    top:5px
}
</style>
