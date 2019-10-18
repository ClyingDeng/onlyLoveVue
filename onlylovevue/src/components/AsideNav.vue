<template>
  <div class="aside-right container" style="margin-bottom: 20px;">
    <div class="row">
      <div class="focusMe">
        <h4>
          <i class="fa fa-heart" style="color:orangered" aria-hidden="true"></i>关注我
          <small>
            focus
            me
          </small>
        </h4>
        <section class="sect">
          <a
            @click.prevent="goMessage"
            class="iconbtn fa fa-commenting"
            style="background-color: #3bb9d8;"
          ></a>
          <a
            @click.prevent="goFriend"
            class="iconbtn fa fa-users"
            style="background-color: #ec6d34;"
          ></a>
          <a
            @click.prevent="goCondition"
            class="iconbtn fa fa-share-alt"
            style="background-color: #a0ed36;"
          ></a>
          <a
            @click.prevent="goContact"
            class="iconbtn fa fa-envelope"
            style="background-color: #39d39f;"
          ></a>
          <br />
        </section>
        <section class="sect">
          <span @click.prevent="goMessage">会员中心</span>
          <span @click.prevent="goFriend">好友列表</span>
          <span @click.prevent="goCondition">我的动态</span>
          <span @click.prevent="goContact">联系唯爱</span>
        </section>
      </div>
      <div class="col-md-12 col-xs-12" style="background-color: rgba(255,255,255,0.5);">
        <div class="index-login">
          <div class="logo">
            <div class="card">
              <div class="front">
                <img src="../assets/imgs/bg6.jpg" alt />
              </div>
              <div class="back">
                <div class="back-content middle">
                  <h3>唯爱</h3>
                  <span>
                    <i class="fa fa-heart" aria-hidden="true" style="color:orangered;"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="login">
            <a @click.prevent="goLogin">登录</a>
            <a @click.prevent="goRegister">注册</a>
          </div>
          <p>你 若 盛 开，蝴 蝶 自 来</p>
        </div>
        <div class="index-data">
          <ul>
            <li>
              <strong>521</strong>
              <br />
              <span>活跃天数</span>
            </li>
            <li>
              <strong>13</strong>
              <br />
              <span>近日访客</span>
            </li>
            <li>
              <strong>215</strong>
              <br />
              <span>文章数量</span>
            </li>
          </ul>
        </div>
        <div class="search">
          <input type="text" placeholder="输入关键字搜索" />
          <i class="fa fa-search" style="color:orangered;" aria-hidden="true"></i>
        </div>
        <div class="interact">
          <h4>
            <i class="fa fa-comment" style="color:orangered" aria-hidden="true"></i>我的动态
            <small>dynamic</small>
          </h4>
          <div class="media">
            <div class="media-left">
              <a @click.prevent="goCondition">
                <img
                  class="media-object"
                  src="../assets/imgs/bg1.jpg"
                  alt="..."
                  style="width: 60px;height:60px"
                />
              </a>
            </div>
            <div class="media-body">
              <div class="col-md-5 col-xs-5">
                <i class="fa fa-user" aria-hidden="true" style="color:orangered"></i>往昔
              </div>
              <div class="col-md-offset-0 col-md-7 col-xs-offset-1 col-xs-6 time">201</div>
              <a @click.prevent="goCondition" class="msg">
                彼爱2019-04-21说：
                在爱情中你要搞清楚，是你喜欢人家，不是人家喜欢你。既然主动了，就算受了天大的委屈，也不能怪任何人，只怪你有本事喜欢人家，没本事让人家喜欢你。
              </a>
            </div>
          </div>
          <div class="media" v-for="(key,index) in perconditions.slice(0, 3)" :key="index">
            <div class="media-left">
              <a @click.prevent="goCondition">
                <img
                  class="media-object"
                  :src="'http://localhost:3000/hspicture/'+ key.con_pic_1"
                  alt="..."
                  style="width: 60px;height:60px"
                />
              </a>
            </div>
            <div class="media-body">
              <div class="col-md-5 col-xs-5">
                <i class="fa fa-user" aria-hidden="true" style="color:orangered"></i>
                {{key.nickName}}
              </div>
              <div class="col-md-offset-0 col-md-7 col-xs-offset-1 col-xs-6 time">{{key.hot}}</div>
              <a @click.prevent="goCondition" class="msg">{{key.con_words}}</a>
            </div>
          </div>
        </div>
        <div class="hotSearch">
          <h4>
            <i class="fa fa-fire" style="color:orangered" aria-hidden="true"></i>热搜
            <small>
              hot
              search
            </small>
          </h4>
          <ul>
            <li>
              <div class="hs-container" v-for="(key,index) in conditions.slice(0, 3)" :key="index">
                <div @click.prevent="goHotSearch">
                  <img class="circle" :src="'http://localhost:3000/hspicture/'+ key.con_pic_1" />
                </div>
                <h5>{{key.con_words.substr(0, [6])}}...</h5>
                <p @click.prevent="goHotSearch">"{{key.con_words}}"</p>
                <a href>
                  <i class="fa fa-calculator" aria-hidden="true" style="color:orangered"></i>
                  {{key.con_time.substr(0, [10])}}
                </a>
                <a href>
                  <i class="fa fa-thumbs-up" aria-hidden="true" style="color:orangered"></i>
                  {{key.see}}
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div class="pop-Rank">
          <div class="changeOver">
            <a href="javascript:;" class="love sanjiao">
              <span>
                <i class="fa fa-heartbeat" aria-hidden="true" style="color:orangered"></i>
                狂热榜
              </span>
            </a>
            <a href="javascript:;" class="pop sanjiao">
              <span>
                <i class="fa fa-fire" aria-hidden="true" style="color:orangered"></i>
                魅力榜
              </span>
            </a>
          </div>
          <div class="love-rank loveRank">
            <ul>
              <li v-for="(key,index) in carzyList.slice(0, 5)" :key="index">
                <span>{{key.rowno}}</span>
                <a @click.prevent="goList">{{key.昵称}}</a>
                <b>({{key.sweet_score}})</b>
              </li>
            </ul>
          </div>
          <div class="love-rank popRank">
            <ul>
              <li v-for="(key,index) in charmList.slice(0, 5)" :key="index">
                <span>{{key.rowno}}</span>
                <a @click.prevent="goList">{{key.昵称}}</a>
                <b>({{key.sweet_score}})</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <a href="#" class="gotop" style="z-index: 20">
      <i class="fa fa-chevron-up" style="color:#fff" aria-hidden="true"></i>
    </a>
  </div>
