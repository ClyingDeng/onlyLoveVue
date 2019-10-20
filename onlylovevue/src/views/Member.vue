
<template>
  <div>

    <div class="row">
      <div>
        <div class="middle col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <ul>
            <li class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
              <em>{{conditions.length&&conditions[0].member_act_date}}</em>
              <p>活跃天数</p>
            </li>
            <li class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
              <em>{{conditions.length&&conditions[0].member_grade}}</em>
              <p>会员等级</p>
            </li>
            <li id="much" class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <img class="headphoto" src="../assets/imgs/4.jpg" alt />
              <p>
                <span>{{conditions.length&&conditions[0].nickName}}</span>
                <img class="member" src="../assets/imgs/qqhuiyuan.png" alt />
              </p>
              <p>年超级会员2020-10-07到期</p>
              <p>
                <span class="member-button">续费年费会员</span>
              </p>
            </li>
            <li class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
              <em>{{conditions.length&&conditions[0].member_user_Id}}</em>
              <p>会员ID</p>
            </li>
            <li class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
              <em>{{conditions.length&&conditions[0].integral}}</em>
              <p>积分</p>
            </li>
          </ul>
        </div>

      </div>
      <div class="member-type">
        <div class="open-member">
          <p class="title">开通会员 做特权王者！</p>
          <div class="detail-type">
            <div class="member-card">
              <p class="memberphoto">
                <img src="../assets/imgs/huiyuan-.png" alt />唯爱会员
              </p>

              <!-- <p >全球共1亿人正通过唯爱会员来寻找自己的生活伴侣</p><br> -->
              <p class="save-member" style="margin-top:-20px">
                <!-- <span @click="buymember()">续费会员</span> -->
                <el-button type="text" @click="month" style="color:coral;">续费月度会员（10积分）</el-button>
                <br />
                <el-button type="text" @click="jidu" style="color:coral;">续费季度会员（30积分）</el-button>
                <br />
                <el-button type="text" @click="year" style="color:coral;">续费年度会员（80积分）</el-button>
              </p>
            </div>
            <div class="process">
              <div style="margin-bottom:20px;">
                <!-- style="margin-top:10px; -->
                <span>搜索条件:</span>
                <el-progress
                  style="margin-top:10px;"
                  :text-inside="true"
                  :stroke-width="24"
                  :percentage="70"
                  status="success"
                ></el-progress>
              </div>
              <div>
                <span>优惠折扣:</span>
                <el-progress
                  style="margin-top:10px;"
                  :text-inside="true"
                  :stroke-width="22"
                  :percentage="88"
                  status="warning"
                ></el-progress>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div v-else>对不起 您还不是会员</div> -->
    </div>
    <!-- <div><FootNav></FootNav></div> -->
  </div>
</template>
<style  scoped>
.middle {
  margin-top: 100px;
  height: 300px;
  /* background-color: #ccc; */
}
em {
  margin-bottom: 10px;
}
.middle li em,
p {
  text-align: center;
}
.memberphoto {
  font-size: 25px;
}
.headphoto {
  margin: 0 auto;
  display: block;
  text-align: center;
}
li {
  list-style: none;
  float: left;
  padding: 0;

  margin-top: 150px;
}
#much {
  margin-top: 50px;
}
em {
  display: block;
  font-style: normal;
  font-size: 40px;
}

.headphoto {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  /* text-justify: auto; */
  margin-bottom: 10px;
}
.member {
  width: 20px;
  height: 20px;
}

.member-button {

  border-radius: 10%;
  background-color: coral;
  font-size: 20px;
  text-align: center;
  color: #fff;
}
.middle p {
  line-height: 20px;
  height: 20px;
}

.open-member {
  width: 90%;
  height: 100%;
  /* opacity: 50%; */
  margin: 0 auto;
  /* margin-top: 10px; */
}
.title {
  font-size: 25px;
  margin: 30px;
}
.detail-type {
  width: 80%;
  height: 80%;
  margin: 0 auto;
  margin-bottom: 80px;
  border: 1px solid #ccc;
  background-color: rgba(248, 240, 233, 0.8);
}
.member-card {
  width: 40%;
  height: 180px;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 2%;
  border: 1px solid #ccc;
}
.memberphoto {
  text-align: center;
  margin-top: 10px;
}
.memberphoto img {
  width: 40px;
  height: 40px;
}
.detail-type div p {
  text-align: center;
}
.save-member span {
  font-size: 20px;
  border-radius: 10%;
  background-color: coral;
  color: #fff;
}
.process {
  width: 80%;
  height: 100px;
  margin-top: 80px;
  margin-bottom: 80px;
}

.process span {
  font-size: 20px;
  /* line-height: 20px; */
}
@media screen and (max-width: 768px) {
  .middle {
    height: 900px;
  }
  .member-card {
    width: 80%;
  }
}

@media screen and (max-width: 992px) {
  .member-card {
    width: 80%;
  }
}
</style>
<script>
export default {
  data() {
    return {
      conditions: []
      // num:365,
    };
  },
  created() {
    this.$axios
      .get("http://localhost:3000/shop/memeber")
      .then(res => {
        console.log("查询结果：");
        console.log(res.data.data);
        this.conditions = res.data.data;
      })
      .catch(err => {
        console.log("错误信息: " + err);
      });
  },
  methods: {
    month() {
      this.$axios
        .post("http://localhost:3000/shop/buymember", { day: 30 })
        .then(res => {
           this.$alert("您的积分还有："+res.data.您的积分还有, "续费月度会员成功","成功", {
            confirmButtonText: "确定",
            callback: action => {
              this.$message({
                type: "info",
                message: `action: ${action}`
              });
            }
          });
        })
        .catch(err => {
          console.log("错误信息：" + err);
        });
    },
    jidu() {
      this.$axios
        .post("http://localhost:3000/shop/buymember", { day: 120 })
        .then(res => {
           this.$alert("您的积分还有："+res.data.您的积分还有, "续费季度会员成功","成功", {
            confirmButtonText: "确定",
            callback: action => {
              this.$message({
                type: "info",
                message: `action: ${action}`
              });
            }
          });
        })
        .catch(err => {
          console.log("错误信息：" + err);
        });
    },
    year() {
      this.$axios
        .post("http://localhost:3000/shop/buymember", { day: 365 })
        .then(res => {
          this.$alert("您的积分还有："+res.data.您的积分还有, "续费年度会员成功","成功", {
            confirmButtonText: "确定",
            callback: action => {
              this.$message({
                type: "info",
                message: `action: ${action}`
              });
            }
          });
        })
        .catch(err => {
          console.log("错误信息：" + err);
        });
    }
  }
};
</script>

