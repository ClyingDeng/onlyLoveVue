<template>
  <div class="row">
    <div class="col-xs-offset-1 col-xs-9">
      <label class="input-label">修改密码</label>
      <br />
     
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="原密码" prop="orguserpwd">
      <el-input type="password" v-model="ruleForm.orguserpwd" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="userpwd">
      <el-input type="password" v-model="ruleForm.userpwd" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
      </el-form> 
    </div>
    <!-- <div class="col-xs-offset-1 col-xs-9"> -->
      <!-- <label class="input-label">忘记密码</label>
      <el-form :model="forgetPwd" status-icon :rules="rules1" ref="forgetPwd" label-width="100px" class="demo-ruleForm">
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
      </el-form>  -->
      
    <!-- </div> -->

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
import jwt_decode from "jwt-decode";
export default {
  data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.userpwd !== '') {
            this.$refs.ruleForm.validateField('userpwd');
          }
          callback();
        }
      };
    var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'));
        } else if (value == this.ruleForm.orguserpwd) {
          callback(new Error('新密码与旧密码一致，无需修改!'));
        } else {
          callback();
        }
      };
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

    return {
      ruleForm: {
          orguserpwd: '',
          userpwd: '',
        },
        // forgetPwd:{
        //   telephone:'',
        //   code:'',
        //   newPassword:'',
        //   surePassword:''
        // },
      telephone:'',
      value1: true,
      value2: true,
      value3: true,
      value4: true,
      value5: true,
      value6: true,
      userInfo:{},
      rules: {
           orguserpwd: [
            { validator: validatePass, trigger: 'blur' },
            { min: 6, max: 6, message: "验证码必须是6位", trigger: "blur" }
          ],
          userpwd: [
            { validator: validatePass2, trigger: 'blur' },
            { min: 6, max: 6, message: "验证码必须是6位", trigger: "blur" }
          ]
          
        }
        // rules1: {
        //   telephone: [
        //     { min: 11, max: 11, message: "手机号必须是11位！", trigger: "blur" },
        //     { validator: tel, trigger: 'blur' }
        //   ],
        //   code:[
        //     // {required:true,message:'密码不能为空', trigger: 'blur' },
        //     { min: 6, max: 6, message: "验证码必须是6位", trigger: "blur" },
        //     { validator: validatePass3, trigger: 'blur' }
        //   ],
        //   newPassword: [
        //     // {required:true,message:'密码不能为空', trigger: 'blur' },
        //     { min: 6, max: 6, message: "密码必须是6位", trigger: "blur" },
        //     { validator: validatePass4, trigger: 'blur' }
        //   ],
        //   surePassword:[
        //     // {required:true,message:'密码不能为空', trigger: 'blur' },
        //     { min: 6, max: 6, message: "密码必须是6位", trigger: "blur" },
        //     { validator: validatePass5, trigger: 'blur' }
        //   ]
        // }

    };  //return
  },
  methods:{
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            //提交后台
             let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      console.log(this.ruleForm)
        this.$axios
        .post("http://localhost:3000/users/updatePassword", this.ruleForm)
        .then(function(result) {
          console.log(result);
          console.log(result.data.msg)
          
        })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    //   submitForm1(formName) {
    //     if(this.forgetPwd.code && this.forgetPwd.telephone && this.forgetPwd.newPassword && this.forgetPwd.surePassword){
    //       //提交后台
    // console.log(this.forgetPwd)
    //   this.$axios
    //   .post("http://localhost:3000/users/forgetPassword", this.forgetPwd)
    //   .then(function(result) {
    //     console.log(result);
    //     console.log(result.data.msg)
        
    //   })
    // }else{
    //   alert('请输入完整！')
    // }
          
    // },
     resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      // //获取短信验证码
      // getvcode(){
      //   this.userInfo = jwt_decode(localStorage.getItem ('mytoken'))
      //   // console.log(this.userInfo.telephone == this.forgetPwd.telephone)
      //   let flag = (this.userInfo.telephone == this.forgetPwd.telephone)
      //   // console.log(flag)
      //   // console.log(this.userInfo.telephone)
      //   // console.log(this.forgetPwd.telephone)
      //     let location = 'http://localhost:3000/users/vCode/:' + this.userInfo.telephone
      //       console.log(location)
      //   if(!this.forgetPwd.telephone){
      //     alert('请输入手机号！')
      //   }else if(flag){
      //     // console.log('进来了吗')
      //     this.$axios.get(location)
      //   .then(res => {
      //     console.log('查询结果：' )
      //     console.log(res.data.data)
      //     //拿到后台数据赋值给前端
      //     this.conditions = res.data.data
      //     if(res.data.data){
      //       alert('验证码已发送！')
      //     }
      //   })
      //   .catch(err => {
      //     console.log('错误信息：' + err)
      //   })
      //   }else{
      //     alert('手机号与注册手机号不匹配！')
      //   }

        
      // },
      //忘记密码
      // forgetpassword(formName){

      // }

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
@media screen and (max-width: 768px) {
  .code{
    margin-top:20px;
  }
}
</style>