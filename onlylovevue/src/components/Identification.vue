<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <div class="row" v-if="feedback1">
      <div class="col-xs-12">
        <h3>身份证正面:</h3>
        <span class="eleBtn">
          <el-upload
        class="upload-demo"
        ref="upload"
        list-type="picture-card"
        action="http://localhost:3000/users/idCardFront"
        :limit="1"  
        :before-upload="beforeupload"
        :auto-upload="false"
        :multiple="true">
        <i class="el-icon-plus"></i>
      </el-upload>
        </span>
      </div>
    
      <!-- <div class="col-xs-12 col-sm-6">
        <h3>身份证反面:</h3>
        <el-upload
        class="upload-demo"
        ref="upload"
        list-type="picture-card"
        action="http://localhost:3000/users/uploadHeadPic"
        :limit="1"  
        :before-upload="beforeupload"
        :auto-upload="false"
        :multiple="true">
        <i class="el-icon-plus"></i>
      </el-upload>
      </div> -->
      <span class="eleBtn">
        <button type="button" @click="onSubmit" class="btn btn-primary">确认提交</button>
      </span>

    </div>
    <div class="row" v-if="feedback2">
      <i class="el-icon-success" type="primary"></i>
      <button type="button" class="btn btn-success">已实名认证</button>
    </div>
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode'
export default {
  name: 'HelloWorld',
  data(){
    return {
      msg:'上传证件',
      user_Id:'',
      user:{},
      fileList: [],
      form: {
        name: ""    //绑定表单元素的属性
      },
      param: "", // 表单最后提交的参数对象
      feedback1:false,
      feedback2:true
    }
  },
  methods:{
    mounted(){
    this.user = this.$route.query
    console.log(this.user)
    
    
  },
  beforeCreate(){
    },
    onSubmit() {
    let userInfo = jwt_decode(localStorage.getItem ('mytoken'))
    console.log('token对象：',userInfo)
      let _this = this;
      var names = _this.form.name;
      this.$refs.upload.submit();
      console.log(this.param)
      if(this.param){
        //将非表单元素的数据也添加到参数对象中；
      // this.param.append("company_id", _this.company_id);
      //将表单元素的数据也添加到参数对象中；
      // this.param.append("caption", names);
      //设置提交请求头，适用于上传文件
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      // //调用接口，执行上传所有数据的操作
      this.$axios
        .post("http://localhost:3000/users/idCardFront", this.param, config)
        .then(function(result) {
          console.log(result);
          console.log(result.data.msg)
          if(result.data.msg == '身份证上传成功！审核不通过！'){
            alert('请上传正确证件！')
           
            //删除后台图片

          }else{
            alert('身份证认证成功')
            this.feedback1 = false
            this.feedback2 = true
          }
        });
      }else{
        alert('未上传身份证！')
      }
      
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //当上传文件组件submit之前触发执行
    beforeupload(file) {
      console.log('准备上传。。。。')
      // 准备表单上传需要的参数对象
      this.param = new FormData();
      this.fileList.push(file); // 把需要上传的文件保存到数组中
      // 遍历数组，把所有文件都保存到参数对象中
      for (let i = 0; i < this.fileList.length; i++) {
        this.param.append(`img_${i}`, this.fileList[i]);
      }
      return false;
    }
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-icon-success{
  font-size: 30px;
}
.showBtn {
  display: none;
}
.eleBtn{
  display: block;
  text-align: center;
}
.eleBtn button{
  margin-top: 20px;
}
/* .eleBtn .btn{

} */
.upload-demo{
  overflow: hidden;
  /* padding-left: 30%; */
  /* margin-bottom: 20px; */
}

</style>
