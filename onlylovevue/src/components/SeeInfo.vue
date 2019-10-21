<template>
  <div>
    <!-- <div style="display:none"> -->
    <div>
        <h2 class="title">
      个人信息
      <span class="pro-label label label-warning">PRO</span>
    </h2>
    <!-- <h1>{{suserInfos}}</h1> -->
    <!-- <h1>{{updateInfos}}</h1> -->
    <!-- <span @click="test">test</span> -->
    <form class="form-horizontal">
      <fieldset class="fieldset">
        <h3 class="fieldset-title">基本信息</h3>
        <div class="form-group avatar">
          <div class="figure col-md-2 col-sm-3 col-xs-12">
            <img v-if="suserInfos.headPic == ''"
              class="img-rounded img-responsive"
              src="http://pzc93h51i.bkt.clouddn.com/avatar1.png"
              alt
            />
            <img
                v-else-if="suserInfos.headPic == 'fang1.jpg'"
                class="img-rounded img-responsive"
                :src="'http://pzc93h51i.bkt.clouddn.com/' + 'fang1.jpg'"
                alt
              />
              <img
                v-else-if="suserInfos.headPic == 'fang2.jpg'"
                class="img-rounded img-responsive"
                :src="'http://pzc93h51i.bkt.clouddn.com/' + 'fang2.jpg'"
                alt
              />
              <img
                v-else-if="suserInfos.headPic == 'fang3.jpg'"
                class="img-rounded img-responsive"
                :src="'http://pzc93h51i.bkt.clouddn.com/' + 'fang3.jpg'"
                alt
              />
              <img
                v-else-if="suserInfos.headPic == 'fang4.jpg'"
                class="img-rounded img-responsive"
                :src="'http://pzc93h51i.bkt.clouddn.com/' + 'fang4.jpg'"
                alt
              />
              <img
                v-else-if="suserInfos.headPic == 'fang5.jpg'"
                class="img-rounded img-responsive"
                :src="'http://pzc93h51i.bkt.clouddn.com/' + 'fang5.jpg'"
                alt
              />
            <img v-else
              class="img-rounded img-responsive"
              :src="'http://localhost:3000/upload/' + suserInfos.headPic"
              alt
            />
          </div>
          <div class="form-inline col-md-10 col-sm-9 col-xs-12">
            
            <!-- <el-upload
              class="upload-demo form-inline col-md-10 col-sm-9 col-xs-12"
              ref="upload"
              action="http://localhost:3000/users/updateHeadPic"
              :limit="1"  
              :before-upload="beforeupload"
              :auto-upload="false"
              :multiple="true">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
            </el-upload> -->
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">账号</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <input type="text" class="form-control" readonly="readonly" v-model="suserInfos.base_info_Id" />
            <!-- {{this.suserInfos.base_info_Id}} -->
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">用户名</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <input type="text" class="form-control" readonly="readonly" v-model="suserInfos.nickName" />
          </div>
        </div>

        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">性别</label>
          <div class="col-md-10 col-sm-9 col-xs-12 control-sex">
            <el-radio v-model="suserInfos.sex" disabled label="男">男</el-radio>
            <el-radio v-model="suserInfos.sex" disabled label="女">女</el-radio>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">年龄</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <input type="text" class="form-control" readonly="readonly" v-model="suserInfos.age" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">出生年月</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <el-date-picker v-model="suserInfos.birthday" type="month" placeholder="选择年月" :picker-options="pickerOptions"></el-date-picker>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">爱情宣言</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <input type="text" class="form-control" readonly="readonly" v-model="suserInfos.love_description" />
          </div>
        </div>
      </fieldset>
      <fieldset class="fieldset">
        <h3 class="fieldset-title">其他信息</h3>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">身高</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <input type="text" class="form-control" readonly="readonly" v-model="suserInfos.height + 'cm'" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">体重</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <input type="text" class="form-control" readonly="readonly" v-model="suserInfos.weight + 'kg'" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">薪资</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <span class="sexStyle" v-for="(key,index) in salary">
            <el-radio v-model="suserInfos.salary" disabled :label="index">{{key}}</el-radio>
            </span>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">婚姻状况</label>
          <div class="col-md-10 col-sm-9 col-xs-12 control-sex">
            <el-radio v-model="this.suserInfos.marriage" disabled :label="0">未婚</el-radio>
            <el-radio v-model="this.suserInfos.marriage" disabled :label="1">离异</el-radio>
            <el-radio v-model="this.suserInfos.marriage" disabled :label="2">丧偶</el-radio>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">兴趣爱好</label>
          <div class="col-md-10 col-sm-9 col-xs-12 control-sex">
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @change="handleCheckAllChange"
            disabled>全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="city in cities" :label="city" :key="city" disabled>{{city}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">不良嗜好</label>
          <div class="col-md-10 col-sm-9 col-xs-12 control-sex">
            <el-radio v-model="this.suserInfos.blight" disabled :label="1">酗酒</el-radio>
            <el-radio v-model="this.suserInfos.blight" disabled :label="2">抽烟</el-radio>
            <el-radio v-model="this.suserInfos.blight" disabled :label="0">无</el-radio>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">邮箱</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <input type="email" class="form-control" value="onlylove@qq.com" readonly="readonly" />
          </div>
        </div>
      </fieldset>
      <hr />
      <div class="form-group">
        <div class="col-md-2 col-sm-4 col-xs-3 col-md-push-5 col-sm-push-4 col-xs-push-5">
          <!-- <input class="btn btn-primary" type="submit" value="确认修改" @click="onSubmit"/> -->
          <button class="btn btn-danger" type="button">
            <router-link to='edit'>编辑</router-link>
          </button>
        </div>
      </div>
    </form>
    </div>
  </div>
</template>
<style scoped>
fieldset {
    border: 1px solid transparent !important;
}
a{
  color: #f1f1f1;
}
a:hover{
  color: #ccc;
}
.avatar .figure img[data-v-6708ad21] {
    width: 120%;
    height: 120%;
    margin-bottom: 0px;
}
.sexStyle{
  margin-right: 15px;
}
input[type="file"] {
  display: none ;
}
.form-inline[data-v-0a4b02ae] {
    margin-top: 0px;
}
.avatar .figure img[data-v-0a4b02ae] {
    width: 100%;
}
.figure{
      padding:0;
      padding-right: 15px;
    }
.figure img{
  height: 100%;
  /* width: 80%; */
  margin: 0;
}
.pro-label {
  font-size: 13px;
  padding: 4px 5px;
  position: relative;
  top: -5px;
  margin-left: 10px;
  display: inline-block;
}
.fieldset-title {
  padding-bottom: 15px;
  border-bottom: 1px solid #eaeaf1;
  margin-bottom: 30px;
  color: #616670;
  font-size: 16px;
}
.avatar {
  width: 100%;
  height: 100%;
}
.avatar .figure img {
  float: right;
  width: 64px;
}
.avatar .figure img {
  float: none;
  margin-bottom: 15px;
}
.form-inline {
  margin-top: 20px;
}
.control-sex {
  padding-top: 7px;
  margin-bottom: 0;
}

@media screen and (max-width: 768px) {
    .figure{
      padding-left: 45px;
    }
}
</style>
<script>
import jwt_decode from 'jwt-decode'
// import baseInfo from "../components/userInfo.vue";

const cityOptions = ["游泳", "健身", "弹钢琴", "跑步", "其他"];
export default {
  data: function() {
    return {
      salary: [
        "2k以下",
        "2k-4k", 
        "4-6k",
        "6-8k",
        "8-10k",
        "10-15k",
        "15-20k",
        "20k以上"
      ],
      fileList: '',
      form: {
        name: ""    //绑定表单元素的属性
      },
      param: "", // 表单最后提交的参数对象
      checkAll: false,
      checkedCities: ["健身"],
      cities: cityOptions,
      isIndeterminate: true,
      updateInfos:{
        sex:'0',
        marriage:'0',
        blight:'0'
      },
      suserInfos:{},
      pickerOptions: {} 
    };
  },
  // props:['suserInfos'],
//   component: {
//     baseInfo: baseInfo,
//   },
  created:function(){
    let obj = JSON.parse(localStorage.getItem('myInfo'))
      this.sex = obj.sex
      this.suserInfos = obj
      
      // this.suserInfos = localStorage.getItem('myInfo')
      console.log(obj)
      console.log('子组件：')
      console.log(this.suserInfos)

      this.pickerOptions = {
           disabledDate(time) {
              return time.getTime();
           }
     }
  },
  methods: {
    test(){
      console.log('test')
      console.log(this.suserInfos)
    },
     //当上传文件组件submit之前触发执行
    beforeupload(file) {
      console.log('准备上传。。。。')
      // 准备表单上传需要的参数对象
      this.param = new FormData();
      this.fileList = file; // 把需要上传的文件保存到数组中
      // 遍历数组，把所有文件都保存到参数对象中
        this.param.append(`file`, this.fileList);
        console.log(this.param)
      return false;
    },
      // onSubmit() {
    
      
      
    //子组件信息与父组件绑定
      // this.$emit('userInfo_commit', this.suserInfos)
      // this.$router.push('/personal')
    // },

    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>