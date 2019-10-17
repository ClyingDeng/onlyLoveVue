<template>
  <div>
    <!-- <h1>This is an login page</h1> -->
    <HeadNav></HeadNav>
    <div class="container col-ms-12 col-md-6 col-md-offset-3 forgetPassword">
      <!-- <el-col :span="24">
        <el-col :for="7"> -->
      <el-form :model="forgetPwd" status-icon :rules="rules1" ref="forgetPwd" label-width="100px" class="forgetForm">
         <label class="input-label secret">忘记密码</label>
      <el-form-item label="手机号码" prop="telephone">
      <el-input type="text" v-model="forgetPwd.telephone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="col-xs-12 col-md-7" style="padding-left:0px;">
          <el-input type="text" v-model="forgetPwd.code" autocomplete="off"></el-input>
        </div>
        <div class="col-xs-12 col-md-5 code">
      <el-button type="info" class="getCode" @click="getvcode">获取短信验证码</el-button>
        </div>
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
      <el-input type="password" v-model="forgetPwd.newPassword" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="surePassword">
      <el-input type="password" v-model="forgetPwd.surePassword" autocomplete="off"></el-input>
      </el-form-item>


      <el-form-item>
      <el-button type="primary" @click="submitForm1('forgetpassword')">提交</el-button>
      <el-button @click="resetForm('forgetPwd')">重置</el-button>
      </el-form-item>
      </el-form> 
          <!-- <router-link to="/forgetPassword">忘记密码</router-link> -->
        <!-- </el-col>
      </el-col> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data: function() {
    var tel = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('手机号不能为空！'));
        }  
        // else if(value !== this.userInfo.telephone){
        //   console.log(this.userInfo.telephone)
        //   callback(new Error('请输入注册时的手机号！'));
        // }
        else {
          callback();
        }
      };
      var validatePass3 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('验证码不能为空'));
        } else {
          if (this.forgetPwd.surePassword !== '') {
            this.$refs.forgetPwd.validateField('surePassword');
          }
          callback();
        }
      };
      var validatePass4 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('密码不能为空'));
        } else {
          if (this.forgetPwd.surePassword !== '') {
            this.$refs.forgetPwd.validateField('surePassword');
          }
          callback();
        }
      };
      var validatePass5 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.forgetPwd.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validatePass6 = (rule, value, callback) => {
        if (localStorage.getItem('vcode') !== value) {
          callback(new Error('验证码错误'));
        } else {
          callback();
        }
      };

    return {
      forgetPwd:{
          telephone:'',
          code:'',
          newPassword:'',
          surePassword:''
        },
     rules1: {
          telephone: [
            { min: 11, max: 11, message: "手机号必须是11位！", trigger: "blur" },
            { validator: tel, trigger: 'blur' }
          ],
          code:[
            // {required:true,message:'密码不能为空', trigger: 'blur' },
            { min: 6, max: 6, message: "验证码必须是6位", trigger: "blur" },
            { validator: validatePass3, trigger: 'blur' },
            { validator: validatePass6, trigger: 'blur' }
          ],
          newPassword: [
            // {required:true,message:'密码不能为空', trigger: 'blur' },
            { min: 6, max: 6, message: "密码必须是6位", trigger: "blur" },
            { validator: validatePass4, trigger: 'blur' }
          ],
          surePassword:[
            // {required:true,message:'密码不能为空', trigger: 'blur' },
            { min: 6, max: 6, message: "密码必须是6位", trigger: "blur" },
            { validator: validatePass5, trigger: 'blur' }
          ]
        }
    };
  },
  //组件创建完成后执行的操作
      // created(){
      //   //查询数据库手机号
      //   this.$axios.get('http://localhost:3000/telephone')
      //   .then(res => {
      //     console.log('查询结果：' )
      //     console.log(res.data.data)
      //     //拿到后台数据赋值给前端
      //     this.conditions = res.data.data
      //   })
      //   .catch(err => {
      //     console.log('错误信息：' + err)
      //   })
      // },
  methods: {
    submitForm1(formName) {
        if(this.forgetPwd.code && this.forgetPwd.telephone && this.forgetPwd.newPassword && this.forgetPwd.surePassword){
          //提交后台
    console.log(this.forgetPwd)
      this.$axios
      .post("http://localhost:3000/users/forgetPassword", this.forgetPwd)
      .then(function(result) {
        console.log(result);
        console.log(result.data.msg)
        alert(result.data.msg)
      })
    }else{
      alert('请输入完整！')
    }
          
    },
     //获取短信验证码
      getvcode(){
        let flag = (this.forgetPwd.telephone.length)
        // console.log(flag)
        // console.log(this.userInfo.telephone)
        // console.log(this.forgetPwd.telephone)
          let location = 'http://localhost:3000/users/vCode/:' + this.forgetPwd.telephone
            console.log(location)
        if(!this.forgetPwd.telephone){
          alert('请输入手机号！')
        }else if(flag){
          // console.log('进来了吗')
          this.$axios.get(location)
        .then(res => {
          console.log('查询结果：' )
          console.log(res.data.data)
          //拿到后台数据赋值给前端
          this.conditions = res.data.data
          if(res.data.data){
            alert('验证码已发送！')
            localStorage.setItem('vcode',res.data.data)
          }
          
        })
        .catch(err => {
          console.log('错误信息：' + err)
        })
        }

        
      },
    resetForm(formName) {
      //实现重置表单元素数据
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="css" scoped>
.forgetPassword{
  margin-top: 100px;
}
.secret{
  font-size: 18px;
}
.forgetForm {
  height: 400px;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 5px;
  background-color: #fff;
  padding: 35px 50px 10px 10px;
}
</style>
