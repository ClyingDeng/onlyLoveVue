<template>
  <div>
    <h2 class="title">
      修改个人信息
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
            <img
              v-if="suserInfos.headPic == ''"
              class="img-rounded img-responsive"
              src="http://localhost:3000/olove/avatar1.png"
              alt
            />
            <img
              v-else
              class="img-rounded img-responsive"
              :src="'http://localhost:3000/olove/' + suserInfos.headPic"
              alt
            />
          </div>
          <div class="form-inline col-md-10 col-sm-9 col-xs-12">
            <!-- <input type="file" class="file-uploader pull-left" /> -->
            <!-- <button type="submit" class="btn btn-sm btn-default-alt pull-left" >上传图片</button> -->
            <el-upload
              class="upload-demo form-inline col-md-10 col-sm-9 col-xs-12"
              ref="upload1"
              action="http://localhost:3000/users/updateHeadPic"
              :limit="1"
              :before-upload="beforeupload"
              :auto-upload="false"
              :multiple="true"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
            </el-upload>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">账号</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <input
              type="text"
              class="form-control"
              readonly="readonly"
              v-model="suserInfos.base_info_Id"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">用户名</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <input type="text" class="form-control" v-model="suserInfos.nickName" />
          </div>
        </div>

        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">性别</label>
          <div class="col-md-10 col-sm-9 col-xs-12 control-sex">
            <el-radio v-model="suserInfos.sex" label="男">男</el-radio>
            <el-radio v-model="suserInfos.sex" label="女">女</el-radio>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">年龄</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <input type="text" class="form-control" v-model="suserInfos.age" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">出生年月</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <el-date-picker v-model="suserInfos.birthday" type="month" placeholder="选择年月"></el-date-picker>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">爱情宣言</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <input type="text" class="form-control" v-model="suserInfos.love_description" />
          </div>
        </div>
      </fieldset>
      <fieldset class="fieldset">
        <h3 class="fieldset-title">其他信息</h3>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">身高</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <input type="text" class="form-control" v-model="suserInfos.height + 'cm'" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">体重</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <input type="text" class="form-control" v-model="suserInfos.weight + 'kg'" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">薪资</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <span class="sexStyle" v-for="(key,index) in salary">
              <el-radio v-model="suserInfos.salary" :label="index">{{key}}</el-radio>
            </span>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">婚姻状况</label>
          <div class="col-md-10 col-sm-9 col-xs-12 control-sex">
            <el-radio v-model="this.suserInfos.marriage" :label="0">未婚</el-radio>
            <el-radio v-model="this.suserInfos.marriage" :label="1">离异</el-radio>
            <el-radio v-model="this.suserInfos.marriage" :label="2">丧偶</el-radio>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">兴趣爱好</label>
          <div class="col-md-10 col-sm-9 col-xs-12 control-sex">
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @change="handleCheckAllChange"
            >全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">不良嗜好</label>
          <div class="col-md-10 col-sm-9 col-xs-12 control-sex">
            <el-radio v-model="this.suserInfos.blight" :label="1">酗酒</el-radio>
            <el-radio v-model="this.suserInfos.blight" :label="2">抽烟</el-radio>
            <el-radio v-model="this.suserInfos.blight" :label="0">无</el-radio>
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
          <button class="btn btn-primary" type="button" @click="tiJiao">
            <router-link to="seeinfo">确认修改</router-link>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<style scoped>
fieldset {
  border: 1px solid transparent !important;
}
a {
  color: #f1f1f1;
}
a:hover {
  color: #ccc;
}
.sexStyle {
  margin-right: 15px;
}
input[type="file"] {
  display: none;
}
.form-inline[data-v-0a4b02ae] {
  margin-top: 0px;
}
.avatar .figure img[data-v-00cb6ea9] {
  width: 100%;
}
/* .figure img {
    width: 120%;
    height: 120%;
} */
.figure {
  padding: 0;
  padding-right: 15px;
}
.figure img {
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
  .figure {
    padding-left: 45px;
  }
}
</style>
<script>
import jwt_decode from "jwt-decode";
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
      fileList: "",
      form: {
        name: "" //绑定表单元素的属性
      },
      param: "", // 表单最后提交的参数对象
      checkAll: false,
      checkedCities: ["健身"],
      cities: cityOptions,
      isIndeterminate: true,
      updateInfos: {
        sex: "0",
        marriage: "0",
        blight: "0"
      },
      suserInfos: {}
    };
  },
  // props:['suserInfos'],
  created: function() {
    this.sex = this.$store.state.user.sex;
    this.suserInfos = this.$store.state.user;
    console.log("sm");
    console.log(this.suserInfos);
    // this.updateInfos = JSON.parse(JSON.stringify(this.suserInfos))
    // console.log('子组件：')
    // console.log(this.updateInfos)
  },
  methods: {
    test() {
      console.log("test");
      console.log(this.suserInfos);
    },
    //转日期格式
    dateFormat(time) {
      var date = new Date(time);
      var year = date.getFullYear();
      /* 在日期格式中，月份是从0开始的，因此要加0
       * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
       * */
      var month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var hours =
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var minutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var seconds =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      // 拼接
      return year + "-" + month + "-" + day;
    },
    //当上传文件组件submit之前触发执行
    beforeupload(file) {
      console.log("准备上传。。。。");
      // 准备表单上传需要的参数对象
      this.param = new FormData();
      this.fileList = file; // 把需要上传的文件保存到数组中
      // 遍历数组，把所有文件都保存到参数对象中
      this.param.append(`file`, this.fileList);
      console.log("touxiang");
      console.log(this.param);
      return false;
    },
    tiJiao() {
      let userInfo = jwt_decode(localStorage.getItem("mytoken"));
      console.log("token对象：", userInfo);

      console.log(this.param);
      console.log(this.$refs);
      let _this = this;
      var names = _this.form.name;
      this.$refs.upload1.submit();

      // console.log(this.param)
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      //修改头像
      if (this.param) {
        // //调用接口，执行上传所有数据的操作
        this.$axios
          .post("http://localhost:3000/users/updateHeadPic", this.param, config)
          .then(function(result) {
            console.log("修改头像");
            console.log(result);
            console.log(result.data.msg);
            //将localstorage头像更新
            // JSON.parse(localStorage.getItem('myInfo')).headPic =
          });
      }
      // else{
      //   alert('您暂未修改头像图片！')
      // }
      //修改信息
      console.log("信息：");
      // this.updateInfos = this.suserInfos
      console.log(this.suserInfos);

      this.suserInfos.birthday = this.dateFormat(this.suserInfos.birthday);
      console.log(this.suserInfos.birthday);

      // //调用接口，执行上传所有数据的操作
      this.$axios
        .post("http://localhost:3000/users/updateInfo", this.suserInfos)
        .then(function(result) {
          console.log(result.data);
          console.log(result.data.msg);
          //更新store里面数据
          // this.$store.state.user = this.suserInfos
          //更新localstorage
          console.log("localStorage");
          // JSON.parse(localStorage.getItem('myInfo')) =
          // JSON.parse(localStorage.getItem('myInfo')) = this.suserInfos
          localStorage.setItem("myInfo", JSON.stringify(_this.suserInfos));
          console.log(JSON.parse(localStorage.getItem("myInfo")));
          alert("修改数据成功！");
        });

      //子组件信息与父组件绑定
      // this.$emit('userInfo_commit', this.suserInfos)
      // this.$router.push('/personal')
    },

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