<template>
  <div class="search">
    <div class="content1">
      <div class="row">
          <div class="" style="margin-top: 20px">
                <div class="col-md-12 col-xs-12" id="searchcon" style="background-color: rgba(255,255,255,0.7);padding-top: 10px;position: relative;">
                    <form name="searchForm" method="post" action="" autocomplete="off">
           
                <div class="dw_search">
                        <div class="dw_search_in">
                            <!-- 全文及相关关键字 -->
                            <div class="el on el_q col-xs-12 col-md-3 ">
                                <ul id="kwdTypeSelUl">
                                    <li>ID搜索<em class="dicon Dm"></em></li>
                                    <li><a onclick="">搜昵称</a></li>
                                </ul>
                                <p class="ipt">
                                        <input autocomplete="off" id="work_position_input" readonly="readonly" type="text" class="ef" placeholder="请输入">
                                </p>               
                    </div>
                            <!--地点 -->
                            <div class="txt  col-xs-12 col-md-2">
                                <p class="hdl">地点</p>
                                <input autocomplete="off" id="work_position_input" readonly="readonly" type="text" class="ef" placeholder="选择地点">
                                <input name="jobarea" id="jobarea" type="hidden" value="070300" />
                            </div>
            
                            <!-- 行业类别 -->
                            <div class="txt  col-xs-12 col-md-2" id="indtype_click">
                                <p class="hdl">行业</p>
                                <input autocomplete="off" id="indtype_input" readonly="readonly" type="text" class="ef" placeholder="选择行业" value="">
                                <input name="industrytype" type="hidden" id="indtype_code" value=""/>
                            </div>
                            <!-- 职能类别 -->
                            <div class="txt col-xs-12 col-md-2" id="funtype_click">
                                <p class="hdl">年龄</p>
                                <input autocomplete="off" id="funtype_input" readonly="readonly" type="text" class="ef" placeholder="选择职能" value="" />
                                <input name="funtype" type="hidden" id="funtype_code" value=""/>
                            </div>
                            <!-- 搜索按钮 -->
                            <div class="txt col-xs-12 col-md-3">
                                <button class="p_but" type="button" onclick="">搜&nbsp;索</button>
                            </div>
                        </div>

           </div>
           <div class="options">
             <ul>
               <li>
                 <span>性别：</span>
                 <ul class="sectionOption">
                   <li class="allOption"><a href="">所有</a></li>
                   <li><a href="">男</a></li>
                   <li><a href="">女</a></li>
                 </ul>
               </li>
               <li class="doubleHeight">
                 <span>身高：</span>
                 <div class="heightcon">
                   <ul class="sectionOption">
                   <li class="allOption"><a href="">所有</a></li>
                   <li v-for="key in height"><a href="">{{key}}</a></li>
                 </ul>
                 </div>
                  <!-- <span class="optionbtn" :click="more"><a>更多+</a></span>
                  <span class="optionbtn"><a>多选</a></span> -->
               </li>
               <li>
                 <span>体重：</span>
                 <ul class="sectionOption">
                   <li class="allOption"><a href="">所有</a></li>
                   <li v-for="key in weight"><a href="">{{key}}</a></li>
                 </ul>
               </li>
               <li>
                 <span>学历：</span>
                 <ul class="sectionOption">
                   <li class="allOption"><a href="">所有</a></li>
                   <li v-for="key in education"><a href="">{{key}}</a></li>
                 </ul>
               </li>
               <li></li>
               <li></li>
             </ul>
           </div>
        </form>
                </div>
            </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
    data(){
        return{
            height:['150cm以下','151-155cm','156-160cm','161-165cm','166-170cm','171-175cm','176-180cm','181-185cm','186-190cm','190cm以上'],
            weight:['40kg以下','41-45kg','46-50kg','51-55kg','56-60kg','61-65kg','66-70kg','71-75kg','76-80kg','80-90kg','90kg以上'],
            education:['高中以下','高中','大专','本科','硕士','博士','博士后']
        }
    },
    methods:{
      more(){
        
      }
    }
    //组件创建完成后执行的操作
      // created(){
      //   this.$axios.get('http://localhost:3000/allCondition')
      //   .then(res => {
      //     console.log('查询结果：' )
      //     console.log(res.data.data)
      //     //拿到后台数据赋值给前端
      //     this.conditions = res.data.data
      //   })
      //   .catch(err => {
      //     console.log('错误信息：' + err)
      //   })
      // }
}
</script>

