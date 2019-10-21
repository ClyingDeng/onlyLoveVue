<template>
  <div class="container personalInfo">
    <div class="view-account">
      <section class="module">
        <div class="module-inner">
          <div class="side-bar">
            <div class="user-info">
              <img
                v-if="userInfos.headPic == ''"
                class="img-rounded img-responsive"
                src="http://pzc93h51i.bkt.clouddn.com/avatar1.png"
                alt
              />
              <img
                v-else-if="userInfos.headPic == 'fang1.jpg'"
                class="img-rounded img-responsive"
                :src="'http://pzc93h51i.bkt.clouddn.com/' + 'fang1.jpg'"
                alt
              />
              <img
                v-else-if="userInfos.headPic == 'fang2.jpg'"
                class="img-rounded img-responsive"
                :src="'http://pzc93h51i.bkt.clouddn.com/' + 'fang2.jpg'"
                alt
              />
              <img
                v-else-if="userInfos.headPic == 'fang3.jpg'"
                class="img-rounded img-responsive"
                :src="'http://pzc93h51i.bkt.clouddn.com/' + 'fang3.jpg'"
                alt
              />
              <img
                v-else-if="userInfos.headPic == 'fang4.jpg'"
                class="img-rounded img-responsive"
                :src="'http://pzc93h51i.bkt.clouddn.com/' + 'fang4.jpg'"
                alt
              />
              <img
                v-else-if="userInfos.headPic == 'fang5.jpg'"
                class="img-rounded img-responsive"
                :src="'http://pzc93h51i.bkt.clouddn.com/' + 'fang5.jpg'"
                alt
              />
              <img
                v-else
                class="img-rounded img-responsive"
                :src="'http://localhost:3000/upload/' + userInfos.headPic"
                alt
              />
              <ul class="meta list list-unstyled">
                <li class="name">
                  {{userInfos.nickName}}
                  <br />
                  <label class="label label-info" style="margin-top:10px;">普通用户</label>
                </li>
                <li class="email">
                  账号：
                  <a href="#">{{userInfos.base_info_Id}}</a>
                </li>
                <li class="activity">
                  上次登录时间:
                  <br />今天下午 2:18
                </li>
              </ul>
            </div>
            <nav class="side-menu">
              <ul class="nav">
                <li :class="className1" @click="changcss('1')">
                  <router-link to="seeinfo">
                    <span class="fa fa-user"></span>个人信息
                  </router-link>
                  <!-- <a href="/personal/seeInfo" >
                    <span class="fa fa-user" ></span>个人信息
                  </a>-->
                </li>
                <li :class="className2" @click="changcss('2')">
                  <!-- <a href="/personal/setting"> -->
                  <router-link to="setting">
                    <span class="fa fa-cog"></span>设置
                  </router-link>

                  <!-- </a> -->
                </li>
                <li :class="className3" @click="changcss('3')">
                  <router-link to="identification">
                    <span class="fa fa-credit-card"></span> 实名认证
                  </router-link>
                  <!-- <a href="/personal/identification">
                    <span class="fa fa-credit-card" ></span> 实名认证
                  </a>-->
                </li>
                <li :class="className4" @click="changcss('4')">
                  <router-link to="charge">
                    <span class="fa fa-credit-card"></span>  充值积分
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="content-panel">
            <router-view />
            <!-- <component v-bind:is="currentTabCompent" :scon="conditions" :suserInfos="userInfos" v-on:userInfo_commit='getNewInfo' ></component> -->
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import setting from "../components/Setting.vue";
// import identification from "../components/Identification.vue";
// import seeInfo from "../components/SeeInfo.vue";

