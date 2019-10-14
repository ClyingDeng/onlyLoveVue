<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-offset-3 col-xs-9">
        修改密码
        <br />旧密码：
        <input type="password" class="oldpwd" />
        <br />新密码：
        <input type="password" />
      </div>
      <div class="col-xs-offset-3 col-xs-5 col-md-3 ablity">
        <span class="choices">允许陌生人赞我</span>
      </div>
      <div class="col-xs-3 ablity">
        <el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </div>
      <div class="col-xs-offset-3 col-xs-5 col-md-3 ablity">
        <span class="choices">个人签名同步到说说</span>
      </div>
      <div class="col-xs-3 ablity">
        <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </div>
      <div class="col-xs-offset-3 col-xs-5 col-md-3 ablity">
        <span class="choices">展示我的输入状态</span>
      </div>
      <div class="col-xs-3 ablity">
        <el-switch v-model="value3" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </div>
      <div class="col-xs-offset-3 col-xs-5 col-md-3 ablity">
        <span class="choices">展示连续登陆天数</span>
      </div>
      <div class="col-xs-3 ablity">
        <el-switch v-model="value4" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </div>
      <div class="col-xs-offset-3 col-xs-5 col-md-3 ablity">
        <span class="choices">展示在线状态</span>
      </div>
      <div class="col-xs-3 ablity">
        <el-switch v-model="value6" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </div>
      
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: true ,
      value2: true ,
      value3: true ,
      value4: true ,
      value5: true ,
      value6: true 
    };
  }
};
</script>
<style scoped>
input[type="password"]{
  margin-left: 10%;
}
.oldpwd {
  margin: 20px 0;
}
.choices {
  display: inline;
  margin-right: 30px;
}
.ablity {
  margin-top: 20px;
}
</style>