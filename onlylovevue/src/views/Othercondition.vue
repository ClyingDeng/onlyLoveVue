<template>
  <div class="container condition" style="margin-top: 110px">
    <div class="row">
      <div class="col-md-12">
        <div class="youyisi">
          <div class="touxiang">
            <img :src="'http://pzc93h51i.bkt.clouddn.com/' + otherInfo[0].headPic"
              class="img-thumbnail"/>
              <p class="fontstyle">{{otherInfo[0].love_description}}</p>
          </div>
              
          <div class="youyisi2" style="float: left;">
            <div>
              <h3 style="color:blueviolet">&nbsp;{{otherInfo[0].nickName}}</h3>
              <p class="fontstyle">{{'性别：' + otherInfo[0].sex}}</p>
              <p v-if="otherInfo[0].sweet" class="fontstyle">{{'对他的亲密度值：' + otherInfo[0].sweet}}</p>
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
          <img src="http://pzc93h51i.bkt.clouddn.com/resou.png" width="50px" height="50px" />
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
        <div class="btnTwo col-lg-12">
            <el-button type="warning" @click="drawer = true"><i class="fa fa-gift" aria-hidden="true"></i>送礼物</el-button>
            <el-button type="success" @click="pulsFriend"><i class="fa fa-plus" aria-hidden="true"></i>加好友</el-button>
        </div>
        <el-drawer
      title="送礼物"
    :visible.sync="drawer"
    :before-close="handleClose"
    size="50%">
  <div>
    <!-- <h1>nihao </h1> -->
    <!-- <div class="container"> -->
    <div class="row" v-if="conditions">
      <div class="col-md-4"  v-for="p in conditions" >
            <div class="product bordser"  >
              <div class="product-img">
                <img :src="'http://pzc93h51i.bkt.clouddn.com/' + p.prop_pic" class="pro" />
              </div>
              <div class="product-block" >
                <h5>{{p.prop_Name}}</h5>
                <!-- <h5 class="text-danger">￥{{p.prop_price}}</h5> -->
                <ul class="list-inline text-danger">
                  <li class="list-inline-item">
                    拥有数量：{{p.num}}
                  </li>
                </ul>
              </div>
              <div class="product-footer">
                <div class="row">
                  <div class="col-md-12">
                    <el-input v-model="proNum" placeholder="请输入赠送数量"></el-input>
                  </div>
                  <div class="col-md-6 col-md-push-3" style="margin-top:5px;">
                    <button type="button" class="btn btn-outline-secondary btn-sm" @click="addProduct(p)">赠送</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
    <div v-else>您的背包为空，请至商城购买！</div>
  <!-- </div> -->
  </div>
  </el-drawer>
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
        <!-- 全部动态 -->
        <!-- 第一个说说 -->
        <div
          class="col-xs-12"
          style="margin-bottom:20px;margin-top: 20px;clear:both;background-color: rgb(243, 237, 237)"
          v-if="otherInfo[0].condition"
          v-for="key in otherInfo[0].condition">
          <div style="float: left;padding: 20px">
            <img
              :src="'http://pzc93h51i.bkt.clouddn.com/' + otherInfo[0].headPic"
              class="img-circle"
              width="50px"
              height="50px"
            />
          </div>
          <div style="float: left;padding-top: 18px">
            <a href="#" style="font-size: 18px;color: black">{{key.nickName}}</a>
            <p style="margin-top:3px;font-size: 12px;color: rgb(167, 166, 164)">20:17</p>
          </div>
          <div style="clear: both;margin-left: 80px">
            <p>{{key.con_words}}</p>
          </div>
          <div style="margin:30px;clear:both; ">
            <img v-show="key.con_pic_1" class="shuotu" :src="'http://localhost:3000/hspicture/'+ key.con_pic_1" />
            <img v-show="key.con_pic_2" class="shuotu" :src="'http://localhost:3000/hspicture/'+ key.con_pic_2" />
            <img v-show="key.con_pic_3" class="shuotu" :src="'http://localhost:3000/hspicture/'+ key.con_pic_3" />
            <img v-show="key.con_pic_4" class="shuotu" :src="'http://localhost:3000/hspicture/'+ key.con_pic_4" />
          </div>
          <ul style="padding:0;position:absolute;right:5px;bottom:5px;">
            <li style="float: left;width:50px;" @click="approve(key)">
              <a href="#">
                <i class="fa fa-thumbs-o-up fa-1x" style="color:#ff6700" aria-hidden="true"></i>
                <em v-if="key.approveNum">{{key.approveNum}}</em>
                <em v-else>0</em>
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
        <div class="sweetScore" v-if="!otherInfo[0].condition">
          <h1>亲密度不足，请增加！</h1>
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
          <!-- 谁看过我 -->
        <!-- <div class="kan">
          <div class="kanwo" style="clear:both;width:300px;margin-top:2px">
            <h4 style="text-align:center;color:blueviolet">关注他的</h4>
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
            <h4 style="text-align:center;color:blueviolet">他关注的</h4>
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
        </div> -->
      </div>
    </div>
  </div>
