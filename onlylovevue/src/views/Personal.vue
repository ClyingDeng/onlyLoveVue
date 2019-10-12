<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
 <div class="login">
    <el-form
      :model="loginUser"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="loginForm"
    >
      <el-form-item label="手机号" prop="telephone" ref="telephone">
        <el-input v-model="loginUser.telephone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginUser.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
        </div>
        <AsideNav class="col-lg-4"></AsideNav>
      </div>
    </div>
  </div>
</template>

<script>
/* export default {
  data: function() {
    return {
      images: [
        { url: require("../assets/imgs/01.jpg"), link: "/content1" },
        { url: require("../assets/imgs/02.jpg"), link: "/content1" },
        { url: require("../assets/imgs/03.jpg"), link: "/content1" },
        { url: require("../assets/imgs/04.jpg"), link: "/content1" }
      ]
    };
  }
}; */
import jwt_decode from 'jwt-decode'
export default {
  name: "login",
  data: function() {
    return {
      loginUser: {
        telephone: "15776504645",
        password: "111111"
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
          alert("submit!");
          this.$axios
            .post("http://localhost:3000/users/login", this.loginUser)
            .then(res => {
              console.log("登录成功！", res);
              console.log(res.data.token)
              console.log('token对象：',jwt_decode(res.data.token))
              localStorage.setItem('mytoken',res.data.token)  //1.把token保存到本地存储
              this.$router.push("/index/home"); //路由转向登录组件
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