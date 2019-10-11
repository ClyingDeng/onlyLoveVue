<template>
<div>
    <HeadNav></HeadNav>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="hotsearch ">
    <div id="hotsearch-head" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div>
     <div class="col-lg-2 col-md-2 col-sm-2 col-xs-4"> <img src="../assets/imgs/resou.png" alt=""><span>唯爱搜索</span>
     </div>
     <div class="col-lg-8 col-md-8 col-sm-8 col-xs-6">
       <input type="text" value="">
     </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"><button>搜索</button></div>

      
    </div>
<div><template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="number"
        label="序号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="keyword"
        label="关键词"
        width="180">
      </el-table-column>
      
    </el-table>
  </template>
</div>
    
    </div>
  </div>
        </div>
        
      </div>
    </div>
   
  </div>
  
</template>
<script>

    export default {
      data() {
        return {
          tableData: [{
            number: '2016-05-02',
            keyword: '王小虎',
            
          }, {
            number: '2016-05-04',
            keyword: '王小虎',
            
          }, {
            number: '2016-05-01',
            keyword: '王小虎',
           
          }, {
            number: '2016-05-03',
            keyword: '王小虎',
          
          }]
        }
      }
    }
</script>
<style scoped>
#hotsearch-head{
  top: 100px;
}
img{
  width: 40px;
  height: 40px;
}
span{
  font-size: 18px;
}
input{
  margin-left:20px; 
  height: 40px;
  width: 100%;
}
button{
  width: 70px;
  height: 40px;
  margin-left:20px; 
  font-size: 20px;
  background-color: rgb(255, 60, 0);
  border: solid 1px  rgb(255, 60, 0);
  color: #fff;
}

</style>