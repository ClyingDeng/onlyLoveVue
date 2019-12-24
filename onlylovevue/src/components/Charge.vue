<template>
  <div class="row">
    <h1 class="col-xs-12 title">积分充值中心</h1>
    <div class="col-xs-12 tip">积分充值比例1:1，即1元等于1积分</div>
    <label class="aside">请输入您要充值的积分：</label>
    <input type="text" v-model="integral" />
    <button style="margin-left:25px;margin-top: 10px;" @click="open">充值积分</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      integral: "",
      buymember: []
    };
  },
  methods: {
    open() {
      this.$axios
        .post("http://localhost:3000/shop/charge", {
          integral: this.integral
        })
        .then(res => {
          console.log("查询结果：");
          console.log(res.data.data);
          // 拿到后台数据·赋值给前端
          this.buymember = res.data.data;
          // window.location.href='http://localhost:3000/?price='+e.target.name
          window.location.href =
            "http://localhost:3000/?integral=" + this.integral;
        })
        .catch(err => {
          console.log("错误信息：" + err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aside {
  margin-left: 16px;
}
.title {
  font-size: 30px;
  font-weight: 700;
}
.tip {
  color: #aaa;
}
</style>
