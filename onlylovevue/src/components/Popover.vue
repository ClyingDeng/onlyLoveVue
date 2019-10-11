<template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true">
      <ul>
        <li><img src="../assets/imgs/rose.jpg" alt=""></li>
        <li>rose</li>
        <hr style="border:0.5px dotted #f8a5c2">
        <li>￥9.9</li>
      </ul>
    </el-button>
    <el-dialog title="玫瑰" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="玫瑰单价" :label-width="formLabelWidth">
           <el-form-item label="￥9.9" :label-width="formLabelWidth"></el-form-item>
        </el-form-item>
        <el-form-item label="请选择数量" :label-width="formLabelWidth">
           <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        </el-form-item>
         <el-form-item label="共计" :label-width="formLabelWidth">
           <el-form-item label="￥9.9" :label-width="formLabelWidth"></el-form-item>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">购 买</el-button>
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
        formLabelWidth: '120px',
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
<style lang="css" scoped>
li img{
  width: 250px;
  height: 350px;
}
li:nth-child(2){
  font-size: 20px;
  color: #596275;
  margin-top: 10px
}
li:nth-child(4){
  font-size: 15px;
  color: #e66767;
  margin-top: 10px
}
ul{
  list-style: none;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0%;
  /* margin-top: 100px; */
}
</style>