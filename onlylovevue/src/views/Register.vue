<template>
  <div>
    <div class="container col-ms-12 col-md-6 col-md-offset-3 register">
      <!-- <el-col :span="24"> -->
      <!-- <h1>注册</h1> -->
      <!-- <el-col :for="14"> -->
        <HeadNav></HeadNav>
      <el-form
        :model="user"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="registerForm"
      >
        <span class="regHead">
          <el-radio label="1">手机号注册</el-radio>
          <el-radio label="2">邮箱注册</el-radio>
        </span>
        <el-form-item label="账号：" prop="telephone" ref="telephone">
          <el-input v-model="user.telephone"></el-input>
        </el-form-item>
        <el-form-item label="验证码：" prop="vCode" ref="vCode">
          <el-input v-model="user.vCode" class="IsCode"></el-input>
          <!-- <el-span><a href="#">获取短信验证码</a></el-span> -->
          <el-button type="info" class="getCode" @click="getvcode">获取短信验证码</el-button>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input type="password" v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="password2">
          <el-input type="password" v-model="user.password2"></el-input>
        </el-form-item>
        <span class="regBtn">
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </span>
      </el-form>
      <!-- </el-col> -->
      <!-- </el-col> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data: function() {
    //自定义验证表单元素的方法
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.user.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      sysvCode: "",
      user: {
        telephone: "",
        password: "",
        password2: "",
        // radio: "1"
        vCode: ""
      },
      rules: {
        telephone: [
          { required: true, message: "手机号码不能为空", trigger: "blur" },
          { min: 11, max: 11, message: "手机号码必须是11位", trigger: "blur" }
        ],
        vCode: [
          { required: true, message: "验证码不能为空", trigger: "blur" },
          { min: 6, max: 6, message: "验证码必须是6位", trigger: "blur" }
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
    getvcode() {
      if (this.user.telephone.length == 11) {
        this.$axios
          .get(
            `http://localhost:3000/users/vCode/${this.user.telephone}`
          )
          .then(res => {
            //拿到后台数据赋值给前端
            console.log(res)
            console.log(res.data)
            this.sysvCode = res.data.data;
            console.log(res.data.data)
            // alert("您的验证码为" , res.data.data);
          })
          .catch(err => {
            console.log("错误信息：" + err);
          });
      }
    },
    submitForm(ruleForm) {
      //通过ref定位到form表单
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          console.log("系统发的的验证码"+this.sysvCode)
          console.log("用户输入的验证码"+this.user.vCode)
          if(this.user.vCode == this.sysvCode){
            this.$axios
            .post("http://localhost:3000/users/register", this.user)
            .then(res => {
              console.log("注册成功！", res);
              this.$router.push("/login"); //路由转向登录组件
            })
            .catch(err => {
              console.log(err);
            });
          }else{
            alert("您的验证码输入错误")
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(ruleForm) {
      //实现重置表单元素数据
      this.$refs[ruleForm].resetFields();
    }
  }
};
</script>
<style lang="css" scoped>
.register{
  margin-top: 100px;
}
.regHead {
  display: block;
  text-align: center;
}
.registerForm {
  height: 400px;
  margin-top: 90px;
  border-radius: 5px;
  background-color: #fff;
  padding: 35px 50px 10px 10px;
}
.IsCode {
  float: left;
  width: 50%;
  margin-right: 5%;
}
.regBtn {
  display: block;
  text-align: center;
}
@media screen and (max-width: 768px) {
  .IsCode {
    float: left;
    width: 40%;
    margin-right: 5%;
  }
  .getCode {
    width: 40%;
    text-align: center;
  }
  .el-button {
    padding: 12px 10px;
  }

  .regBtn .el-button {
    padding: 12px 20px;
  }
}
</style>
