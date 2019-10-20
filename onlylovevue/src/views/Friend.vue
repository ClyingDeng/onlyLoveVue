<template>
  <div class="container">
    <div class="row">
      <div class="zongbiao col-md-offset-2 col-md-8">
        <!-- 好友列表 -->
        <div class="liebiao col-md-4" style="float:left;background-color:#434753;height:573px">
          <div>
            <div class="input-group" style="margin-top:15px;margin-bottom:20px">
              <!-- <span class="input-group-addon" id="basic-addon1">@</span> -->
              <input
                type="text"
                class="form-control"
                placeholder="search"
                style="background-color:#696C75"
                aria-describedby="basic-addon1"
              />
            </div>
            <!-- 搜索图标 -->
            <!-- <div style="float:right;margin-top:-45px;">
               <i class="fa fa-search" aria-hidden="true" style="color:#FFFFFF;"></i>
            </div>-->

            <!-- 列表 -->
            <div class="haoyouliebiao">
              <div id="gundong" style="height:325px;">
                <div class="media" v-for="key in friInfo[0]">
                  <div class="media-left media-middle">
                    <a href="#">
                      <img class="media-object"  :src="'http://pzc93h51i.bkt.clouddn.com/' + key.headPic" alt />
                    </a>
                  </div>
                  <div class="media-body" >
                    <h6 v-if="key.user_remark" class="media-heading">{{key.user_remark}}</h6>
                    <h6 v-else class="media-heading">{{key.nickName}}</h6>
                    <p>
                      <img src="../assets/imgs/lvdian.jpg" alt /> 你除了修不完的 bug 还有什么？
                    </p>
                  </div>
                </div>
                <div class="media">
                  <div class="media-left media-middle">
                    <a href="#">
                      <img class="media-object" src="../assets/imgs/jiaxin.jpg" alt />
                    </a>
                  </div>
                  <div class="media-body">
                    <h6 class="media-heading">李小欣</h6>
                    <p>
                      <img src="../assets/imgs/lvdian.jpg" alt /> Hello World
                    </p>
                  </div>
                </div>
                <div class="media">
                  <div class="media-left media-middle">
                    <a href="#">
                      <img class="media-object" src="../assets/imgs/honghong.jpg" alt />
                    </a>
                  </div>
                  <div class="media-body">
                    <h6 class="media-heading">石小红</h6>
                    <p>
                      <img src="../assets/imgs/lvdian.jpg" alt /> PuTTY 本无树，MinGW 亦非台。
                    </p>
                  </div>
                </div>
                <div class="media">
                  <div class="media-left media-middle">
                    <a href="#">
                      <img class="media-object" src="../assets/imgs/jiajia.jpg" alt />
                    </a>
                  </div>
                  <div class="media-body">
                    <h6 class="media-heading">宋小镱</h6>
                    <p>
                      <img src="../assets/imgs/heidian.jpg" alt /> 成功chroot过很多bug却从未成功chroot过妹子的心。
                    </p>
                  </div>
                </div>
                <div class="media">
                  <div class="media-left media-middle">
                    <a href="#">
                      <img class="media-object" src="../assets/imgs/mayun.jpg" alt />
                    </a>
                  </div>
                  <div class="media-body">
                    <h6 class="media-heading">马小云</h6>
                    <p>
                      <img src="../assets/imgs/heidian.jpg" alt />333
                    </p>
                  </div>
                </div>
                <div class="media">
                  <div class="media-left media-middle">
                    <a href="#">
                      <img class="media-object" src="../assets/imgs/huateng.jpg" alt />
                    </a>
                  </div>
                  <div class="media-body">
                    <h6 class="media-heading">麻花腾</h6>
                    <p>
                      <img src="../assets/imgs/lvdian.jpg" alt />333
                    </p>
                  </div>
                </div>
                <div class="media">
                  <div class="media-left media-middle">
                    <a href="#">
                      <img class="media-object" src="../assets/imgs/xiaoxian.jpg" alt />
                    </a>
                  </div>
                  <div class="media-body">
                    <h6 class="media-heading">王小贤</h6>
                    <p>
                      <img src="../assets/imgs/lvdian.jpg" alt />333
                    </p>
                  </div>
                </div>
                <div class="media">
                  <div class="media-left media-middle">
                    <a href="#">
                      <img class="media-object" src="../assets/imgs/xiaozheng.jpg" alt />
                    </a>
                  </div>
                  <div class="media-body">
                    <h6 class="media-heading">徐小峥</h6>
                    <p>
                      <img src="../assets/imgs/heidian.jpg" alt />333
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" class="shuzhuang" style="background:#434753;color:#A8ADB3"></el-tree>
          <div class="guanyu">
            <ul class="list-group" style="background:#434753">
              <li class="list-group-item" style="color:#A8ADB3;background:#696c75; border: 1px solid #696c75;margin-top:8px ">
                <span class="badge" v-if="msg" >1</span>
                系统消息
                <p :class="className">账号为{{postPam}}的用户，请求加您为好友</p>
                <el-button v-if="msg" @click="agree" style="padding:5px;height:25px;" type="info">同意</el-button>
              </li>
              <!-- <li class="list-group-item" >
              </li> -->
            </ul>
            <!-- <ul class="list-group" style="background:#434753">
              <li class="list-group-item" style="color:#A8ADB3;background:#696c75; border: 1px solid #696c75;margin-top:-7px ">
                <span class="badge" >1</span>
                关于我们
              </li>
            </ul> -->
          </div>
        </div>
        <div class="liaotian col-md-8" style="padding:0;float:left;">
          <!-- 聊天信息 -->
          <div class="list-group" style="height:130px;margin-bottom:0px;">
            <a
              href="#"
              class="list-group-item active"
              style="height:100px;background-color:#F1F5F8;border:0"
            >
              <span>
                <img src="../assets/imgs/mayun.jpg" />
              </span>
              <h4
                class="list-group-item-heading"
                style="margin-left:80px;margin-top:-70px;background-color:#F1F5F8;color:#434753"
              >马小云</h4>
              <div class="1">
                <!-- 删除 最小化图标 -->
                <div>
                  <i
                    class="fa fa-window-minimize fa-2x"
                    aria-hidden="true"
                    style="float:right;margin-top:-68px;margin-right:30px;color:#434753"
                  ></i>
                </div>
                <div>
                  <i
                    class="fa fa-window-close fa-2x"
                    aria-hidden="true"
                    style="float:right;margin-top:-60px;margin-right:-10px;color:#434753"
                  ></i>
                </div>
              </div>
            </a>
          </div>

          <!-- 消息 -->
          <div class="jilu" style="margin-top:-30px;background-color:#F1F5F8;">
            <div style="background-color:white">
              <hr style="margin:0;height:3px" />
            </div>
            <!-- row pre-scrollable -->
            <div class="gundong">
              <div class="media" style="padding-top:20px">
                <div class="media-left">
                  <a href="#">
                    <img class="media-object" src="../assets/imgs/mayun.jpg" alt="..." />
                  </a>
                </div>
                <div class="media-body">
                  <div style="float:left">
                    <h6
                      class="media-heading"
                      style="margin-top:20px"
                    >马小云&nbsp;&nbsp;2019-10-16&nbsp;14:11:42</h6>
                    <h5 class="media-heading">让天下没有难写的代码！</h5>
                  </div>
                </div>
              </div>
              <div class="media">
                <div class="media-body">
                  <div style="float:right">
                    <h6
                      class="media-heading"
                      style="margin-top:20px"
                    >2019-10-16&nbsp;14:20:16&nbsp;&nbsp;麻花腾</h6>
                    <h5 class="media-heading">代码在囧途，也要写到底！</h5>
                  </div>
                </div>
                <div class="media-right">
                  <a href="#">
                    <img class="media-object" src="../assets/imgs/huateng.jpg" alt="..." />
                  </a>
                </div>
              </div>
              <div class="media">
                <div class="media-left">
                  <a href="#">
                    <img class="media-object" src="../assets/imgs/mayun.jpg" alt="..." />
                  </a>
                </div>
                <div class="media-body">
                  <div style="float:left">
                    <h6
                      class="media-heading"
                      style="margin-top:20px"
                    >马小云&nbsp;&nbsp;2019-10-16&nbsp;14:11:42</h6>
                    <h5 class="media-heading">别急，您慢慢说。。。。。</h5>
                  </div>
                </div>
              </div>
              <div class="media">
                <div class="media-body">
                  <div style="float:right">
                    <h6
                      class="media-heading"
                      style="margin-top:20px"
                    >2019-10-16&nbsp;14:20:16&nbsp;&nbsp;麻花腾</h6>
                    <h5 class="media-heading">您好，我现在有事不在，一会再和您联系！</h5>
                  </div>
                </div>
                <div class="media-right">
                  <a href="#">
                    <img class="media-object" src="../assets/imgs/huateng.jpg" alt="..." />
                  </a>
                </div>
              </div>
              <div class="media">
                <div class="media-left">
                  <a href="#">
                    <img class="media-object" src="../assets/imgs/mayun.jpg" alt="..." />
                  </a>
                </div>
                <div class="media-body">
                  <div style="float:left">
                    <h6
                      class="media-heading"
                      style="margin-top:20px"
                    >马小云&nbsp;&nbsp;&nbsp;14:11:42</h6>
                    <h5 class="media-heading">这也太难了。。。</h5>
                  </div>
                </div>
              </div>
              <div class="media">
                <div class="media-body">
                  <div style="float:right">
                    <h6
                      class="media-heading"
                      style="margin-top:20px"
                    >&nbsp;14:20:16&nbsp;&nbsp;麻花腾</h6>
                    <h5 class="media-heading">可不是嘛！！</h5>
                  </div>
                </div>
                <div class="media-right">
                  <a href="#">
                    <img class="media-object" src="../assets/imgs/huateng.jpg" alt="..." />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- <div style="background-color:white">
            <hr style="margin:0;height:3px" />
          </div>-->

          <div>
            <div class="chat-message-form" style="background-color:#F1F5F8;">
              <div class="layui-unselect" style="float:left;width:360px">
                <span class="layui-icon layim-tool-face" title="选择表情" layim-event="face">
                  <i class="fa fa-smile-o fa-2x" aria-hidden="true" style="margin-left:15px;color:#605C59"></i>
                </span>
                <span class="layui-icon layim-tool-image" title="上传图片" layim-event="image">
                  <i class="fa fa-picture-o fa-2x" aria-hidden="true" style="color:#605C59"></i>
                </span>
                <span
                  class="layui-icon layim-tool-image"
                  title="发送文件"
                  layim-event="image"
                  data-type="file"
                >
                  <i class="fa fa-file-text-o fa-2x" aria-hidden="true" style="color:#605C59"></i>
                  <!-- <input type="file" name="file"> -->
                </span>
                <span
                  class="layui-icon layim-tool-audio"
                  title="发送网络音频"
                  layim-event="media"
                  data-type="audio"
                >
                  <i class="fa fa-headphones fa-2x" aria-hidden="true" style="color:#605C59"></i>
                </span>
                <!-- <span
                  class="layui-icon layim-tool-video"
                  title="发送网络视频"
                  layim-event="media"
                  data-type="video"
                >
                  <i class="fa fa-video-camera fa-2x" aria-hidden="true"></i>
                </span>-->
                <span
                  class="layui-icon layim-tool-code"
                  title="代码"
                  layim-event="extend"
                  lay-filter="code"
                >
                  <i class="fa fa-code fa-2x" aria-hidden="true" style="color:#605C59"></i>
                </span>
                <div style="float: right;width:95px">
                  <span class="layim-tool-log" layim-event="chatLog">
                    <i class="fa fa-clock-o fa-2x" aria-hidden="true" style="color:#605C59"></i> 聊天记录&nbsp;
                  </span>
                </div>
              </div>
              <div class="form-group" style="margin-bottom:0;">
                <textarea
                  class="form-control message-input"
                  name="message"
                  style="height:90px"
                  placeholder="输入消息内容，按回车键发送"
                ></textarea>
                <div class="btn-group" style="float: right;margin-top:-40px;">
                  <button type="button" class="btn btn-w-m btn-primary" style="margin-right:5px">关闭</button>
                  <button type="button" class="btn btn-w-m btn-primary" style="margin-right:10px">发送</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          label: "黑名单",
          children: [
            { label: "他二婶" },
            { label: "他二舅母" },
            { label: "大侄子" }
          ]
        },
        {
          label: "公众号",
          children: [{ label: "onlylove" }]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      className:'hide',
      msg:false,
      postPam:'',
      fri:{},
      friInfo:{}
    };
  },
  created(){
    let _this = this
        this.$axios
      .get("http://localhost:3000/message/selectMsg")
      .then(res => {
        console.log("查询结果：");
        console.log(res.data.data[0]);
        _this.fri = res.data.data[0]
        console.log(_this.fri)
        //没有好友请求
        if(!_this.fri){
          this.className = 'hide'
          this.msg = false
        }else{
          this.className = 'show'
          this.msg = true
          this.postPam = _this.fri.user_Id
        }
        
      })
      .catch(err => {
        console.log("错误信息：" + err);
      });
      //查询好友列表
       this.$axios
      .get("http://localhost:3000/message/friendList")
      .then(res => {
        console.log("列表有人吗：");
        console.log(res.data);
        //有
        if(res.data){
          _this.friInfo = res.data.data
          console.log(_this.friInfo)
        }
        
      })
      .catch(err => {
        console.log("错误信息：" + err);
      });
    
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    agree(){
      console.log(this.fri)
      let agreeFri = 'http://localhost:3000/message/agreeFriend/' + this.fri.user_Id
      this.$axios
            .post(agreeFri)
            .then(res => {
              console.log("成功！", res);
              console.log(res.data);
              if(res.data.affectedRows){
                alert('添加好友成功！')
              }
            })
            .catch(err => {
              console.log(err);
            });
    }
  }
};
</script>
<style scoped>
.list-group-item{
  cursor: pointer;
}
.show{
  display: none;
}
.hide{
  display: block;
}
.container {
  /* height: 650px; */
  margin-top: 100px;
}
.list-group img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.xitongxiaoxi {
  padding-left: 28px;
}
.jilu .media {
  padding: 0 7px 0 10px;
}
.jilu img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.gundong {
  height: 350px;
  overflow-y: scroll;
 
}
#gundong {
  margin-right: -10px;
  overflow-y: hidden;
}

#gundong:hover {
  overflow-y: auto;
}
#gundong::-webkit-scrollbar {
  width: 4px;
  height: 50px;
  background: #cdd2d6;
}
.gundong::-webkit-scrollbar {
  width: 4px;
  height: 50px;
  background: #cdd2d6;
}
/* * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
} */

.haoyouliebiao img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.haoyouliebiao .media h6 {
  margin-top: 10px;
  color: white;
}
.haoyouliebiao .media p {
  color: #a8adb3;
  font-size: 10px;
}
.haoyouliebiao .media p img {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.item {
  margin: 0 auto;
  margin-top: 10px;
  margin-right: 40px;
}
</style>

