<template>
  <div class="container condition" style="margin-top: 110px">
    <div class="row">
      <div class="col-md-12">
        <div class="youyisi">
          <div class="touxiang">
            <img src="../assets/imgs/xd.jpg" class="img-thumbnail" />
          </div>
          <div class="youyisi2" style="float: left;">
            <div>
              <h3 style="color:blueviolet">&nbsp;退路</h3>
            </div>
            <!-- 会员图标 -->
            <div style="float: left">
              <!-- <img src="../assets/imgs/8.png" width="50px" height="40px" /> -->
              <i class="fa fa-google-wallet fa-3x" aria-hidden="true " style="color:#EDB566;"></i>
            </div>
            <div class="hidden-xs">
              <div style="float: left;margin-left: 20px;">
                <span style="color:blueviolet">
                  <p>成长值26940</p>
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
              <textarea class="form-control" v-model="form.name" rows="10" placeholder="说点什么吧"></textarea>
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
        <div style="margin-top: 20px;clear:both;height:500px;background-color: rgb(243, 237, 237)">
          <div style="float: left;padding: 20px">
            <img src="../assets/imgs/xd.jpg" class="img-circle" width="50px" height="50px" />
          </div>
          <div style="float: left;padding-top: 18px">
            <a href="#" style="font-size: 18px;color: black">退路</a>
            <p style="margin-top:3px;font-size: 12px;color: rgb(167, 166, 164)">20:17</p>
          </div>
          <div style="clear: both;margin-left: 80px">
            <p>
              我手机从来不离身,一个人走在路上,
              <br />一个人出去,为了避免尴尬,
              <br />总是拿出手机,时不时的摆弄下,
              <br />其实只有自己知道,只是把手机解锁,
              <br />看下时间,滑冻几下桌面,
              <br />然后锁屏,几分钟后又重复一遍,
              <br />这就是孤独,一个人的孤独。
              <br />——网易云音乐热评墙《一万次悲伤》
              <br />
            </p>
          </div>
          <div style="margin:30px ">
            <img class="shuotu" src="../assets/imgs/xd.jpg" />
            <img class="shuotu" src="../assets/imgs/xd.jpg" />
          </div>
        </div>
        <!-- 第二个说说 -->
        <div style="margin-top: 20px;clear:both;height: 500px;background-color: rgb(243, 237, 237)">
          <div style="float: left;padding: 20px">
            <img src="../assets/imgs/xd.jpg" class="img-circle" width="50px" height="50px" />
          </div>
          <div style="float: left;padding-top: 18px">
            <a href="#" style="font-size: 18px;color: black">退路</a>
            <p style="margin-top:3px;font-size: 12px;color: rgb(167, 166, 164)">20:17</p>
          </div>
          <div style="clear: both;margin-left: 80px">
            <p>
              我手机从来不离身,一个人走在路上,
              <br />一个人出去,为了避免尴尬,
              <br />总是拿出手机,时不时的摆弄下,
              <br />其实只有自己知道,只是把手机解锁,
              <br />看下时间,滑冻几下桌面,
              <br />然后锁屏,几分钟后又重复一遍,
              <br />这就是孤独,一个人的孤独。
              <br />——网易云音乐热评墙《一万次悲伤》
              <br />
            </p>
          </div>

          <div style="margin:30px ">
            <img class="shuotu" src="../assets/imgs/xd.jpg" />
            <img class="shuotu" src="../assets/imgs/xd.jpg" />
          </div>
        </div>
      </div>
      <!-- 右边 -->
      <!-- 签到 -->
      <div class="youbian" style="float: right">
        <div class="qiandao">
          <div class="qianzuo">
            <a href style="text-decoration:none">
              <ul>
                <li>10.14</li>
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
          <div
            class="kanwo"
            style="background-color: rgb(243, 237, 237);height:450px;width:300px;margin-top:2px"
          >
            <h4 style="text-align:center;color:blueviolet">谁看过我</h4>
            <div class="col-md-6">
              <div class="work-box">
                <a href="http://pzc93h51i.bkt.clouddn.com/work-1.jpg" data-lightbox="gallery-mf">
                  <div class="work-img">
                    <img src="../assets/imgs/fang2.jpg" alt class="img-fluid" />
                  </div>
                  <div class="work-content">
                    <div class="row">
                      <div class="col-sm-12">
                        <h2 class="w-title">clying</h2>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="work-box">
                <a href="http://pzc93h51i.bkt.clouddn.com/work-1.jpg" data-lightbox="gallery-mf">
                  <div class="work-img">
                    <img src="../assets/imgs/fang2.jpg" alt class="img-fluid" />
                  </div>
                  <div class="work-content">
                    <div class="row">
                      <div class="col-sm-12">
                        <h2 class="w-title">clying</h2>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="work-box">
                <a href="http://pzc93h51i.bkt.clouddn.com/work-1.jpg" data-lightbox="gallery-mf">
                  <div class="work-img">
                    <img src="../assets/imgs/fang2.jpg" alt class="img-fluid" />
                  </div>
                  <div class="work-content">
                    <div class="row">
                      <div class="col-sm-12">
                        <h2 class="w-title">clying</h2>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            class="wokan"
            style="background-color: rgb(243, 237, 237);height:400px;width:300px;margin-top: 20px"
          >
            <h4 style="text-align:center;color:blueviolet">我看过谁</h4>
            <div class="col-md-6">
              <div class="work-box">
                <a href="http://pzc93h51i.bkt.clouddn.com/work-1.jpg" data-lightbox="gallery-mf">
                  <div class="work-img">
                    <img src="../assets/imgs/fang2.jpg" alt class="img-fluid" />
                  </div>
                  <div class="work-content">
                    <div class="row">
                      <div class="col-sm-12">
                        <h2 class="w-title">clying</h2>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="work-box">
                <a href="http://pzc93h51i.bkt.clouddn.com/work-1.jpg" data-lightbox="gallery-mf">
                  <div class="work-img">
                    <img src="../assets/imgs/fang2.jpg" alt class="img-fluid" />
                  </div>
                  <div class="work-content">
                    <div class="row">
                      <div class="col-sm-12">
                        <h2 class="w-title">clying</h2>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="work-box">
                <a href="http://pzc93h51i.bkt.clouddn.com/work-1.jpg" data-lightbox="gallery-mf">
                  <div class="work-img">
                    <img src="../assets/imgs/fang2.jpg" alt class="img-fluid" />
                  </div>
                  <div class="work-content">
                    <div class="row">
                      <div class="col-sm-12">
                        <h2 class="w-title">clying</h2>
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
<style>
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

