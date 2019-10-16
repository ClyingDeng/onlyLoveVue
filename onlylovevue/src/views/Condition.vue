   <template>
  <div class="condition" style="margin-top: 110px">
    <div class="container col-md-12">
      <div class="row">
        <div class="youyisi">
          <div class="touxiang">
            <img src="../assets/imgs/xd.jpg" class="img-thumbnail" />
            
          </div>
          <div class="youyisi2" style="float: left;">
            <div>
              <h3 style="color:blueviolet" >&nbsp;退路</h3>
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
          <img src="../assets/imgs/eye.png" width="50px" height="50px" />
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
    </div>

    <!-- <div class="container2">
    <div class="row2">-->
    <!-- 左边竖着 -->
    <div class="zuobian" style="width: 180px; margin-left: 47px;font-size: 14px;float: left">
      <div>
        <a href="./Index.vue" class="list-group-item">
          <span class="glyphicon glyphicon-user" style="text-shadow: rgb(216, 206, 206) 3px -1px;"></span>
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
    
    <div class="centerblock " style="float: left;margin-left: 45px;">
      <div class="shuoshenme" style="padding: 0px;float: left;width: 550px;">
        <form role="form">
          <div class="form-group has-feedback">
            <textarea class="form-control" rows="3" placeholder="说点什么吧"></textarea>
            <button
              class="btn btn-default glyphicon glyphicon-camera form-control-feedback"
              style="height: 74px;width: 50px;"
            ></button>
          </div>
          <!-- <div style="float: left">
          <button
            class="btn btn-default glyphicon glyphicon-paperclip"
            style="height: 74px;width: 50px"
          ></button>
          </div>-->
        </form>
      </div>

      <!-- 全部动态 -->
      <div
        class="dongtai"
        style="float left;margin-top:100px; background-color: rgb(243, 237, 237);"
      >
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
              <a href="#" style="color: black">
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
      <!-- 第一个说说 -->

      <div style="margin-top: 20px;height:500px;background-color: rgb(243, 237, 237)">
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
      <div style="margin-top: 20px;height: 500px;background-color: rgb(243, 237, 237)">
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
          <a href>
            <p>
              <span>邓颖</span>
            </p>
            <p>
              <span>宋佳镱</span>
            </p>
            <p>
              <span>李佳欣</span>
            </p>
            <p>
              <span>石吉红</span>
            </p>
            <p>
              <span>邓颖</span>
            </p>
            <p>
              <span>宋佳镱</span>
            </p>
            <p>
              <span>李佳欣</span>
            </p>
            <p>
              <span>石吉红</span>
            </p>
          </a>
        </div>
        <div
          class="wokan"
          style="background-color: rgb(243, 237, 237);height:400px;width:300px;margin-top: 20px"
        >
          <h4 style="text-align:center;color:blueviolet">我看过谁</h4>
          <a href>
            <p>
              <span>邓颖</span>
            </p>
            <p>
              <span>宋佳镱</span>
            </p>
            <p>
              <span>李佳欣</span>
            </p>
            <p>
              <span>石吉红</span>
            </p>
            <p>
              <span>邓颖</span>
            </p>
            <p>
              <span>宋佳镱</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- </div>
  </div>-->
</template>
<style>
.condition {
  width: 100%;
  /* height: 1000px; */
  margin-top: 75px;
}
/* * a {
  text-decoration: none;
} */

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
#shuodao a {
  color: blueviolet;
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
.kan p {
  width: 97px;
  height: 97px;
  margin-bottom: 25px;
  margin-left: 2px;
  float: left;
}
.kan span {
  display: block;
  margin-top: 100px;
  margin-left: 30px;
  color: blueviolet;
}
.kanwo p:nth-child(1) {
  background-image: url(../assets/imgs/fang1.jpg);
  background-size: 150%;
}
.kanwo p:nth-child(2) {
  background-image: url(../assets/imgs/fang2.jpg);
  background-size: 150%;
}
.kanwo p:nth-child(3) {
  background-image: url(../assets/imgs/fang3.jpg);
  background-size: 150%;
}
.kanwo p:nth-child(4) {
  background-image: url(../assets/imgs/fang4.jpg);
  background-size: 150%;
}
.kanwo p:nth-child(5) {
  background-image: url(../assets/imgs/fang5.jpg);
  background-size: 150%;
}
.kanwo p:nth-child(6) {
  background-image: url(../assets/imgs/fang6.jpg);
  background-size: 150%;
}
.kanwo p:nth-child(7) {
  background-image: url(../assets/imgs/fang7.jpg);
  background-size: 150%;
}
.kanwo p:nth-child(8) {
  background-image: url(../assets/imgs/fang8.jpg);
  background-size: 150%;
}
.wokan p:nth-child(1) {
  background-image: url(../assets/imgs/fang4.jpg);
  background-size: 150%;
}
.wokan p:nth-child(2) {
  background-image: url(../assets/imgs/fang5.jpg);
  background-size: 150%;
}
.wokan p:nth-child(3) {
  background-image: url(../assets/imgs/fang6.jpg);
  background-size: 150%;
}
.wokan p:nth-child(4) {
  background-image: url(../assets/imgs/fang1.jpg);
  background-size: 150%;
}
.wokan p:nth-child(5) {
  background-image: url(../assets/imgs/fang2.jpg);
  background-size: 150%;
}
.wokan p:nth-child(6) {
  background-image: url(../assets/imgs/fang3.jpg);
  background-size: 150%;
}
@media screen and (max-width: 992px) {
  .youyisi2 {
    width: 320px;
  }
  .dongtai {
    display: block;
  }
  .centerblock {
    display: block;
    position: relative;
    left:50px
  }
  .centerblock .shuoshenme {
    width: 500px;
  }
}
@media screen and (max-width: 716px) {
  .youyisi2 {
    width: 100px;
  }
}
@media screen and (max-width: 1200px) {
  .zuobian,
  .youbian {
    display: none;
  }
}
@media screen and (max-width: 1200px) and (min-width: 992px) {
  .centerblock {
    display: block;
    padding-left: 170px;
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
  .centerblock{
    width: 465px;
    margin-left: 0;
    margin: auto
  }
   .shuoshenme form{
        width: 465px;
  }
}
</style>