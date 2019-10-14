   <template>
  <div class="condition">
    <div class="container">
      <div class="row">
        <div class="">
          <div class="touxiang">
            <img src="../assets/imgs/xd.jpg" class="img-thumbnail" />
          </div>
          <div style="float: left;margin-top: 0px">
            <div style="width:405px">
              <h3 style="color:blueviolet">退路</h3>
            </div>
            <!-- 黄钻图标 -->
            <div style="float: left">
              <img src="../assets/imgs/8.png" width="50px" height="40px" />
            </div>
            <div class="hidden-xs">
              <div style="float: left;margin-left: 20px;">
                <span style="color:blueviolet">
                  成长值26940
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;成长速度40/天
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
                >续费黄钻</button>
              </div>
            </div>
          </div>
        </div>
        <!-- 访客 -->
        <div class="fangke" style="float:right;margin-top:60px;margin-right: 30px;">
          <span style="color:blueviolet">
            今日访客:1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;被挡访客:2
            <br />总访客人数:&nbsp;903904;
          </span>
        </div>
        <div style="float: right;margin-top: 55px;margin-right: 10px">
          <img src="../assets/imgs/eye.png" width="50px" height="50px" />
        </div>

        <!-- 说说导航 -->
        <div class="container" style="clear: both;margin-left: 140px;">
          <div class="row">
            <ul class="nav nav-tabs">
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
                <a href="#">音乐</a>
              </li>
              <li>
                <a href="#">更多</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container2">
      <div class="row2">
        <!-- 左边竖着 -->
        <div style="width: 180px; margin-left: 47px;font-size: 14px;float: left;">
          <div>
            <a href="#" class="list-group-item">
              <span
                class="glyphicon glyphicon-user"
                style="text-shadow: rgb(216, 206, 206) 3px -1px;"
              ></span>
              好友动态
              <span class="badge">50</span>
            </a>
            <a href="#" class="list-group-item">
              <span class="glyphicon glyphicon-heart-empty"></span>&nbsp;特别关心
              <span class="badge">1</span>
            </a>
            <a href="#" class="list-group-item">
              @&nbsp;与我相关
              <span class="badge">2</span>
            </a>
            <a href="#" class="list-group-item">
              <span class="glyphicon glyphicon-play-circle"></span>&nbsp;空间达人
            </a>
            <a href="#" class="list-group-item">
              <span class="glyphicon glyphicon-list-alt"></span>&nbsp;那年今日
            </a>

            <a href="#" class="list-group-item">
              <span class="glyphicon glyphicon-th-large"></span>&nbsp;游戏应用
            </a>
          </div>

          <div style="margin-top: 20px">
            <a href="#" class="list-group-item">
              QQ农场
              <span class="badge">2</span>
            </a>
            <a href="#" class="list-group-item">QQ牧场</a>
            <a href="#" class="list-group-item">
              花藤
              <span class="badge">2</span>
            </a>
            <a href="#" class="list-group-item">礼物</a>
            <a href="#" class="list-group-item">游戏应用中心</a>

            <a href="#" class="list-group-item">LOL</a>
          </div>
        </div>
        <!-- 中间动态 -->
        <!-- 说点什么！！！ -->
        <div class="center-block" style="float: left;margin-left: 20px;">
          <div style="padding: 0px;float: left;width: 550px;">
            <form role="form">
              <div class="form-group has-feedback">
                <textarea class="form-control" rows="3" placeholder="说点什么吧"></textarea>

                <button
                  class="btn btn-default glyphicon glyphicon-camera form-control-feedback"
                  style="height: 74px;width: 50px;"
                ></button>
              </div>
            </form>
          </div>
          <div style="float: left">
            <button
              class="btn btn-default glyphicon glyphicon-paperclip"
              style="height: 74px;width: 50px"
            ></button>
          </div>
        </div>
        <!-- 全部动态 -->
        <div style="float left; margin-top: 20px;clear: both;background-color: rgb(243, 237, 237);">
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  style="color: black;padding-left:0px "
                >
                  全部动态
                  <b class="caret"></b>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#">续费黄钻</a>
                  </li>
                  <li>
                    <a href="#">赠送好友</a>
                  </li>
                  <li>
                    <a href="#">黄钻官网</a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="1-空间.html" style="color: black">
                  <span class="glyphicon glyphicon-repeat"></span>
                </a>
              </li>
              <li>
                <a href="#" style="color: black">
                  <span class="glyphicon glyphicon-cog"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.condition {
  width: 100%;
  height: 1000px;
  margin-top: 75px;
}
a {
  color: whitesmoke;
}

.touxiang {
  width: 130px;
  float: left;
}

/* @media screen and (max-width: 992px) {
    .fangke{
  margin-right:-50px;
}
} */
</style>