<template>
  <div>
    <!-- <h1>This is an login page</h1> -->
    <HeadNav></HeadNav>
    <div class="container col-ms-12 col-md-6 col-md-offset-3 login">
      <!-- <el-col :span="24">
        <el-col :for="7"> -->
          <el-form
            :model="loginUser"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="loginForm"
          >
            <el-form-item label="账号：" prop="telephone" ref="telephone">
              <el-input v-model="loginUser.telephone"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
              <el-input type="password" v-model="loginUser.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
            <el-radio label="1">记住我</el-radio>
          <router-link to="/forget" class="forget">忘记密码</router-link>
          </el-form>
        <!-- </el-col>
      </el-col> -->
    </div>
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode'
export default {
  name: "login",
  data: function() {
    return {
      loginUser: {
        telephone: "15660181105",
        password: "123456",
        // radio: "1"
      },
      rules: {
        telephone: [
          { required: true, message: "手机号码不能为空", trigger: "blur" },
          { min: 11, max: 11, message: "手机号码必须是11位", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 6, message: "密码必须是6位", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      //通过ref定位到form表单
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
        this.$axios
            .post("http://localhost:3000/users/login", this.loginUser)
            .then(res => {
              console.log("登录成功！", res);
              // console.log(res.data.token)
              // console.log('token对象：',jwt_decode(localStorage.getItem ('mytoken')))
              console.log('token对象：',jwt_decode(res.data.token))
              console.log(res.data)
              localStorage.setItem('mytoken',res.data.token)  //1.把token保存到本地存储
              this.$router.push("/index"); //路由转向登录组件
            })
            .catch(err => {
              console.log(err);
            });
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
.login{
  margin-top: 100px;
}
.loginForm {
  height: 400px;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 5px;
  background-color: #fff;
  padding: 35px 50px 10px 10px;
}
.forget{
  float:right;
  color:#409EFF;
}
.forget:hover{
  color: #aaa;
}
</style>