<style lang="css" scoped>
.search{
  margin-top: 100px;
}
 form{
        display: block;
    }
    .dw_search {
    min-height: 98px;
    margin: 10px 0;
    padding: 12px 15px 0;
}
.dw_search .dw_search_in {
    height: 86px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
}
.dw_search .el.el_q {
    padding: 42px 10px 10px 0;
}
.dw_search .el, .dw_search .txt {
    position: relative;
    float: left;
    height: 40px;
    line-height: 40px;
    border: 0 none;
    border-right: 1px solid #e8e8e8;
    padding: 0;
}
#kwdTypeSelUl{
 padding-left: 0px;
}
.hdl{
    padding-left: 20px;
    margin-top: 8px;
}
p {
    margin: 0px;
}
/* .dw_search_in .txt input{
  margin-top: 0;
} */
.dw_search .el.el_q ul {
    position: absolute;
    width: 100%;
    height: 56px;
    top: 0;
    left: 0;
}
.dw_search .el ul {
    height: 56px;
    line-height: 56px;
    color: #333;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid transparent;
}
.dw_search .el li {
    float: left;
    width: 75px;
    font-size: 16px;
    text-indent: 15px;
    color: #636985;
}
li {
    list-style: none;
}
.dw_search .el li:last-child {
    float: right;
}
.dw_search .el .ipt {
    position: relative;
    height: 24px;
    line-height: 24px;
    padding: 5px 0 5px 0;
    background-color: #fff;
}
.dw_search .el li a {
    display: block;
    height: 56px;
    font-size: 12px;
    color: #999;
    text-indent: 0;
    text-align: center;
}
.dw_search .el .mytxt,.ef {
    display: block;
    width: 96%;
    height: 24px;
    line-height: 24px;
    color: #333;
    text-align: left;
    text-indent: 15px;
    padding: 0;
    border: 0 none;
}
.dw_search .txt .ef {
    height: 24px;
    line-height: 24px;
    color: #333;
    text-indent: 15px;
    padding: 5px 0;
    margin-top: 0;
}
.dw_search .p_but {
    position: absolute;
    width: 90px;
    height: 44px;
    line-height: 44px;
    font-weight: bold;
    font-size: 16px;
    left: 50%;
    transform: translate(-50%,0%);
    margin-top: 20px;
    box-sizing: content-box;
    
}
.p_but {
    display: inline-block;
    min-width: 80px;
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    font-family: "Microsoft YaHei";
    color: #fff;
    text-align: center;
    cursor: pointer;
    margin: 0 10px;
    background-color: #ff6000;
    border: 1px solid #ff6000;
    border-radius: 2px;
}
.search input {
    margin: 0;
}
.options{
  margin-top: 20px;
  line-height: 40px;
  font-size: 14px;
  margin-bottom: 24px;
  border: 1px solid #e8e8e8;
  border-bottom: 0 none;
}
.heightcon{
  width: 90%;
  height: 40px;
  float: left;
  /* margin: 0 auto; */
  /* background-color: #ccc; */
}
.options ul li{
    height: 40px;
    overflow: hidden;
    /* padding: 0 135px 0 105px; */
    border-bottom: 1px dotted #e8e8e8;
}
.options ul li span{
    float: left;
    width: 85px;
    height: 40px;
    color: #999;
    top: 0;
    left: 15px;
}
.allOption a{
      color: #FF6000;
}
.sectionOption{
  width: 100%;
  height: 34px;
  padding: 0;
}

.sectionOption li,.heightcon .sectionOption li{
  float: left;
  cursor: pointer;
  margin-right: 25px;
  border-bottom: 1px dotted transparent;
}
a{
  color: #999;
}
.sectionOption li a:hover,.options ul li .optionbtn a:hover{
  color: #FF6000;
}
.options ul .doubleHeight{
  /* position: absolute; */
  /* float: left; */
  height: 40px;
}
.options ul li .optionbtn{
  width: 40px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  float: left;
  cursor: pointer;
  border: 1px solid #e1e1e1;
}

@media screen and (max-width: 992px) {
    .dw_search .el, .dw_search .txt{
        clear: both;
        height: 86px;
        margin-bottom: 10px;
        border-right: 1px solid transparent;
        border-bottom: 1px solid #999;
    }
    .dw_search .dw_search_in {
    height: 470px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
}
.sectionOption{
  width: 80%;
  
  height: 34px;
  padding: 0;
}
}
</style>