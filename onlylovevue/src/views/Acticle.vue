<template>
  <div class="row" style="margin-top:100px">
    <div class="col-md-12 col-xs-12" style="margin-top: 10px">
      <div>
        <h4
          class="title01"
          style="color: #0181da;font-weight: 700;text-align: center;margin: 20px 0 20px;padding: 15px;"
        >每一个IP地址都是一颗孤独的灵魂</h4>
      </div>
      <div
        class="col-md-12 col-xs-12"
        style="background-color: rgba(255,255,255,0.7);padding-top: 10px;"
      >
        <ul class="riqi col-lg-12" >
          <li class="col-md-offset-4 col-lg-6 col-xs-offset-2 col-xs-10" style="padding:0">
            <a title="唯爱 =发表于 2019-07-17">
              <i class="glyphicon glyphicon-calendar"></i>
              <time>2019-07-17</time>
            </a>
          </li>
          <li>
            <a title="本文作者：唯爱">
              <i class="glyphicon glyphicon-user"></i>唯爱
            </a>
          </li>
          <li>
            <a title="评论量">
              <i class="glyphicon glyphicon-comment"></i>0条
            </a>
          </li>
          <li>
            <a title="浏览量">
              <i class="glyphicon glyphicon-eye-open"></i>(167)
            </a>
          </li>
        </ul>
      </div>
      <div
        class="col-md-12 col-xs-12"
        style="background-color: rgba(255,255,255,0.7);margin-top: 20px;"
      >
        
        <div class="article-fx">
          <div class="thumbs_content">
            <a class="reward_button" href="javascript;" title onclick="dashangToggle()">
              <i class="glyphicon glyphicon-usd"></i>打赏
            </a>
            <a class="thumbs_btton" data-id="55" href="#" title>
              <i class="glyphicon glyphicon-thumbs-up zan_logo"></i>
              <span class="zan">
                点赞（
                <span class="clear">4</span>）
              </span>
            </a>
            <a class="fx-btn shareka_button" href>
              <i class="glyphicon glyphicon-option-horizontal"></i>分享&nbsp;&nbsp;&nbsp;
            </a>
            <span class="clear"></span>
          </div>
        </div>
        <hr class="hengxian" />
        <div class="article_tag">
          <ul>
            <li>
              <a href="#">情感</a>&nbsp;
            </li>
            <li>
              <a href="#">故事</a>&nbsp;
            </li>
          </ul>
        </div>
      </div>
      <div
        class="col-md-12 col-xs-12"
        style="background-color: rgba(255,255,255,0.7);margin-top: 40px;"
      >
        <div class="shangyip">
          <span>
            <i class="glyphicon glyphicon-arrow-up" style="  color: rgb(255, 102, 0);"></i>上一篇：
            <a href="#" title>爱情弹簧定律</a>
          </span>
          <span>
            <i class="glyphicon glyphicon-arrow-down" style="  color: rgb(255, 102, 0);"></i>下一篇：
            <a href="#" title>今生的爱，前世的债</a>
          </span>
        </div>
      </div>
      <div
        class="col-md-12 col-xs-12 maybe"
        style="background-color: rgba(255,255,255,0.7);margin: 0;margin-top: 25px;"
      >
        <h4 class="index-title" style="background: 0px">
          <i class="glyphicon glyphicon-heart" style="  color: rgb(255, 102, 0);"></i>您还可能喜欢
        </h4>
      </div>
      <div
        class="col-md-12 col-xs-12 maybe-love"
        style="background-color: rgba(255,255,255,0);margin-top: 25px;padding: 0;"
      >
        <ul>
          <li>
            <a href title>
              <!-- <img src="../imgs/ren.jpg" alt="只能做朋友，不能做恋人" /> -->
              <img src="" alt="只能做朋友，不能做恋人" />
              <span>只能做朋友，不能做恋人</span>
            </a>
          </li>
          <li>
            <a href title>
              <img src="" alt="情景剧：我爱你，在天堂等我！" />
              <!-- <img src="../imgs/riluo.jpg" alt="情景剧：我爱你，在天堂等我！" /> -->
              <span>情景剧：我爱你，在天堂等我！</span>
            </a>
          </li>
          <li>
            <a href title>
              <!-- <img src="../imgs/zi.jpg" alt="遇见" /> -->
              <img src="" alt="遇见" />
              <span>遇见</span>
            </a>
          </li>
          <li>
            <a href title>
              <!-- <img src="../imgs/nvren.jpg" alt="不变的约定" /> -->
              <img src="" alt="不变的约定" />
              <span>不变的约定</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="col-md-12 col-xs-12 maybe-01" style="margin-top: 20px;padding: 0px;margin: 0;">
        <h4 class="index-title">
          <i
            class="glyphicon glyphicon-envelope"
            style="color: rgb(255, 102, 0);margin: 0px 8px 0px 0px;"
          ></i>当前共有
          <span>
            <font color="red">0</font>
          </span>条评论
        </h4>
      </div>
      <div class="col-md-12 col-xs-12 maybe-01" style="margin-top: 20px;padding: 0;">
        <ul class="commentlist" style="padding: 0">
          <p
            style="line-height: 35px;text-align:center;border:1px solid #0181da;color:#0181DA;padding: 0;"
          >暂无评论，快来抢沙发吧！</p>
        </ul>
      </div>
      <div
        class="col-md-12 col-xs-12"
        style="background-color: rgba(255,255,255,0.7);margin-top: 10px;padding: 2px;"
      >
        <h3
          class="form-btn blue-text"
          style="color: #0181da;font-size: 18px;font-weight: normal;margin-top: 10px;padding: 1px;"
        >
          <a href="#" title>
            <i
              class="glyphicon glyphicon-pencil"
              style="color: rgb(255, 102, 0);margin: 5px;padding: 2px;"
            ></i>我要留言/展开表单
          </a>
        </h3>
      </div>
      <div
        class="col-md-12 col-xs-12"
        style="background-color: rgba(255,255,255,0);margin-top: 10px;padding: 2px;"
      >
        <form id="commentForm" name="commentForm" class="form-box" url>
          <ul
            class="hdmenu"
            style="width: 100%;text-align: left;padding: 0;margin:0px;list-style: none;margin-block-start: 1em;"
          >
            <li style="display: inline;font-size: 12px;color: #555;margin: 0 3px;">
              <i class="glyphicon glyphicon-ok-circle" style="color: rgb(255, 102, 0);margin: 0;"></i>
              审核开启
            </li>
            <li style="display: inline;font-size: 12px;color: #555;margin: 0 3px;">
              <input name="jizhu" type="checkbox" value="1" checked class="comment-fuxuan" />
              记住信息
            </li>
          </ul>
          <div class="input-prepend">
            <i class="glyphicon glyphicon-user"></i>
            <input
              name="u_name"
              type="text"
              id="u_name"
              value
              size="16"
              data-type="*"
              sucmsg
              placeholder="您的称呼（必须）"
            />
            <input name="mycity" type="text" id="mycity" value style="display: none " />
            <span class="Validform_checktip"></span>
          </div>
          <div class="face-box">
            <div id="face-btn">
              <a href="#" title>
                <img src="../assets/imgs/0.gif" width="25" alt="onlyLove" />
              </a>
            </div>
            <textarea
              name="txtContent"
              id="txtContent"
              class="input"
              data-type="*"
              sucmsg
              placeholder="说点什么吧..."
            ></textarea>
          </div>
          <div
            class="col-md-12 col-xs-12 input-prepend yzm"
            style="background-color: rgba(255,255,255,0);margin-top: 10px;padding: 2px;"
          >
            <i class="glyphicon glyphicon-question-sign"></i>
            <input
              id="txtcode"
              name="txtcode"
              type="text"
              data-type="s4-4"
              errormsg="请输写4位验证码"
              sucmsg
              onkeydown="if(event.ctrlkey&&event.keycode==13){document.getElementById('btnSubmit').click();return false};"
            />
            <span title="点击刷新验证码？" style="float:left;" class="img_code">
              <a href="#" onclick="Togglecode(this,'/tools/verify_code.ashx');return false;" title>
                <img
                  src=""
                  width="80"
                  height="30"
                  style="vertical-align:middle;"
                  alt
                />
               <!--  <img
                  src="../imgs/条形码.jpg"
                  width="80"
                  height="30"
                  style="vertical-align:middle;"
                  alt
                /> -->
              </a>
            </span>
            <span class="Validform_checktip"></span>
          </div>
        </form>
      </div>
      <div
        class="col-md-12 col-xs-12 input-prepend yzm"
        style="background-color: rgba(255,255,255,0);margin-top: 10px;padding: 0px;"
      >
        <div class="feed-sub" style="padding:10px 0px" >
          <input id="btnSubmit" name="submit" type="submit" class="btn btn-inverse" value="提交留言" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.riqi li {
  width: 50px;
  list-style: none;
  float: left;
  font-size: 12px;
}

