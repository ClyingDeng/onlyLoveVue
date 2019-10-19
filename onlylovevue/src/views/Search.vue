<template>
  <div class="search">
    <div class="content1">
      <div class="row">
          <div class="" style="margin-top: 20px">
                <div class="col-md-12 col-xs-12" id="searchcon" style="background-color: rgba(255,255,255,0.7);padding-top: 10px;position: relative;">
            <form name="searchForm" method="post" action="" autocomplete="on">
                  <div class="dw_search">
                                <div class="dw_search_in">
                                    <!-- ID搜索 -->
                                    <div class="el on el_q col-xs-12 col-md-3 ">
                                        <ul id="kwdTypeSelUl">
                                            <li>ID搜索<em class="dicon Dm"></em></li>
                                            <li><a onclick="">搜账号</a></li>
                                        </ul>
                                        <p class="ipt">
                                        <input autocomplete="on" type="text" class="ef" v-model="Id"  placeholder="请输入ID">
                                        </p>               
                            </div>
                                    <!--性别 -->
                                    <div class="txt  col-xs-12 col-md-2">
                                        <p class="hdl">昵称</p>
                                        <input autocomplete="on" type="text" class="ef" v-model="nickName" placeholder="输入昵称">
                                        <!-- <input name="jobarea" id="jobarea" type="hidden" value="070300" /> -->
                                    </div>
                    
                                    <!-- 年龄 -->
                                    <div class="txt  col-xs-12 col-md-2" id="indtype_click">
                                        <p class="hdl">性别年龄</p>
                                        <input autocomplete="on" id="indtype_input" v-model="age" type="text" class="ef" placeholder="输入年龄" value="">
                                        <!-- <input name="industrytype" type="hidden" id="indtype_code" value=""/> -->
                                    </div>
                                    <!-- 职能类别 -->
                                    <div class="txt col-xs-12 col-md-2" id="funtype_click">
                                        <p class="hdl">年龄</p>
                                        <input autocomplete="on" id="funtype_input" v-model="sex" type="text" class="ef" placeholder="输入职业" value="" />
                                        <!-- <input name="funtype" type="hidden" id="funtype_code" value=""/> -->
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
                 <span>年龄：</span>
                 <div class="heightcon">
                   <ul class="sectionOption">
                   <li class="allOption"><a href="">所有</a></li>
                   <li v-for="key in ages"><a href="">{{key}}</a></li>
                 </ul>
                 </div>
                  <!-- <span class="optionbtn" :click="more"><a>更多+</a></span>
                  <span class="optionbtn"><a>多选</a></span> -->
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
               <li>
                 <span>是否酗酒：</span>
                 <ul class="sectionOption">
                   <li class="allOption"><a href="">所有</a></li>
                   <li><a href="">是</a></li>
                   <li><a href="">否</a></li>
                 </ul>
               </li>
               
               <li :class="className1">
                 <span>是否抽烟：</span>
                 <ul class="sectionOption">
                   <li class="allOption"><a href="">所有</a></li>
                   <li><a href="">是</a></li>
                   <li><a href="">否</a></li>
                 </ul>
               </li>
               <li :class="className1">
                 <span>有无孩子：</span>
                 <ul class="sectionOption">
                   <li class="allOption"><a href="">所有</a></li>
                   <li><a href="">有</a></li>
                   <li><a href="">无</a></li>
                 </ul>
               </li>
               <li :class="className1">
                 <span>薪资：</span>
                 <ul class="sectionOption">
                   <li class="allOption"><a href="">所有</a></li>
                   <li v-for="key in salary"><a href="">{{key}}</a></li>
                 </ul>
               </li>
               <li :class="className1">
                 <span>车房状况：</span>
                 <ul class="sectionOption">
                   <li class="allOption"><a href="">所有</a></li>
                   <li><a href="">有车</a></li>
                   <li><a href="">有房</a></li>
                   <li><a href="">有车有房</a></li>
                 </ul>
               </li>
               <li :class="className1">
                 <span>是否想要孩子：</span>
                 <ul class="sectionOption">
                   <li class="allOption"><a href="">所有</a></li>
                   <li><a href="">是</a></li>
                   <li><a href="">否</a></li>
                 </ul>
               </li>
               <li @click="openList" :class="className">
                 <div class="out">
                 <span class="openFont"> <i :class="className2"></i></span>
                 </div>
               </li>
             </ul>
           </div>
        </form>
        <div id="page-top">
          <h3>搜索结果 ></h3>
          <section id="work" class="portfolio-mf sect-pt4 route">
            <div class="container">
              <div class="row">
                <div class="col-md-4"  v-for="key in otherUserInfos">
                  <div class="work-box" v-if="key.isShow || key.isName || key.isSex || key.age">
                    <a :href="'http://pzc93h51i.bkt.clouddn.com/' + key.headPic" data-lightbox="gallery-mf">
                      <div class="work-img">
                        <img :src="'http://pzc93h51i.bkt.clouddn.com/' + key.headPic" alt="" class="img-fluid">
                      </div>
                      <div class="work-content">
                        <div class="row">
                          <div class="col-sm-8">
                            <h2 class="w-title">{{key.nickName}}</h2>
                            <p>ID:  <span>{{key.base_info_Id}}</span></p>
                            <p v-show="key.sex" class="changp"><span class="w-date">{{key.sex}}</span> / <span class="w-date">{{key.age}}</span> </p>
                            <p v-show="key.province" class="changp"><span class="w-date">{{'地址：' + key.province}}</span> / <span class="w-date">{{key.city}}</span> / <span class="w-date">{{key.location_detail}}</span> </p>
                            <p v-show="key.height" class="changp"><span class="w-date">{{'身高：' + key.height}}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span class="w-date">{{'体重：' + key.weight + 'kg'}}</span></p>
                            <div class="w-more" v-show="key.love_description">
                              <span class="w-ctegory">{{'爱情宣言：' + key.love_description}}</span> 
                            </div>
                          </div>
                          <div class="col-sm-4">
                          <div class="w-like fontSize">
                            <router-link to='/Condition' class="ion-ios-plus-outline">详情</router-link>
                            <!-- <span class="ion-ios-plus-outline">详情</span> -->
                          </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
               
                
              </div>
            </div>
          </section>
    </div>
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
            ages:['22岁以下','22-25岁','26-28岁','29-31岁','32-35岁','36-40岁','41-45岁','46-50岁','51-60岁','60岁以上'],
            height:['150cm以下','151-155cm','156-160cm','161-165cm','166-170cm','171-175cm','176-180cm','181-185cm','186cm以上'],
            weight:['40kg以下','41-45kg','46-50kg','51-55kg','56-60kg','61-65kg','66-70kg','71-75kg','76-80kg','80-90kg','90kg以上'],
            education:['高中以下','高中','大专','本科','硕士','博士','博士后'],
            salary:['2k以下','2k-4k','4-6k','6-8k','8-10k','10-15k','15-20k','20k以上'],
            userInfo:{},     //当前用户信息
            otherUserInfos:[],     //能够搜索用户信息
            className:'liShow',
            className1:'liHidden',
            className2:'glyphicon glyphicon-menu-down fontStyle',
            msg:'1',
            // searchInfo:{Id:'',nickName:'',age:'',sex:''}
            Id:'',
            nickName:'',
            age:'',
            sex:''
        }
    },
    watch:{
      Id:{
        handler:function(IdName) {
          console.log('昵称搜索：' + IdName)
          console.log(this.otherUserInfos[0].base_info_Id)
          for(let i = 0; i < this.otherUserInfos.length; i++){
            if(this.otherUserInfos[i].base_info_Id.toString().indexOf(IdName) != -1){
              // console.log('有')
              this.otherUserInfos[i].isShow = true
              // console.log(this.otherUserInfos[i])
              
            }else{
              this.otherUserInfos[i].isShow = false
              // console.log((this.otherUserInfos[i].isShow))
              // console.log('没有')
            }
          }
        }
      },
      nickName:{
        handler:function(name) {
          console.log('昵称搜索：' + name)
          console.log(this.otherUserInfos[0].nickName)
          for(let i = 0; i < this.otherUserInfos.length; i++){
            if(this.otherUserInfos[i].nickName.toString().indexOf(name) != -1){
              // console.log('有')
              this.otherUserInfos[i].isName = true
              console.log(this.otherUserInfos[i].nickName)
              
            }else{
              this.otherUserInfos[i].isName = false
              // console.log((this.otherUserInfos[i].isShow))
              // console.log('没有')
            }
          }
        }
      }
      // msg:{
      //   handler:function(message) {
      //     console.log(message)

      //   }
      // }
    },
    methods:{
      openList(){
        if(this.msg == '1'){
          this.msg = '2'
          console.log(this.msg)
          this.className1 = 'liShow'
          this.className2 = 'glyphicon glyphicon-menu-up fontStyle'
        }else{
          this.msg = '1'
          this.className1 = 'liHidden'
          this.className2 = 'glyphicon glyphicon-menu-down fontStyle'
        }

      }
    },
    //组件创建完成后执行的操作
      created(){
        console.log(JSON.parse(localStorage.getItem('myInfo')))
        this.userInfo = JSON.parse(localStorage.getItem('myInfo'))
        //用当前用户的会员等级查询用户的结果
        this.$axios.get('http://localhost:3000/search/member')
        .then(res => {
          console.log('看看结果：' )
          console.log(res.data.data[0])   //不是会员为undefined
          //拿到后台数据赋值给前端
          if(!res.data.data[0]){
            alert('抱歉，您还不是会员！')
          }else{
            console.log('是会员')
            console.log(res.data.data)
            this.otherUserInfos = res.data.data
          }
          
        })
        .catch(err => {
          console.log('错误信息：' + err)
        })




      }
}
</script>

