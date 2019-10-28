<template>
  <div class="container condition" style="margin-top: 110px">
    <div class="row">
      <div class="col-md-12">
        <div class="youyisi">
          <div class="touxiang">
            <img
              v-if="userinfo.headPic == ''"
              class="img-thumbnail"
              src="http://pzc93h51i.bkt.clouddn.com/avatar1.png"
              alt
            />
            <img
              v-else-if="userinfo.headPic == 'fang1.jpg'"
              class="img-thumbnail"
              :src="'http://pzc93h51i.bkt.clouddn.com/' + 'fang1.jpg'"
              alt
            />
            <img
              v-else-if="userinfo.headPic == 'fang2.jpg'"
              class="img-thumbnail"
              :src="'http://pzc93h51i.bkt.clouddn.com/' + 'fang2.jpg'"
              alt
            />
            <img
              v-else-if="userinfo.headPic == 'fang3.jpg'"
              class="img-thumbnail"
              :src="'http://pzc93h51i.bkt.clouddn.com/' + 'fang3.jpg'"
              alt
            />
            <img
              v-else-if="userinfo.headPic == 'fang4.jpg'"
              class="img-thumbnail"
              :src="'http://pzc93h51i.bkt.clouddn.com/' + 'fang4.jpg'"
              alt
            />
            <img
              v-else-if="userinfo.headPic == 'fang5.jpg'"
              class="img-thumbnail"
              :src="'http://pzc93h51i.bkt.clouddn.com/' + 'fang5.jpg'"
              alt
            />
            <img
              v-else
              :src="'http://localhost:3000/upload/' + userinfo.headPic"
              alt
              class="img-thumbnail"
            />
          </div>
          <div class="youyisi2" style="float: left;">
            <div>
              <h3 style="color:blueviolet">&nbsp;{{userinfo.nickName}}</h3>
            </div>
            <!-- 会员图标 -->
            <div style="float: left">
              <!-- <img src="../assets/imgs/8.png" width="50px" height="40px" /> -->
              <i class="fa fa-google-wallet fa-3x" aria-hidden="true " style="color:#EDB566;"></i>
            </div>
            <div class="hidden-xs">
              <div style="float: left;margin-left: 20px;">
                <span style="color:blueviolet" v-if="this.isLogin">
                  <p>会员等级 {{member.length && member[0].member_grade}}</p>
                  <p>会员剩余 {{member.length && member[0].member_date}} 天</p>
                </span>
                <span style="color:blueviolet" v-else>
                  <p>会员等级 0</p>
                  <p>无剩余天数</p>
                </span>
                <!-- 进度条展示 -->
                <div class="progress progress-striped" style="width: 250px;height: 8px;">
                  <div
                    class="progress-bar progress-bar-warning"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 20%;"
                  >
                    <span class="sr-only">20% 完成（警告）</span>
                  </div>
                </div>
              </div>
              <div class="hidden-sm" style="float: right;margin-top:3px">
                <!-- 提示工具 -->
                <button
                  type="button"
                  class="btn btn-warning"
                  data-toggle="tooltip"
                  title="续费年费"
                  @click="gomember"
                >续费会员</button>
              </div>
            </div>
          </div>
        </div>
        <!-- 访客 -->
        <div class="fangke" style="float:right;margin-top:60px;margin-right: 30px;">
          <span style="color:blueviolet">
            今日访客:1 被挡访客:2
            <br />总访客人数:903904;
          </span>
        </div>

        <div style="float: right;margin-top: 55px;margin-right: 10px">
          <img src="../assets/imgs/resou.png" width="50px" height="50px" />
        </div>

        <!-- 说说导航 -->
        <div class="shuoshuo" style="clear:both;display:flex;justify-content:center;">
          <div class="row">
            <ul class="nav nav-tabs" id="shuodao" style="color:rgba(255,255,255,1)">
              <li>
                <a href="#">主页</a>
              </li>
              <li>
                <a href="#">日志</a>
              </li>
              <li>
                <a href="#">相册</a>
              </li>
              <li>
                <a href="#">留言板</a>
              </li>
              <li>
                <a href="#">说说</a>
              </li>
              <li>
                <a href="#">个人档</a>
              </li>

              <li>
                <a href="#">更多</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- <div class="container2">
      <div class="row2">-->
      <!-- 左边竖着 -->
      <div
        class="zuobian"
        style="width: 180px; margin-left: 47px;margin-right:28px;font-size: 14px;float: left"
      >
        <div>
          <a href="./Index.vue" class="list-group-item">
            <span
              class="glyphicon glyphicon-user"
              style="text-shadow: rgb(216, 206, 206) 3px -1px;"
            ></span>
            <span style="padding-left:10px">好友动态</span>
            <span class="badge">50</span>
          </a>
          <a href="#" class="list-group-item">
            <span class="glyphicon glyphicon-heart-empty"></span>
            <span style="padding-left:10px">特别关心</span>
            <span class="badge">1</span>
          </a>
          <a href="#" class="list-group-item">
            <span>
              <i class="fa fa-at" aria-hidden="true" style="margin-left:2px"></i>
            </span>
            <span>与我相关</span>
            <span class="badge">2</span>
          </a>
          <a href="#" class="list-group-item">
            <span class="glyphicon glyphicon-play-circle"></span>
            <span style="padding-left:10px">分享动态</span>
          </a>
          <a href="#" class="list-group-item">
            <span class="glyphicon glyphicon-list-alt"></span>
            <span style="padding-left:10px">那年今日</span>
          </a>

          <a href="#" class="list-group-item">
            <span class="glyphicon glyphicon-th-large"></span>
            <span style="padding-left:10px">我的应用</span>
          </a>
        </div>

        <div style="margin-top: 20px">
          <a href="#" class="list-group-item">
            QQ农场
            <span class="badge">2</span>
          </a>
          <a href="#" class="list-group-item">情侣空间</a>
          <a href="#" class="list-group-item">
            花藤
            <span class="badge">2</span>
          </a>
          <a href="#" class="list-group-item">亲密度</a>
          <a href="#" class="list-group-item">送礼物</a>

          <a href="#" class="list-group-item">设置</a>
        </div>
      </div>
      <!-- 中间动态 -->
      <!-- 说点什么！！！ -->

      <div class="centerblock col-xs-12 col-xs-md-6 col-lg-6">
        <div
          class="shuoshenme col-xs-12"
          style="padding: 0px;margin-bottom:20px;background-color: rgb(243, 237, 237)"
        >
          <form role="form">
            <div class="form-group has-feedback">
              <textarea
                ref="area"
                class="form-control"
                v-model="form.name"
                rows="10"
                placeholder="说点什么吧"
              ></textarea>
              <div id="upload">
                <el-upload
                  class="upload-demo"
                  ref="upload"
                  list-type="picture-card"
                  action="http://localhost:3000/hotSearch/publish"
                  :limit="4"
                  :before-upload="beforeupload"
                  :auto-upload="false"
                  :multiple="true"
                  style="margin-top:10px"
                >
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-form ref="form" :model="form" label-width="80px" style="margin-top:10px">
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">发布动态</el-button>
                    <el-button>取消</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </form>
        </div>
        <!-- 全部动态 -->
        <!-- 第一个说说 -->
        <div
          class="col-xs-12"
          style="margin-bottom:20px;margin-top: 20px;clear:both;background-color: rgb(243, 237, 237)"
          v-for="(key,index) in conditions"
          :key="'info-1'+index"
        >
          <div style="float: left;padding: 20px">
            <img
              v-if="userinfo.headPic == ''"
              class="img-circle"
              width="50px"
              height="50px"
              src="http://pzc93h51i.bkt.clouddn.com/avatar1.png"
              alt
            />
            <img
              v-else-if="userinfo.headPic == 'fang1.jpg'"
              class="img-circle"
              width="50px"
              height="50px"
              :src="'http://pzc93h51i.bkt.clouddn.com/' + 'fang1.jpg'"
              alt
            />
            <img
              v-else-if="userinfo.headPic == 'fang2.jpg'"
              class="img-circle"
              width="50px"
              height="50px"
              :src="'http://pzc93h51i.bkt.clouddn.com/' + 'fang2.jpg'"
              alt
            />
            <img
              v-else-if="userinfo.headPic == 'fang3.jpg'"
              class="img-circle"
              width="50px"
              height="50px"
              :src="'http://pzc93h51i.bkt.clouddn.com/' + 'fang3.jpg'"
              alt
            />
            <img
              v-else-if="userinfo.headPic == 'fang4.jpg'"
              class="img-circle"
              width="50px"
              height="50px"
              :src="'http://pzc93h51i.bkt.clouddn.com/' + 'fang4.jpg'"
              alt
            />
            <img
              v-else-if="userinfo.headPic == 'fang5.jpg'"
              class="img-circle"
              width="50px"
              height="50px"
              :src="'http://pzc93h51i.bkt.clouddn.com/' + 'fang5.jpg'"
              alt
            />
            <img
              v-else
              :src="'http://localhost:3000/upload/' + userinfo.headPic"
              alt
              class="img-circle"
              width="50px"
              height="50px"
            />
            <img
              :src="'http://pzc93h51i.bkt.clouddn.com/'+ key.headPic"
              class="img-circle"
              width="50px"
              height="50px"
            />
          </div>
          <div style="float: left;padding-top: 18px">
            <a href="#" style="font-size: 18px;color: black">{{key.nickName}}</a>
            <p style="margin-top:3px;font-size: 12px;color: rgb(167, 166, 164)">20:17</p>
          </div>
          <!-- <div style="float: right;padding-top: 18px" :name="key.con_Id" @click.prevent="delect">{{key.con_Id}}X</div> -->
          <button
            style="float: right;margin-top: 10px;border: 1px solid transparent;outline: none;background-color: rgb(243, 237, 237);font-size:20px"
            :name="key.con_Id"
            @click.prevent="delect"
          >X</button>
          <div style="clear: both;margin-left: 80px">
            <p>{{key.con_words}}</p>
          </div>
          <div style="margin:30px;clear:both; ">
            <img
              class="shuotu"
              v-if="key.con_pic_1 == '' ? false : true"
              :src="'http://localhost:3000/hspicture/'+ key.con_pic_1"
            />
            <img
              class="shuotu"
              v-if="key.con_pic_2 == '' ? false : true"
              :src="'http://localhost:3000/hspicture/'+ key.con_pic_2"
            />
            <img
              class="shuotu"
              v-if="key.con_pic_3 == '' ? false : true"
              :src="'http://localhost:3000/hspicture/'+ key.con_pic_3"
            />
            <img
              class="shuotu"
              v-if="key.con_pic_4 == '' ? false : true"
              :src="'http://localhost:3000/hspicture/'+ key.con_pic_4"
            />
          </div>
          <ul style="padding:0;position:absolute;right:5px;bottom:5px;">
            <li style="float: left;width:50px;">
              <a href="#">
                <i class="fa fa-thumbs-o-up fa-1x" style="color:#ff6700" aria-hidden="true"></i>
                <em>{{key.approvenum}}</em>
              </a>
            </li>
            <li style="float: left;width:50px;margin-left:10px">
              <a href="#">
                <i class="fa fa-eye fa-1x" style="color:#ff6700" aria-hidden="true"></i>
                <em>{{key.see}}</em>
              </a>
            </li>
            <li style="float: left;width:50px;margin-left:10px">
              <a href="#">
                <i class="fa fa-commenting-o fa-1x" style="color:#ff6700" aria-hidden="true"></i>
                <em>0</em>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 右边 -->
      <!-- 签到 -->
      <div class="youbian" style="float: right;background-color: rgb(243, 237, 237);">
        <div class="qiandao">
          <div class="qianzuo">
            <a href style="text-decoration:none">
              <ul>
                <li>{{time}}</li>
                <li>签到</li>
              </ul>
            </a>
          </div>
          <div class="qianyou">
            <ul>
              <li>本月签到次数</li>
              <li>3次</li>
            </ul>
          </div>
        </div>
        <div class="kan">
          <!-- 谁看过我 -->
          <div class="kanwo" style="clear:both;width:300px;margin-top:2px">
            <h4 style="text-align:center;color:blueviolet">关注我的</h4>
            <div
              class="col-md-6"
              v-for="(key,index) in attentionme"
              :key="'info-2'+index"
              style="float:left"
            >
              <div class="work-box">
                <a
                  :href="'http://pzc93h51i.bkt.clouddn.com/'+ key.headPic"
                  data-lightbox="gallery-mf"
                >
                  <div class="work-img">
                    <img
                      :src="'http://pzc93h51i.bkt.clouddn.com/'+ key.headPic"
                      alt
                      class="img-fluid"
                    />
                  </div>
                  <div class="work-content">
                    <div class="row">
                      <div class="col-sm-12">
                        <h2 class="w-title">{{key.nickname}}</h2>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            class="wokan"
            style="background-color: rgb(243, 237, 237);clear:both;width:300px;margin-top: 20px"
          >
            <h4 style="text-align:center;color:blueviolet">我关注的</h4>
            <div class="col-md-6" v-for="(key,index) in meattention" :key="'info-3'+index">
              <div class="work-box">
                <a
                  :href="'http://pzc93h51i.bkt.clouddn.com/'+ key.headPic"
                  data-lightbox="gallery-mf"
                >
                  <div class="work-img">
                    <img
                      :src="'http://pzc93h51i.bkt.clouddn.com/'+ key.headPic"
                      alt
                      class="img-fluid"
                    />
                  </div>
                  <div class="work-content">
                    <div class="row">
                      <div class="col-sm-12">
                        <h2 class="w-title">{{key.nickname}}</h2>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scroped>