</template>
<style scoped>
/* div{
  background-color: #f00;
} */
</style>
<script>
export default {
  data() {
    return {
      // userId: "20015",
      user_Id: "",
      perconditions: [],
      conditions: [],
      carzyList: [],
      charmList: []
    };
  },
  /* beforeCreate() {
    $(document).ready(function() {
      if (location.href.indexOf("#reloaded") == -1) {
        location.href = location.href + "#reloaded";
        location.reload();
      }
    });
  }, */
  //组件创建完成后执行的操作
  created() {
    // const userId = this.userId;
    this.$axios
      .get("http://localhost:3000/allCondition")
      .then(res => {
        //拿到后台数据赋值给前端
        this.conditions = res.data.data;
      })
      .catch(err => {
        console.log("错误信息：" + err);
      });
    this.$axios
      .get("http://localhost:3000/list/asidecrazy")
      .then(res => {
        //拿到后台数据赋值给前端
        this.carzyList = res.data.data;
      })
      .catch(err => {
        console.log("错误信息：" + err);
      });
    this.$axios
      .get("http://localhost:3000/list/asidecharm")
      .then(res => {
        //拿到后台数据赋值给前端
        this.charmList = res.data.data;
      })
      .catch(err => {
        console.log("错误信息：" + err);
      });
    this.$axios
      .get("http://localhost:3000/hotSearch/hotSearch")
      .then(res => {
        //拿到后台数据赋值给前端
        this.perconditions = res.data.data;
        console.log(this.perconditions);
      })
      .catch(err => {
        console.log("错误信息：" + err);
      });
  },
  methods: {
    /* goMessage() {
      this.$router.push("/Message");
    }, */
    goFriend() {
      this.$router.push("/Friend");
    },
    goCondition() {
      this.$router.push("/Condition");
    },
    goHotSearch() {
      this.$router.push("/HotSearch");
    },
    goContact() {
      this.$router.push("/Contact");
    },
    goLogin() {
      this.$router.push("/Login");
    },
    goRegister() {
      this.$router.push("/Register");
    },
    goList() {
      this.$router.push("/List");
    },
    goMessage(){
      this.$router.push("/Member");
    }
  }
};
</script>