<style lang="css" scoped>
.liShow{
  display: block;
}
.liHidden{
  display: none;
}
.out{
  width: 20%;
  margin: 0 auto;
}
.options ul li .openFont{
  /* display: block;*/
  margin: 0 auto; 
  color: #FF6000;
  text-align: center;
  /* border: 1px soild #FF6000; */
  border-left: 1px solid #FF6000;
  border-bottom: 2px solid #FF6000;
  border-right: 1px solid #FF6000;
  cursor: pointer;
}
.options ul li :hover{
  color: #999 !important;

}
.fontStyle{
  background-color: transparent;
  color: #FF6000;
}

.fontSize{
  font-size: 18px;
  margin-top: 8px;
}
.fontSize:hover{
  color: #aaa;
}
.changp:hover{
  color: #FF6000;
}
.w-more {
  height:20px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
}
.img-fluid{
  width: 100%;
}
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
    margin-bottom: 20px;
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
.work-img > img{
  height: 230px;
}
.w-title{
  padding: 0;
  margin: 0;
  font-size: 24px;
  color: #FF6000;
}
.work-content p {
  font-size: 12px;
  color: #aaa;
}
.w-more{
  font-size: 12px;
}
.work-content .w-more .w-ctegory {
    color: #999;
}
.work-content .w-more .w-ctegory:hover {
    color: #FF6000;
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