ul {
  list-style: none;
}
.el-upload__input {
  display: none !important;
}
.condition {
  width: 100%;
  /* height: 1000px; */
  margin-top: 75px;
}
.work-content {
  padding: 0;
}
.w-title {
  text-align: center;
  margin-top: 10px;
  font-size: 15px;
  color: blueviolet;
  transition: all 1s;
}
.w-title:hover {
  color: #3498db;
}
.work-img {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  width: 100%;
}
.work-img img {
  max-width: 100%;
  max-height: 100%;
  width: 120px;
  height: 80px;
  display: block;
  margin: auto;
}
.touxiang {
  width: 130px;
  float: left;
}
.youyisi button {
  margin-top: -78px;
  margin-left: 60px;
}
.shuotu {
  padding-bottom: 20px;
  height: 150px;
  width: 150px;
  display: block;
  margin: auto;
  margin-left: 10px;
  float: left;
}
.qiandao {
  background-color: rgb(243, 237, 237);
  height: 75px;
  width: 300px;
}
.qianzuo {
  width: 120px;
  height: 75px;
  float: left;
}
.qianzuo ul {
  width: 120px;
  height: 75px;
  list-style: none;
  padding-left: 0;
  float: left;
}
.qianzuo ul li:nth-child(1) {
  width: 40px;
  height: 35px;
  padding-top: 18px;
  margin-left: 34px;
  color: blueviolet;
}
.qianzuo ul li:nth-child(2) {
  width: 60px;
  height: 40px;
  font-size: 24px;
  color: blueviolet;
  margin-top: 7px;
  margin: 0 auto;
}
.qianyou {
  width: 175px;
  height: 75px;
  float: left;
}
.qianyou ul {
  width: 175px;
  height: 74px;
  list-style: none;
  padding: 0;
  margin: 0;
  float: left;
  /* margin-top: -74px; */
}
.qianyou ul li:nth-child(1) {
  width: 90px;
  height: 33px;
  padding-top: 18px;
  /* margin-left: 34px; */
  color: blueviolet;
  margin: 0 auto;
}
.qianyou ul li:nth-child(2) {
  width: 60px;
  height: 40px;
  font-size: 24px;
  color: blueviolet;
  /* margin-top: 7px; */
  margin-left: 60px;
}

