<template>
  <div class="row">
    <div class="col-xs-offset-3 col-xs-9">
      <label class="input-label">修改密码</label>
      <br />
      <label class="input-label">旧密码：</label>
      <input type="password" class="oldpwd" />
      <br />
      <label class="input-label">新密码：</label>
      <input type="password" />
      <br />
    </div>
    <div class="col-xs-offset-3 col-xs-9">
      <label class="input-label">忘记密码</label>
      <br />
      <label class="input-label">手机号码：</label>
      <input type="text" class="oldpwd" />
      <br />
      <label class="input-label">验证码发送：</label>
      <input type="text" />
      <br />
      <label class="input-label">输入新密码：</label>
      <input type="password" class="oldpwd" />
      <br />
      <label class="input-label">确认密码：</label>
      <input type="password" />
      <br />
    </div>
    <div class="col-xs-offset-3 col-xs-5 col-md-4 col-lg-3 ablity">
      <span class="choices">允许陌生人赞我</span>
    </div>
    <div class="col-xs-3 ablity">
      <el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <div class="col-xs-offset-3 col-xs-5 col-md-4 col-lg-3 ablity">
      <span class="choices">个人签名同步到说说</span>
    </div>
    <div class="col-xs-3 ablity">
      <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <div class="col-xs-offset-3 col-xs-5 col-md-4 col-lg-3 ablity">
      <span class="choices">展示我的输入状态</span>
    </div>
    <div class="col-xs-3 ablity">
      <el-switch v-model="value3" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <div class="col-xs-offset-3 col-xs-5 col-md-4 col-lg-3 ablity">
      <span class="choices">展示连续登陆天数</span>
    </div>
    <div class="col-xs-3 ablity">
      <el-switch v-model="value4" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <div class="col-xs-offset-3 col-xs-5 col-md-4 col-lg-3 ablity">
      <span class="choices">展示在线状态</span>
    </div>
    <div class="col-xs-3 ablity">
      <el-switch v-model="value6" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: true,
      value3: true,
      value4: true,
      value5: true,
      value6: true
    };
  }
};
</script>
<style scoped>
.input-label {
  display: inline-block;
  text-align: left ;
  width: 100px;
  margin: 10px 0;
}
.choices {
  display: inline;
  margin-right: 30px;
}
.ablity {
  margin-top: 20px;
}
</style>