import jwt_decode from "jwt-decode";
export default {
  // name: "login",
  data: function() {
    return {
      currentTabCompent: "seeInfo",
      className1: "active",
      className2: "",
      className3: "",
      className4: "",
      // conditions:'',
      userInfos: ""
      // hackReset:true,
    };
  },
  watch: {
    $route() {
      console.log("路由");
      console.log(this.$route.path);
      // if(this.$route.path){

      // }
    }
  },
  created() {
    // console.log('刷新了没')
    //   console.log(document.referrer)
    //   let router1 = 'http://localhost:8080/personal/seeinfo'
    //   // let router2 = 'http://localhost:8080/index'
    //   let router3 = 'http://localhost:8080/personal/seeinfo'

    //   if(document.referrer == router1 || document.referrer == router3){
    //     this.$router.push({path:'/'})
    //   }
    this.$axios
      .get("http://localhost:3000/users/userStatus")
      .then(res => {
        console.log("查询结果：");
        console.log(res.data.data[0].use_status);
        //拿到后台数据赋值给前端
        if (res.data.data[0].use_status == 1) {
          this.$store.state.conditions = true;
        } else {
          this.$store.state.conditions = false;
        }
      })
      .catch(err => {
        console.log("错误信息：" + err);
      });
    this.$axios
      .get("http://localhost:3000/users/userInfo")
      .then(res => {
        // console.log('查询结果：' )
        console.log(res.data.data[0]);
        //拿到后台数据赋值给前端
        // this.userInfos = res.data.data[0];
        console.log('store')
        console.log(this.$store.state.user.length)
        if(!this.$store.state.user.length){
          this.$store.state.user = res.data.data[0];
          console.log("写到store里面");
          console.log(this.$store.state.user);
          this.userInfos = this.$store.state.user

        }
        //写到本地存储
        localStorage.setItem('myInfo',JSON.stringify(res.data.data[0]))
      })
      .catch(err => {
        console.log("错误信息：" + err);
      });
  },
  // components: {
  //   // baseInfo: baseInfo,
  //   identification: identification,
  //   setting: setting,
  //   seeInfo:seeInfo
  // },
  methods: {
    getNewInfo(e) {
      console.log(e);
      this.userInfos = e;
    },
    changcss(change) {
      if (change == "1") {
        this.className1 = "active";
        this.className2 = "";
        this.className3 = "";
        this.className4 = "";
      } else if (change == "2") {
        this.className1 = "";
        this.className2 = "active";
        this.className3 = "";
        this.className4 = "";
      } else if (change == "3"){
        this.className1 = "";
        this.className2 = "";
        this.className3 = "active";
        this.className4 = "";
      }else{
        this.className1 = "";
        this.className2 = "";
        this.className3 = "";
        this.className4 = "active";
      }
    },
    //  compentChild(currentCompent){
    //    this.currentTabCompent = currentCompent
    //   //  console.log(currentCompent)
    //      if(currentCompent == 'baseInfo'){
    //  this.className1='active'
    //  this.className2=''
    //  this.className3=''
    //      }else if(currentCompent == 'setting'){
    //        this.className1=''
    //        this.className2='active'
    //        this.className3=''
    //      }else if(currentCompent == 'identification'){
    //        this.className1=''
    //        this.className2=''
    //        this.className3='active'
    //      }
    //  },
    submitForm(formName) {
      //通过ref定位到form表单
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          this.$axios
            .post("http://localhost:3000/users/login", this.loginUser)
            .then(res => {
              console.log("登录成功！", res);
              console.log(res.data.token);
              console.log("token对象：", jwt_decode(res.data.token));
              localStorage.setItem("mytoken", res.data.token); //1.把token保存到本地存储
              this.$router.push("/index/home"); //路由转向登录组件
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      //实现重置表单元素数据
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="css" scoped>
.user-info img {
  /* width: 140px;
  height: 140px; */
  width: 100%;
  height: 100%;
}
.personalInfo {
  margin-top: 100px;
}
/* .avatar {
  width: 100%;
  height: 100%;
} */
/* .form-inline {
  margin-top: 20px;
} */
/* .control-sex {
  padding-top: 7px;
  margin-bottom: 0;
} */
.el-upload input {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.view-account {
  background: #ffffff;
  margin-top: 20px;
}
/* .view-account .pro-label {
  font-size: 13px;
  padding: 4px 5px;
  position: relative;
  top: -5px;
  margin-left: 10px;
  display: inline-block;
} */

.view-account .side-bar {
  padding-bottom: 30px;
}

.view-account .side-bar .user-info {
  text-align: center;
  margin-bottom: 15px;
  padding: 30px;
  color: #616670;
  border-bottom: 1px solid #f3f3f3;
}

.view-account .side-bar .user-info .img-profile {
  width: 120px;
  height: 120px;
  margin-bottom: 15px;
}

.view-account .side-bar .user-info .meta li {
  margin-bottom: 10px;
}

.view-account .side-bar .user-info .meta li span {
  display: inline-block;
  width: 100px;
  margin-right: 5px;
  text-align: right;
}

.view-account .side-bar .user-info .meta li a {
  color: #616670;
}

.view-account .side-bar .user-info .meta li.activity {
  color: #a2a6af;
}

.view-account .side-bar .side-menu {
  text-align: center;
}

.view-account .side-bar .side-menu .nav {
  display: inline-block;
  margin: 0 auto;
}

.view-account .side-bar .side-menu .nav > li {
  font-size: 14px;
  margin-bottom: 0;
  border-bottom: none;
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 15px;
}

.view-account .side-bar .side-menu .nav > li:last-child {
  margin-right: 0;
}

.view-account .side-bar .side-menu .nav > li > a {
  display: inline-block;
  color: #9499a3;
  padding: 5px;
  border-bottom: 2px solid transparent;
}

.view-account .side-bar .side-menu .nav > li > a:hover {
  color: #616670;
  background: none;
}

.view-account .side-bar .side-menu .nav > li.active a {
  color: #40babd;
  border-bottom: 2px solid #40babd;
  background: none;
  border-right: none;
}

.theme-2 .view-account .side-bar .side-menu .nav > li.active a {
  color: #6dbd63;
  border-bottom-color: #6dbd63;
}

.theme-3 .view-account .side-bar .side-menu .nav > li.active a {
  color: #497cb1;
  border-bottom-color: #497cb1;
}

.theme-4 .view-account .side-bar .side-menu .nav > li.active a {
  color: #ec6952;
  border-bottom-color: #ec6952;
}

.view-account .side-bar .side-menu .nav > li .icon {
  display: block;
  font-size: 24px;
  margin-bottom: 5px;
}

.view-account .content-panel {
  padding: 30px;
}

.view-account .content-panel .title {
  margin-bottom: 15px;
  margin-top: 0;
  font-size: 18px;
}

/* .view-account .content-panel .fieldset-title {
  padding-bottom: 15px;
  border-bottom: 1px solid #eaeaf1;
  margin-bottom: 30px;
  color: #616670;
  font-size: 16px;
} */

/* .view-account .content-panel .avatar .figure img {
  float: right;
  width: 64px;
}
 */
.view-account .content-panel .content-header-wrapper {
  position: relative;
  margin-bottom: 30px;
}

.view-account .content-panel .content-header-wrapper .actions {
  position: absolute;
  right: 0;
  top: 0;
}

.view-account .content-panel .content-utilities {
  position: relative;
  margin-bottom: 30px;
}

.view-account .content-panel .content-utilities .btn-group {
  margin-right: 5px;
  margin-bottom: 15px;
}

.view-account .content-panel .content-utilities .fa {
  font-size: 16px;
  margin-right: 0;
}

.view-account .content-panel .content-utilities .page-nav {
  position: absolute;
  right: 0;
  top: 0;
}

.view-account .content-panel .content-utilities .page-nav .btn-group {
  margin-bottom: 0;
}

.view-account .content-panel .content-utilities .page-nav .indicator {
  color: #a2a6af;
  margin-right: 5px;
  display: inline-block;
}

.view-account .content-panel .mails-wrapper .mail-item {
  position: relative;
  padding: 10px;
  border-bottom: 1px solid #f3f3f3;
  color: #616670;
  overflow: hidden;
}

.view-account .content-panel .mails-wrapper .mail-item > div {
  float: left;
}

.view-account .content-panel .mails-wrapper .mail-item .icheck {
  background-color: #fff;
}

.view-account .content-panel .mails-wrapper .mail-item:hover {
  background: #f9f9fb;
}

.view-account .content-panel .mails-wrapper .mail-item:nth-child(even) {
  background: #fcfcfd;
}

.view-account .content-panel .mails-wrapper .mail-item:nth-child(even):hover {
  background: #f9f9fb;
}

.view-account .content-panel .mails-wrapper .mail-item a {
  color: #616670;
}

.view-account .content-panel .mails-wrapper .mail-item a:hover {
  color: #494d55;
  text-decoration: none;
}

.view-account .content-panel .mails-wrapper .mail-item .checkbox-container,
.view-account .content-panel .mails-wrapper .mail-item .star-container {
  display: inline-block;
  margin-right: 5px;
}

.view-account .content-panel .mails-wrapper .mail-item .star-container .fa {
  color: #a2a6af;
  font-size: 16px;
  vertical-align: middle;
}

.view-account
  .content-panel
  .mails-wrapper
  .mail-item
  .star-container
  .fa.fa-star {
  color: #f2b542;
}

.view-account
  .content-panel
  .mails-wrapper
  .mail-item
  .star-container
  .fa:hover {
  color: #868c97;
}

.view-account .content-panel .mails-wrapper .mail-item .mail-to {
  display: inline-block;
  margin-right: 5px;
  min-width: 120px;
}

.view-account .content-panel .mails-wrapper .mail-item .mail-subject {
  display: inline-block;
  margin-right: 5px;
}

.view-account .content-panel .mails-wrapper .mail-item .mail-subject .label {
  margin-right: 5px;
}

.view-account
  .content-panel
  .mails-wrapper
  .mail-item
  .mail-subject
  .label:last-child {
  margin-right: 10px;
}

.view-account .content-panel .mails-wrapper .mail-item .mail-subject .label a,
.view-account
  .content-panel
  .mails-wrapper
  .mail-item
  .mail-subject
  .label
  a:hover {
  color: #fff;
}

.view-account
  .content-panel
  .mails-wrapper
  .mail-item
  .mail-subject
  .label-color-1 {
  background: #f77b6b;
}

.view-account
  .content-panel
  .mails-wrapper
  .mail-item
  .mail-subject
  .label-color-2 {
  background: #58bbee;
}

.view-account
  .content-panel
  .mails-wrapper
  .mail-item
  .mail-subject
  .label-color-3 {
  background: #f8a13f;
}

.view-account
  .content-panel
  .mails-wrapper
  .mail-item
  .mail-subject
  .label-color-4 {
  background: #ea5395;
}

.view-account
  .content-panel
  .mails-wrapper
  .mail-item
  .mail-subject
  .label-color-5 {
  background: #8a40a7;
}

.view-account .content-panel .mails-wrapper .mail-item .time-container {
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 10px;
  color: #a2a6af;
  text-align: left;
}

.view-account
  .content-panel
  .mails-wrapper
  .mail-item
  .time-container
  .attachment-container {
  display: inline-block;
  color: #a2a6af;
  margin-right: 5px;
}

.view-account .content-panel .mails-wrapper .mail-item .time-container .time {
  display: inline-block;
  text-align: right;
}

.view-account
  .content-panel
  .mails-wrapper
  .mail-item
  .time-container
  .time.today {
  font-weight: 700;
  color: #494d55;
}

.drive-wrapper {
  padding: 15px;
  background: #f5f5f5;
  overflow: hidden;
}

.drive-wrapper .drive-item {
  width: 130px;
  margin-right: 15px;
  display: inline-block;
  /* float: left; */
}

.drive-wrapper .drive-item:hover {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.drive-wrapper .drive-item-inner {
  padding: 15px;
}

.drive-wrapper .drive-item-title {
  margin-bottom: 15px;
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.drive-wrapper .drive-item-title a {
  color: #494d55;
}

.drive-wrapper .drive-item-title a:hover {
  color: #40babd;
}

.theme-2 .drive-wrapper .drive-item-title a:hover {
  color: #6dbd63;
}

.theme-3 .drive-wrapper .drive-item-title a:hover {
  color: #497cb1;
}

.theme-4 .drive-wrapper .drive-item-title a:hover {
  color: #ec6952;
}

.drive-wrapper .drive-item-thumb {
  width: 100px;
  height: 80px;
  margin: 0 auto;
  color: #616670;
}

.drive-wrapper .drive-item-thumb a {
  -webkit-opacity: 0.8;
  -moz-opacity: 0.8;
  opacity: 0.8;
}

.drive-wrapper .drive-item-thumb a:hover {
  -webkit-opacity: 1;
  -moz-opacity: 1;
  opacity: 1;
}

.drive-wrapper .drive-item-thumb .fa {
  display: inline-block;
  font-size: 36px;
  margin: 0 auto;
  margin-top: 20px;
}

.drive-wrapper .drive-item-footer .utilities {
  margin-bottom: 0;
}

.drive-wrapper .drive-item-footer .utilities li:last-child {
  padding-right: 0;
}

.drive-list-view .name {
  width: 60%;
}

.drive-list-view .name.truncate {
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.drive-list-view .type {
  width: 15px;
}

.drive-list-view .date,
.drive-list-view .size {
  max-width: 60px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.drive-list-view a {
  color: #494d55;
}

.drive-list-view a:hover {
  color: #40babd;
}

.theme-2 .drive-list-view a:hover {
  color: #6dbd63;
}

.theme-3 .drive-list-view a:hover {
  color: #497cb1;
}

.theme-4 .drive-list-view a:hover {
  color: #ec6952;
}

.drive-list-view td.date,
.drive-list-view td.size {
  color: #a2a6af;
}

@media (max-width: 767px) {
  .view-account .content-panel .title {
    text-align: center;
  }
  .view-account .side-bar .user-info {
    padding: 0;
  }
  .view-account .side-bar .user-info .img-profile {
    width: 60px;
    height: 60px;
  }
  .view-account .side-bar .user-info .meta li {
    margin-bottom: 5px;
  }
  .view-account .content-panel .content-header-wrapper .actions {
    position: static;
    margin-bottom: 30px;
  }
  .view-account .content-panel {
    padding: 0;
  }
  .view-account .content-panel .content-utilities .page-nav {
    position: static;
    margin-bottom: 15px;
  }
  .drive-wrapper .drive-item {
    width: 100px;
    margin-right: 5px;
    float: none;
  }
  .drive-wrapper .drive-item-thumb {
    width: auto;
    height: 54px;
  }
  .drive-wrapper .drive-item-thumb .fa {
    font-size: 24px;
    padding-top: 0;
  }
  /* .view-account .content-panel .avatar .figure img {
    float: none;
    margin-bottom: 15px;
  } */
  .view-account .file-uploader {
    margin-bottom: 15px;
  }
  .view-account .mail-subject {
    max-width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .view-account .content-panel .mails-wrapper .mail-item .time-container {
    position: static;
  }
  .view-account .content-panel .mails-wrapper .mail-item .time-container .time {
    width: auto;
    text-align: left;
  }
}

@media (min-width: 768px) {
  .view-account .side-bar .user-info {
    padding: 0;
    padding-bottom: 15px;
  }
  .view-account .mail-subject .subject {
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

@media (min-width: 992px) {
  .view-account .content-panel {
    min-height: 800px;
    border-left: 1px solid #f3f3f7;
    margin-left: 200px;
  }
  .view-account .mail-subject .subject {
    max-width: 280px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .view-account .side-bar {
    position: absolute;
    width: 200px;
    min-height: 600px;
  }
  .view-account .side-bar .user-info {
    margin-bottom: 0;
    border-bottom: none;
    padding: 30px;
  }
  .view-account .side-bar .user-info .img-profile {
    width: 120px;
    height: 120px;
  }
  .view-account .side-bar .side-menu {
    text-align: left;
  }
  .view-account .side-bar .side-menu .nav {
    display: block;
  }
  .view-account .side-bar .side-menu .nav > li {
    display: block;
    float: none;
    font-size: 14px;
    border-bottom: 1px solid #f3f3f7;
    margin-right: 0;
    margin-bottom: 0;
  }
  .view-account .side-bar .side-menu .nav > li > a {
    display: block;
    color: #9499a3;
    padding: 10px 15px;
    padding-left: 30px;
  }
  .view-account .side-bar .side-menu .nav > li > a:hover {
    background: #f9f9fb;
  }
  .view-account .side-bar .side-menu .nav > li.active a {
    background: #f9f9fb;
    border-right: 4px solid #40babd;
    border-bottom: none;
  }
  .theme-2 .view-account .side-bar .side-menu .nav > li.active a {
    border-right-color: #6dbd63;
  }
  .theme-3 .view-account .side-bar .side-menu .nav > li.active a {
    border-right-color: #497cb1;
  }
  .theme-4 .view-account .side-bar .side-menu .nav > li.active a {
    border-right-color: #ec6952;
  }
  .view-account .side-bar .side-menu .nav > li .icon {
    font-size: 24px;
    vertical-align: middle;
    text-align: center;
    width: 40px;
    display: inline-block;
  }
}
</style>