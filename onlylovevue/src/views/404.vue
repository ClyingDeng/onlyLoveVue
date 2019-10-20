<template>
  <div id="four">
   
  </div>
</template>
<style  scoped>
#four {
  width: 100%;
  height: 100%;
  background-image: url(../assets/imgs/404.png);
  background-size: 100% 100%;
  position: absolute;
  background-repeat: no-repeat;
  /* background-color: aqua; */
  /* z-index: -1; */
}
.body {
  font-family: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif";
}

.main {
  max-width: 1000px;
  margin: 72px auto;
}

.title {
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(34, 36, 38, 0.15);
}

.top-message {
  position: fixed;
  top: 0;
  right: 0px;
  width: 100%;
  height: 60;
  z-index: 2;
  background: #fff;
  border-bottom: 1px solid rgba(34, 36, 38, 0.15);
  transform: translateY(-61px);
  transition: all 0.25s cubic-bezier(0.42, 0, 0, 1.8);
}

.top-message > div {
  max-width: 1000px;
  margin: 25 auto;
}

.top-message-display {
  transform: translateY(-11px);
  box-shadow: 0 1px 12px 0px #444444;
}

.qrcode {
  width: 150px;
  height: 150px;
}

@media screen and (max-width: 500px) {
  .main {
    max-width: 1000px;
    margin: 72px 15px;
    text-align: center;
  }

  .top-message > div {
    padding-left: 15px;
  }
}
</style>
<script>
export default {
  data() {
    return {
      visible: false
    };
  },
   created() {
    // const userId = this.userId;
    this.$axios
      .post("http://localhost:3000/pay/createInvoice")
      .then(res => {
        //拿到后台数据赋值给前端
        // this.conditions = res.data.data;
      })
      .catch(err => {
        console.log("错误信息：" + err);
      });
   }
};
</script>