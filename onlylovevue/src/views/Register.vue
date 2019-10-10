<template>
  <div class="register">
    <h1>注册</h1>
    <el-form
      :model="registerUser"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="registerForm"
    >
      <!-- <el-radio-group v-model="radio">
    <el-radio :label="3">手机号注册</el-radio>
    <el-radio :label="6">邮箱注册</el-radio>
      </el-radio-group>-->
      <template1>
        <el-radio v-model="radio" label="1">手机号注册</el-radio>
        <el-radio v-model="radio" label="2">邮箱注册</el-radio>
      </template1>
      <el-form-item label="账号：" prop="tel" ref="tel">
        <el-input v-model="registerUser.tel"></el-input>
      </el-form-item>
      <el-form-item label="验证码：" prop="verification" ref="verification">
        <el-input v-model="registerUser.verification"></el-input>
        <el-span>
          <a href="#">获取短信验证码</a>
        </el-span>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input type="password" v-model="registerUser.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码：" prop="password2">
        <el-input type="password" v-model="registerUser.password2"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      radio: "1"
    };
  },
  data: function() {
    //自定义验证表单元素的方法
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.registerUser.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      registerUser: {
        tel: "",
        password: "",
        password2: ""
      },
      rules: {
        tel: [
          { required: true, message: "手机号码不能为空", trigger: "blur" },
          { min: 11, max: 11, message: "手机号码必须是11位", trigger: "blur" }
        ],
        verification: [
          { required: true, message: "验证码不能为空", trigger: "blur" },
          { min: 4, max: 4, message: "验证码必须是4位", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 6, message: "密码必须是6位", trigger: "blur" }
        ],
        password2: [
          { required: true, message: "确认密码不能为空", trigger: "blur" },
          { validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      //通过ref定位到form表单
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      //实现重置表单元素数据
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="css" scoped>
.register {
  width: 100%;
  height: 100%;
  background: url(../assets/imgs/bg2.jpg) no-repeat center center;
  background-size: 100% 100%;
}
.registerForm {
  width: 590px;
  height: 500px;
  position: absolute;
  /* left: 50%;
  top: 50%; */
  /* margin-left: 200px;
  margin-top: -190px; */
  margin-left: 100px;
  margin-top: 100px;
  border-radius: 5px;
  background-color: #fff;
  padding: 50px 50px 10px 10px;
}
</style>
