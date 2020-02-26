
<template>
  <div class="big">
    <div class="container" v-for="(key,index) in conditions" :key="index">
      <div class="imgBx col-md-6 col-xs-12 col-sm-12">
        <!-- <img src="../assets/imgs/rose1.png" alt /> -->
        <img :src="'http://localhost:3000/olove/' + key.prop_pic" alt />
      </div>
      <div class="details col-md-6 col-xs-12 col-sm-12">
        <div class="content">
          <h2>
            {{key.prop_Name}}
            <br />
            <span>爱情、爱与美</span>
          </h2>
          <p>玫瑰花语是指用玫瑰来表达爱情的通用语言，而且不同的颜色和数量代表的意义不同。其中红玫瑰代表着热烈的爱情；黄玫瑰表达纯真的友谊和美好的祝福；紫玫瑰传递着浪漫的情怀和高贵、忧郁的情感；白玫瑰预示着纯洁，出淤泥而不染。</p>
          <h3 class="col-xs-12">￥{{productprice}}</h3>
          <el-input-number class="col-xs-12" style="margin-top:10px" v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
          <h1 class="col-xs-12" style="margin-top:10px">￥{{productprice*num}}</h1>
          <a @click.prevent="goshop" style="float:left;margin-top:10px;font-size:16px;color:#34495e;cursor:pointer">返回商城</a>
          <button :name="num" @click="handleChange">立即购买</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style  scoped>
.big {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  /* background: #070c24; */
}
.container {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* width: 900px; */
  height: 600px;
  background: #fff;
  margin: 20px;
}
.container .imgBx {
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  /* width: 50%; */
  height: 100%;
  background: #fff;
}
.imgBx img {
  height: 80%;
}
.container .imgBx::before {
  content: "Rose";
  position: absolute;
  top: 200px;
  left: 100px;
  color: #000;
  opacity: 0.1;
  font-size: 8em;
  font-weight: 800;
}

.container .imgBx img {
  position: relative;
  width: 700px;
  left: -50px;
  transform: rotate(-30deg);
}
.container .details {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  padding: 40px;
}

.container .details h2 {
  margin: 0;
  padding: 0;
  font-size: 2.5em;
  line-height: 0.8em;
  color: #444;
}

.container .details h2 span {
  font-size: 0.4em;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #999;
}
.container .details p {
  max-width: 85%;
  margin-left: 10%;
  color: #333;
  font-size: 15px;
}
.container .details h3 {
  margin: 0;
  padding: 0;
  font-size: 2.5em;
  color: #a2a2a2;
  float: left;
}
.container .details h1 {
  margin: 0;
  padding: 0;
  font-size: 3.5em;
  float: left;
}

.container .details button {
  background: #fff;
  color: rgb(72, 81, 86);
  border: none;
  box-shadow: none;
  outline: none;
  padding: 15px 20px;
  margin-top: 5px;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 40px;
  float: right;
  cursor: pointer;
}

/* @media (max-width: 1080px) {
				.container {
					height: auto;
				} */
.container .imgBx {
  padding: 40px;
  box-sizing: border-box;
  /* width: 50% !important; */
  height: auto;
  text-align: center;
  overflow: hidden;
}

.container .imgBx img {
  left: initial;
  max-width: 100%;
  height: 90%;
  transform: rotate(0deg);
}
.details {
  /* width: 50% !important; */
  /* width: 50%; */
  height: auto;
  padding: 20px;
  background-color: #ccc;
}
.details p {
  /* width: 5px;
  height: 5px; */
  line-height: 35px;
  /* font-size: 5px; */
}
.container .details p {
  max-width: 100%;
  margin-left: 0;
}
</style>
<script>
export default {
  data() {
    return {
      conditions: [],
      num: 1,
      buy: [],
      productprice: 0
    };
  },
  created() {
    // console.log(this.$route.query.productid)
    this.propid = this.$route.query.productid;
    this.productprice = this.$route.query.productprice;
    // var propId
    // propId.append("propId",this.$route.query.productid)
    console.log({ propId: this.propid });
    this.$axios
      .post("http://localhost:3000/shop/productid", { propId: this.propid })
      .then(res => {
        console.log("查询结果：");
        console.log(res.data.data);

        // 拿到后台数据·赋值给前端
        this.conditions = res.data.data;
        //  console.log( res.data.data[prop_price])
        // console.log(this.conditions[0].prop_Id)
      })
      .catch(err => {
        console.log("错误信息：" + err);
      });
  },
  methods: {
    goshop() {
      this.$router.push("/shop");
    },
    handleChange() {
      this.propid = this.$route.query.productid;
      let nowDate = new Date();
      let date = {
        year: nowDate.getFullYear(),
        month: nowDate.getMonth() + 1,
        date: nowDate.getDate(),
        hours: nowDate.getHours(),
        minutes: nowDate.getMinutes(),
        seconds: nowDate.getSeconds()
      };
      let time =
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
      this.$axios
        .post("http://localhost:3000/shop/props", {
          propsId: this.propid,
          number: this.num,
          haveTime: time
        })
        .then(res => {
          console.log("查询结果：");
          console.log(res.data);
          if (res.data.msg != "你的余额不足！") {
            // 拿到后台数据·赋值给前端
            this.buy = res.data.data;
            console.log(res.data.data[res.data.data.length - 1].prop_Name);
            this.$alert(
              "您的积分还有：" + res.data.您的积分还有,
              "成功购买" +
                res.data.data[res.data.data.length - 1].number +
                "个" +
                res.data.data[res.data.data.length - 1].prop_Name,
              "成功",
              {
                confirmButtonText: "确定",
                callback: action => {
                  this.$message({
                    type: "info",
                    message: `action: ${action}`
                  });
                }
              }
            );
          } else {
            console.log(res.data);
            let integral = res.data.integral;
            this.$alert("您的积分还有：" + integral, "你的积分不足", "成功", {
              confirmButtonText: "确定",
              callback: action => {
                this.$message({
                  type: "info",
                  message: `action: ${action}`
                });
              }
            });
          }
        })
        .catch(err => {
          console.log("错误信息：" + err);
        });
    }
  }
};
</script>