@media screen and (max-width: 1200px) {
  .zuobian,
  .youbian {
    display: none;
  }
}
</style>

<script>
import jwt_decode from "jwt-decode";
export default {
  inject: ["reload"],
  name: "test",
  data() {
    return {
      isLogin: false,
      time: "",
      msg: "上传动态",
      user_Id: "",
      user: {},
      fileList: [],
      conditions: [],
      attentionme: [],
      meattention: [],
      userinfo: {},
      member: [],
      form: {
        name: "" //绑定表单元素的属性
      },
      param: "" // 表单最后提交的参数对象
    };
  },
  created() {
    if (jwt_decode(localStorage.getItem("mytoken"))) {
      // console.log("登录啊");
      this.userinfo = JSON.parse(localStorage.getItem("myInfo"));
      console.log(this.userinfo);
    } else {
      console.log("未登录");
    }

    this.$axios
      .get("http://localhost:3000/hotSearch/hotSearch")
      .then(res => {
        //拿到后台数据赋值给前端
        this.conditions = res.data.data;
        console.log(this.conditions[0].headPic);
      })
      .catch(err => {
        console.log("错误信息：" + err);
      });
    this.$axios
      .get("http://localhost:3000/users/attentionMe")
      .then(res => {
        //拿到后台数据赋值给前端
        this.attentionme = res.data.data;
        // console.log(this.attentionme);
      })
      .catch(err => {
        console.log("错误信息：" + err);
      });
    this.$axios
      .get("http://localhost:3000/users/iAttention")
      .then(res => {
        //拿到后台数据赋值给前端
        this.meattention = res.data.data;
        // console.log(this.meattention);
      })
      .catch(err => {
        console.log("错误信息：" + err);
      });
    this.$axios
      .get("http://localhost:3000/shop/memeber")
      .then(res => {
        //拿到后台数据赋值给前端
        // console.log(res);
        this.member = res.data.data;
        if (this.member != []) {
          this.isLogin = true;
        } else {
          console.log("bu");
        }
        // console.log(this.member);
      })
      .catch(err => {
        console.log("错误信息：" + err);
      });
  },
  methods: {
    gomember() {
      this.$router.push("/Member");
    },
    delect(e) {
      // console.log(e.target.name)
      let _this = this;
      let conId = e.target.name;
      console.log(conId);
      this.$axios
        .post("http://localhost:3000/hotSearch/deleteHotSearch", {
          conId: conId
        })
        .then(function(result) {
          console.log(result);
          _this.reload();
        });
    },
    onSubmit() {
      let nowDate = new Date();
      let date = {
        year: nowDate.getFullYear(),
        month: nowDate.getMonth() + 1,
        date: nowDate.getDate(),
        hours: nowDate.getHours(),
        minutes: nowDate.getMinutes(),
        seconds: nowDate.getSeconds()
      };
      console.log(date);
      let _this = this;
      var names = _this.form.name;
      _this.time =
        date.year +
        "-" +
        date.month +
        "-" +
        date.date +
        " " +
        date.hours +
        ":" +
        date.minutes +
        ":" +
        date.seconds;
      this.$refs.upload.submit();
      //将非表单元素的数据也添加到参数对象中；
      this.param.append("conwords", _this.form.name);
      //将表单元素的数据也添加到参数对象中；
      this.param.append("conTime", _this.time);
      //设置提交请求头，适用于上传文件
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      // //调用接口，执行上传所有数据的操作
      this.$axios
        .post("http://localhost:3000/hotSearch/publish", this.param, config)
        .then(function(result) {
          console.log(result);
          // _this.$refs.area.clearFiles()
          // console.log(_this.param)
          _this.fileList = [];
          _this.reload();
        });
    },
    //当上传文件组件submit之前触发执行
    beforeupload(file) {
      console.log("准备上传。。。。");
      console.log(file);
      // 准备表单上传需要的参数对象
      this.param = new FormData();
      this.fileList.push(file); // 把需要上传的文件保存到数组中
      // 遍历数组，把所有文件都保存到参数对象中
      for (let i = 0; i < this.fileList.length; i++) {
        this.param.append(`img_${i}`, this.fileList[i]);
        console.log(this.param)
      }
      return false;
    }
  }
};
</script>
