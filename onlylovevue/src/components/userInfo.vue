<template>
  <div>
    <h2 class="title">
      个人信息
      <span class="pro-label label label-warning">PRO</span>
    </h2>
    <form class="form-horizontal">
      <fieldset class="fieldset">
        <h3 class="fieldset-title">基本信息</h3>
        <div class="form-group avatar">
          <div class="figure col-md-2 col-sm-3 col-xs-12">
            <img
              class="img-rounded img-responsive"
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
              alt
            />
          </div>
          <div class="form-inline col-md-10 col-sm-9 col-xs-12">
            <input type="file" class="file-uploader pull-left" />
            <button type="submit" class="btn btn-sm btn-default-alt pull-left">上传图片</button>
            <!-- <el-upload
                                      class="upload-demo form-inline col-md-10 col-sm-9 col-xs-12"
                                      action="https://jsonplaceholder.typicode.com/posts/"
                                      :show-file-list="false"
                                      :on-success="handleAvatarSuccess"
                                      :before-upload="beforeAvatarUpload"
                                      >
                                      <!-- <el-button size="small" type="primary">点击上传</el-button>
                                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
            </el-upload>-->
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">账号</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <input type="text" class="form-control" readonly="readonly" value="20015" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">用户名</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <input type="text" class="form-control" value="clying" />
          </div>
        </div>

        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">性别</label>
          <div class="col-md-10 col-sm-9 col-xs-12 control-sex">
            <el-radio v-model="radio" label="1">男</el-radio>
            <el-radio v-model="radio" label="2">女</el-radio>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">年龄</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <input type="text" class="form-control" value="23" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">出生年月</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <el-date-picker v-model="YM" type="month" placeholder="选择年月"></el-date-picker>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">爱情宣言</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <input type="text" class="form-control" value="23" />
          </div>
        </div>
      </fieldset>
      <fieldset class="fieldset">
        <h3 class="fieldset-title">其他信息</h3>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">身高</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <input type="email" class="form-control" value="163cm" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">体重</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <input type="email" class="form-control" value="50kg" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">薪资</label>
          <div class="col-md-10 col-sm-9 col-xs-12 control-sex">
            <el-radio v-model="radio" :label="key" v-for="key in salary">{{key}}</el-radio>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">婚姻状况</label>
          <div class="col-md-10 col-sm-9 col-xs-12 control-sex">
            <el-radio v-model="radio" label="1">未婚</el-radio>
            <el-radio v-model="radio" label="2">丧偶</el-radio>
            <el-radio v-model="radio" label="3">离异</el-radio>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">兴趣爱好</label>
          <div class="col-md-10 col-sm-9 col-xs-12 control-sex">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">不良嗜好</label>
          <div class="col-md-10 col-sm-9 col-xs-12 control-sex">
            <el-radio v-model="Badhobby" label="1">酗酒</el-radio>
            <el-radio v-model="Badhobby" label="2">抽烟</el-radio>
            <el-radio v-model="Badhobby" label="3">无</el-radio>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 col-sm-3 col-xs-12 control-label">邮箱</label>
          <div class="col-md-10 col-sm-9 col-xs-12">
            <input type="email" class="form-control" value="onlylove@qq.com" />
          </div>
        </div>
      </fieldset>
      <hr />
      <div class="form-group">
        <div class="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
          <input class="btn btn-primary" type="submit" value="确认" />
        </div>
      </div>
    </form>
  </div>
</template>
<style scoped>
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
</style>
<script>
const cityOptions  = ["游泳", "健身", "弹钢琴", "跑步", "其他"];
export default {
  data: function() {
    return{
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
      radio: "1",
      Badhobby: "3",
      YM: "",
      
      checkAll: false,
        checkedCities: ['健身'],
        cities: cityOptions,
        isIndeterminate: true
    }
  },
  methods:{
    handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
  }
}
</script>