.riqi li:nth-child(1) {
  width: 120px;
}

.riqi li i {
  color: rgb(255, 145, 0);
}

.riqi li a {
  color: #000;
}

.riqi ul {
  display: flex;
  justify-content: center;
}

.artice-body img {
  margin: 0px;
}

.edit-time {
  position: absolute;
  bottom: 0;
  right: 3%;
  color: #999;
  font-size: 12px;
  width: 90px;
  height: 24px;
}

.edit-time a {
  color: #999;
}

.edit-time i {
  color: #999;
}

/* .article-fx {
            width: 620px;
            height: 20px;
        } */

.article-fx a {
  font-size: 14px;
  background: #1dd06d;
  display: inline-block;
  text-indent: 6px;
}

.reward_button {
  float: left;
  width: 110px !important;
  margin: 5px 1px;
  height: 35px !important;
  line-height: 35px !important;
  background-color: #cd4450 !important;
  color: #fbfbfb;
  text-align: center;
  text-decoration: none;
  border-left: 1px solid #fbfbfb;
  transition: all 0.3s;
  /* -webkit-border-radius: 0 0 0 18px; */
}

.article-fx a {
  font-size: 14px;
  background: #1dd06d;
}

.thumbs_btton {
  float: left;
  width: 110px;
  margin: 5px 1px;
  height: 35px !important;
  line-height: 35px !important;
  background-color: #444 !important;
  color: #fbfbfb !important;
  text-align: center;
  text-decoration: none;
  border-left: 1px solid #fbfbfb;
  transition: all 0.3s;
  /* -webkit-border-radius: 0 0 0 0px; */
}

