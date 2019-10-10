<template>
  <div>
    <hr>
    <el-button type="text" @click="dialogFormVisible = true">
      <ul>
        <li><img src="../assets/imgs/rose.jpg" alt=""></li>
        <li>rose</li>
        <hr style="border:0.5px dotted">
        <li>￥9.9</li>
      </ul>
    </el-button>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    }
  };
</script>
<style lang="css" scoped>
li img{
  width: 250px;
  height: 350px;
}
li{
  color: black;
  margin-top: 10px
}
ul{
  list-style: none;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0%;
  margin: 10px;
  margin-top: 100px;
}
</style>