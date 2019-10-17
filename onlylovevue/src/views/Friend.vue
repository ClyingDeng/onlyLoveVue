<template>
  <div class="friend">
    <div class="container">
      <div class="row">
        <div class="zongbiao col-md-8">
        <!-- 好友列表 -->
        <div class="liebiao col-md-4" style="float:left;background-color:#434753;height:633px">
          <div >
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
             </div> -->
              
            <!-- 列表 -->
            <div class="haoyouliebiao">
              <div class="media">
                <div class="media-left media-middle">
                  <a href="#">
                    <img class="media-object" src="../assets/imgs/dengying.jpg" alt />
                  </a>
                </div>
                <div class="media-body">
                  <h6 class="media-heading">邓小颖</h6>
                  <p><img src="../assets/imgs/lvdian.jpg" alt=""> 你除了修不完的 bug 还有什么？</p>
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
                  <p><img src="../assets/imgs/lvdian.jpg" alt=""> Hello World</p>
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
                  <p><img src="../assets/imgs/lvdian.jpg" alt=""> PuTTY 本无树，MinGW 亦非台。</p>
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
                  <p><img src="../assets/imgs/heidian.jpg" alt=""> 成功chroot过很多系统却从未成功chroot过妹子的心。</p>
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
                  <p><img src="../assets/imgs/heidian.jpg" alt="">333</p>
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
                  <p><img src="../assets/imgs/lvdian.jpg" alt="">333</p>
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
                  <p><img src="../assets/imgs/lvdian.jpg" alt="">333</p>
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
                  <p><img src="../assets/imgs/heidian.jpg" alt="">333</p>
                </div>
              </div>
            </div>
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
          <div
            class="jilu"
            style="margin-top:-30px;padding-right:10px;padding-left:10px;background-color:#F1F5F8;"
          >
            <div style="background-color:white">
              <hr style="margin:0;height:3px" />
            </div>

            <!-- row pre-scrollable 滚动条 -->
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
                  <h4 class="media-heading">让天下没有难写的代码！</h4>
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
                  <h4 class="media-heading">代码在囧途，也要写到底！</h4>
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
                  <h4 class="media-heading">别急，您慢慢说。。。。。</h4>
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
                  <h4 class="media-heading">您好，我现在有事不在，一会再和您联系！</h4>
                </div>
              </div>
              <div class="media-right">
                <a href="#">
                  <img class="media-object" src="../assets/imgs/huateng.jpg" alt="..." />
                </a>
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
                  <i class="fa fa-smile-o fa-2x" aria-hidden="true" style="margin-left:15px;"></i>
                </span>
                <span class="layui-icon layim-tool-image" title="上传图片" layim-event="image">
                  <i class="fa fa-picture-o fa-2x" aria-hidden="true"></i>
                </span>
                <span
                  class="layui-icon layim-tool-image"
                  title="发送文件"
                  layim-event="image"
                  data-type="file"
                >
                  <i class="fa fa-file-text-o fa-2x" aria-hidden="true"></i>
                  <!-- <input type="file" name="file"> -->
                </span>
                <span
                  class="layui-icon layim-tool-audio"
                  title="发送网络音频"
                  layim-event="media"
                  data-type="audio"
                >
                  <i class="fa fa-headphones fa-2x" aria-hidden="true"></i>
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
                  <i class="fa fa-code fa-2x" aria-hidden="true"></i>
                </span>
                <div style="float: right;width:95px">
                  <span class="layim-tool-log" layim-event="chatLog">
                    <i class="fa fa-clock-o fa-2x" aria-hidden="true"></i> 聊天记录&nbsp;
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
  </div>
</template>
<style>
.friend {
  height: 2000px;
  margin-top: 100px;
}
.list-group img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.jilu img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.haoyouliebiao img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.haoyouliebiao .media h6{
  margin-top:10px;
  color:white;
}
.haoyouliebiao .media p{
  color: #A8ADB3;
  font-size: 10px
}
.haoyouliebiao .media p img{
  width:8px;
  height:8px;
  border-radius: 50%;
}
</style>