.shareka_button {
  float: left;
  width: 110px !important;
  margin: 5px 1px;
  height: 35px !important;
  line-height: 35px !important;
  background-color: #1dd06d !important;
  color: #fbfbfb !important;
  text-align: center;
  text-decoration: none;
  border-left: 1px solid #fbfbfb;
  transition: all 0.3s;
  /* -webkit-border-radius: 0 18px 0 0; */
}

.thumbs_content {
  margin: 0 auto;
  width: 338px;
}

.article_tag {
  width: 100%;
  margin: auto;
  padding: 10px 0;
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0);
  overflow: hidden;
}

.article_tag ul {
  margin: auto 0;
  clear: both;
  text-align: center;
  float: none;
  padding: 0;
  list-style: none;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}

.article_tag ul li:nth-of-type(1) {
  background: #4595e7;
}

.article_tag ul li {
  display: inline;
  font-size: 12px;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  /* -webkit-border-radius: 50px; */
  text-align: -webkit-match-parent;
}

.article_tag ul li:nth-of-type(2) {
  background: #e7458d;
}

.article_tag ul li {
  display: inline;
  font-size: 12px;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  /* -webkit-border-radius: 50px; */
  text-align: -webkit-match-parent;
}

.article_tag ul li a {
  color: #fff;
}

.shangyip {
  background: rgba(255, 255, 255, 0);
  text-align: left;
  margin: 30px 0;
  padding: 10px 0;
  width: 100%;
  overflow: hidden;
  display: block;
  height: 78px;
}

.hengxian {
  /* width: 580px; */
  margin: 20px auto;
  border: 0;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid rgba(255, 255, 255, 0.8);
  /* height: 2px; */
}

.shangyip span:first-child {
  margin-bottom: 10px;
}

.shangyip span {
  display: inline-block;
  /* float: left; */
  width: 100%;
  text-indent: 5px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

h4 {
  padding: 10px 0;
  margin: 0;
  text-indent: 5px;
  background: rgba(255, 255, 255, 0);
  margin-bottom: 15px;
}

.index-title {
  font-size: 14px;
  font-weight: normal;
  color: #0181da;
}

.maybe-love ul {
  padding: 0;
  margin: 0;
  list-style: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  /* padding-inline-start: 40px; */
  display: block;
  text-align: center;
  margin-left: -1.5%;
  margin-right: -1.5%;
  /* overflow: hidden; */
}

.maybe-love ul li {
  float: left;
  text-align: center;
  width: 22%;
  margin: 1.5%;
}

.maybe-love ul li {
  float: left;
  text-align: center;
  width: 22%;
  margin: 1.5%;
  display: list-item;
}

.maybe-love ul li img {
  width: 100%;
  height: 100px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  /* -webkit-border-radius: 5px; */
  padding: 5px;
}

.maybe-love ul li a {
  color: inherit;
  text-decoration: none;
}

.maybe-love ul li span {
  font-size: 13px;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #00a2ff;
  width: 100%;
}

.hdmenu li input[type="checkbox"] {
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  box-sizing: border-box;
  position: relative;
  top: 2px;
}

.input-prepend {
  width: 100%;
  height: 35px;
  margin: 15px 0;
  font-size: 12px;
}

.input-prepend i {
  color: rgb(255, 102, 0);
  width: 35px;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-right: none;
  line-height: 35px;
  text-align: center;
  margin: 0;
  float: left;
}

.input-prepend input {
  height: 100%;
  margin: 0;
  padding: 0;
  float: left;
  box-sizing: border-box;
  width: 30%;
  line-height: 35px;
}

input,
textarea {
  border: #ddd 1px solid;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.05);
  background: rgba(255, 255, 255, 0.5);
  font-family: "Microsoft YaHei";
  text-indent: 10px;
  /* -webkit-transition: all 0.5s; */
  outline: none !important;
  /* -webkit-writing-mode: horizontal-tb !important; */
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-appearance: textfield;
  -webkit-rtl-ordering: logical;
  cursor: text;
  font: 400 13.3333px Arial;
}

.face-box textarea {
  width: 70%;
  height: 150px;
}

.input-prepend {
  width: 100%;
  height: 35px;
  margin: 15px 0;
  font-size: 12px;
}

.yzm input {
  width: 70px;
}

.feed-sub {
  width: 200px;
  height: 40、px;
  /* padding: 10px 0; */
}

.feed-sub input {
  width: 100%;
  height: 100%;
  background: #fff;
  cursor: pointer;
  color: #ff6700;
}
</style>