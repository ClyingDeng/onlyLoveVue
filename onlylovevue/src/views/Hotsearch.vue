<template>
  <div class="container" style="margin-bottom:100px;margin-top:100px;">
    <div class="row">
      <!-- 搜索条 -->
      <div class="col-xs-12 searchnav">
        <div class="col-xs-offset-2 col-xs-7">
          <input type="text">
        </div>
        <div class="col-xs-3 search">
          <span class="s">搜索</span>
        </div>
      </div>
      <!-- 内容 -->
      <div class="col-xs-12 content">
        <ul>
          <li class="firstline">
            <span class="col-xs-offset-1 col-md-offset-2 col-xs-2 col-md-1">序号</span>
            <span class="keyword col-xs-7">关键词</span>
          </li>
          <li v-for="(key,index) in allhotsearch.slice(0,1)"  :key="index">
            <div class="order col-xs-offset-1 col-md-offset-2 col-xs-2 col-md-1"><i class="glyphicon glyphicon-open" style="color: #ec6d34"></i></div>
            <div class="article col-xs-5">{{key.con_words}}</div>
            <div class="hotdegree col-xs-2 col-md-1"><b>({{key.hot}})</b></div>
            <div class="hot col-xs-1"><strong>热</strong></div>
          </li>
          <li v-for="(key,index) in allhotsearch.slice(1, 3000000)"  :key="index">
            <div class="order col-xs-offset-1 col-md-offset-2 col-xs-2 col-md-1"><i style="color: #ec6d34">{{key.rowno-1}}</i></div>
            <div class="article col-xs-5">{{key.con_words}}</div>
            <div class="hotdegree col-xs-2 col-md-1"><b>({{key.hot}})</b></div>
            <div class="hot col-xs-1"><strong>热</strong></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      allhotsearch:[]
    };
  },
  //组件创建完成后执行的操作
  created() {
    this.$axios
      .get("http://localhost:3000/hotSearch/allhotSearch")
      .then(res => {
        //拿到后台数据赋值给前端
        this.allhotsearch = res.data.data;
      })
      .catch(err => {
        console.log("错误信息：" + err);
      });
  }
}
</script>
<style scoped>
.searchnav{
  padding-top: 30px;
}
.searchnav,.content{
  background-color: rgba(255, 255, 255, 0.4);
}
input[type=text]{
  width: 100%;
  height: 40px;
}
.search{
  font-family: "Microsoft YaHei";
  display: flex;
  justify-content: center;
  align-content: center;
  height: 40px;
  line-height: 40px;
  font-size: 23px;
  color: #dfe6e9;
  margin: 0;
  background-color: #ec6d34;
  cursor: pointer;
  width: 100px;
  font-weight: bold;
}
.search:hover{
  color: #fff;
}
ul{
  list-style: none;
  margin-top: 40px;
}
ul li{
  height: 30px;
  margin-bottom: 12px;
}
ul .firstline{
  font-size: 18px;
  color: #84817a;
  margin-bottom: 20px;
  font-weight: 600;
}
.order{
  padding-left: 25px;
}
.article{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; 
  color: #34ace0;
}
.hotdegree b{
  display: block;
  text-align: center;
  margin-left: 10px;
  font-weight: 400;
  color: #aaa69d;
}
.hot strong{
  padding: 2px;
  background: #ec6d34;
  font-weight: 400;
  color: aliceblue;
}
li div{
  padding-bottom: 5px;
  border-bottom: 1px dashed #b2bec3;
}
</style>