/* @media screen and (max-width: 992px) {
  .youyisi2 {
    width: 320px;
  }
  .dongtai {
    display: block;
  }
}
@media screen and (max-width: 716px) {
  .youyisi2 {
    width: 100px;
  }
}

@media screen and (max-width: 1200px) and (min-width: 992px) {
  .centerblock {
    display: block;
  }
}
@media screen and (max-width: 992px) and (min-width: 768px) {
  .centerblock {
    width: 550px;
    display: block;
    margin-right: 0;
  }
}
@media screen and (max-width: 768px) {
  .centerblock {
    width: 465px;
    margin-left: 0;
    margin: auto;
  }
  .shuoshenme form {
    width: 465px;
  }
} */
@media screen and (max-width: 1200px) {
  .zuobian,
  .youbian {
    display: none;
  }
}
</style>

<script>
export default {
  name: "test",
  data() {
    return {
      time: "",
      msg: "上传动态",
      user_Id: "",
      user: {},
      fileList: [],
      form: {
        name: "" //绑定表单元素的属性
      },
      param: "" // 表单最后提交的参数对象
    };
  },
  methods: {
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
          console.log(_this.$refs.upload)
          _this.$refs.upload.clearFiles()
        });
      
    },
    //当上传文件组件submit之前触发执行
    beforeupload(file) {
      console.log("准备上传。。。。");
      // 准备表单上传需要的参数对象
      this.param = new FormData();
      this.fileList.push(file); // 把需要上传的文件保存到数组中
      // 遍历数组，把所有文件都保存到参数对象中
      for (let i = 0; i < this.fileList.length; i++) {
        this.param.append(`img_${i}`, this.fileList[i]);
      }
      return false;
    }
  }
};
</script>