</template>
<style scroped>
.pro{
  width:100%;
  height:120px;
}
.touxiang .fontstyle{
  margin-top: 20px;
}
.fontstyle{
  color: #666;

}
.btnTwo{
  margin-left: 25px;
  margin-bottom: 20px;
}
.sweetScore{
  width: 100%;
  height: 100%;
  text-align: center;
  /* background-color: red; */
  margin-top: 40%;
}
.sweetScore h1{
  color: #666;
}
.youyisi2{
  height: 100%;
  margin-top: 20px;
  margin-left: 20px;
}
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
  display: block;
  margin: auto;
}
.touxiang {
  width: 130px;
  float: left;
}
.youyisi {
  height: 100%;
  width: 100%;
  margin-top: 20px;
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
  line-height: 40px;
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
@media screen and (max-width: 992px){
  .pro{
  width:80%;
  height:120px;
}
}
</style>

<script>
import jwt_decode from "jwt-decode";
export default {
  name: "test",
  data() {
    return {
      otherId:'',
      time: "",
      otherInfo: {},
      // 抽屉
      drawer: false,
      innerDrawer: false,
      // 商品
      conditions: [],
      //赠送数量
      proNum:'',
      addObj:{},
      isAddFriends:'0'      //0代表不能加好友
    };
  },
  created() {
    this.$axios
      .get("http://localhost:3000/shop/backpack"
        
      )
      .then(res => {
        console.log("查询结果：");
        console.log(res.data.data);
        // let i = 0
        // 拿到后台数据·赋值给前端
        this.conditions = res.data.data;
        console.log('道具')
        console.log(this.conditions)
        // localStorage.setItem('product',JSON.stringify(res.data.data))
      })
      .catch(err => {
        console.log("错误信息：" + err);
      });
    
    // console.log('session')
    // console.log(JSON.parse(sessionStorage.getItem('otherInfos')))
    this.otherId = sessionStorage.getItem('otherId')
    // console.log('前面传的值：' + this.otherId)
    let userInfo = jwt_decode(localStorage.getItem ('mytoken'))
      // console.log('token对象：',userInfo.userId)

    //查看他人信息otherInfo
    if(this.otherId != userInfo.userId){
    console.log('他人')
  

    let lookHe = 'http://localhost:3000/personal/othersAttention/' + this.otherId
    console.log(lookHe)
    this.$axios
        .get(lookHe)
        .then(res => {
        //拿到后台数据赋值给前端
        let otherInfo = {};
        otherInfo = res.data.data
        console.log(otherInfo)
        console.log('能看到他的信息了吗')
        console.log(res.data.data)
        this.otherInfo = res.data.data
        console.log('en')
        console.log(this.otherInfo)
        if(this.otherInfo[0].sweet > 199){
          this.isAddFriends = 1
          console.log(this.isAddFriends)
        }
      })
      .catch(err => {
        console.log("错误信息：" + err);
      });
    // this.otherInfo = JSON.parse(sessionStorage.getItem('otherInfos'))
    console.log(this.otherInfo)
    }else{
      alert('您查看的是自己主页，即将为您跳转！')
      this.$router.push({name:'/condition',name: 'condition'})
    }
    

    // this.$axios
    //   .get("http://localhost:3000/users/attentionMe")
    //   .then(res => {
    //     //拿到后台数据赋值给前端
    //     this.attentionme = res.data.data;
    //     // console.log(this.attentionme);
    //   })
    //   .catch(err => {
    //     console.log("错误信息：" + err);
    //   });
    // this.$axios
    //   .get("http://localhost:3000/users/iAttention")
    //   .then(res => {
    //     //拿到后台数据赋值给前端
    //     this.meattention = res.data.data;
    //     // console.log(this.meattention);
    //   })
    //   .catch(err => {
    //     console.log("错误信息：" + err);
    //   });
    // this.$axios
    //   .get("http://localhost:3000/shop/memeber")
    //   .then(res => {
    //     //拿到后台数据赋值给前端
    //     console.log(res);
    //     this.member = res.data.data;
    //     console.log(this.member);
    //   })
    //   .catch(err => {
    //     console.log("错误信息：" + err);
    //   });

      


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
          // _this.$refs.area.clearFiles()
          // console.log(_this.param)
          _this.fileList = [];
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
      }
      return false;
    },
    //送礼物
     handleClose(done) {

      //  if(!this.conditions){
      //    alert('您还没有道具，请至商城购买道具！')
      //    return done();
      //  }
        this.$confirm('您确定关闭吗？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
            // this.$router.push({name:'/otherCondition',name: 'otherCondition',params:{Id:key.base_info_Id}})
      },
      addProduct(p){
        console.log(p)
        //获取当前时间
        function getNowFormatDate () {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
      };
      console.log(getNowFormatDate())
      //
      this.addObj.addId = this.otherInfo[0].base_info_Id
      this.addObj.propsId = p.props_Id
      this.addObj.num = this.proNum
      this.addObj.haveTime = getNowFormatDate()
      console.log('对象：' + this.addObj.addId)
      console.log('道具编号：' + this.addObj.propsId )
      console.log('数量：' + this.addObj.num)
      console.log('时间：' + getNowFormatDate())
      //调用送礼物接口
      this.$axios
            .post("http://localhost:3000/personal/addGift", this.addObj)
            .then(res => {
              console.log(res.data);
              console.log('可以了吗')
              if(res.data.affectedRows){
                alert('赠送成功')
                
              }
            })
            .catch(err => {
              console.log(err);
            });
      },
    pulsFriend(){
      let addIp = 'http://localhost:3000/personal/addFriend/' + this.otherInfo[0].base_info_Id
      console.log('对象接口' + addIp)
      if(this.isAddFriends == '0'){
        alert('亲密度不足，您还不能添加好友！')
      }else{
        
        this.$axios
            .post(addIp)
            .then(res => {
              console.log(res.data);
              console.log('可以了吗')
              
            })
            .catch(err => {
              console.log(err);
            });
        alert('发送好友请求成功')

      }
    },
    approve(key){
      // alert('点赞')
      console.log(key.con_Id)
      let conId = {}
      conId.conId = key.con_Id
      // let config = {
      //   headers: {
      //     "Content-Type": 'application/x-www-form-urlencoded'
      //   }
      // };
       this.$axios
            .post("http://localhost:3000/personal/approve", conId)
            .then(res => {
              console.log(res.data);
              console.log(conId)
              console.log('可以了吗')
              if(res.affectedRows){
                console.log(res.data.approveNum)
                if(res.data.approveNum){
                  alert('点赞成功！')

                }
                
              }
            })
            .catch(err => {
              console.log(err);
            });
    }
  }
};
</script>
