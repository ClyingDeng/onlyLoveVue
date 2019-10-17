
<template>
 <div>
   <HeadNav></HeadNav>
    <div class='row'>
  
      <div class="middle col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <ul>
        <li class="col-lg-2 col-md-2 col-sm-2 col-xs-6 ">
          <em>520</em>
          <p>总成长值</p>
        </li>
        <li class="col-lg-2 col-md-2 col-sm-2 col-xs-6" >
          <em>2</em>
          <p>会员等级</p>
        </li>
        <li id="much" class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <img class="headphoto" src="../assets/imgs/4.jpg" alt />
          <p>
            <span>夹心饼干</span>
            <img class="member" src="../assets/imgs/qqhuiyuan.png" alt />
          </p>
          <p>年超级会员2020-10-07到期</p>
          <p><span class="member-button" >续费年费会员</span></p>
        </li>
        <li class="col-lg-2 col-md-2 col-sm-2 col-xs-6 ">
          <em>230</em>
          <p>积分</p>
        </li>
        <li class="col-lg-2 col-md-2 col-sm-2 col-xs-6" >
          <em>23</em>
          <p>积分兑换</p>
        </li>
      
      </ul>
      </div>
    </div>
    <div class="member-type">
      <div class="open-member">
        <p class="title">开通会员 做特权王者！</p>
        <div class="detail-type">
          <div class="member-card">
          <p  class="memberphoto"><img src="../assets/imgs/huiyuan-.png" alt="">唯爱会员</p>
          
          <p >全球共1亿人正通过唯爱会员来寻找自己的生活伴侣</p><br>
          <p class="save-member"><span>续费会员</span></p>

          </div>
          <div class="process">
            <div style="margin-bottom:20px;">
 <span>搜索条件:</span><el-progress :text-inside="true" :stroke-width="24" :percentage="70" status="success"></el-progress>
  </div> 
  <div>
<span>优惠折扣:</span><el-progress :text-inside="true" :stroke-width="22" :percentage="88" status="warning"></el-progress>
</div>
          </div>
        </div>
       
         </div>
    </div>
    <div><FootNav></FootNav></div>
    </div>
 
</template>
<style  scoped>

.middle{
  margin-top:100px; 
  height: 300px;
  /* background-color: #ccc; */
  
}
.middle li em,p{
 
  text-align: center;
       

}
.memberphoto{
  font-size: 25px;
}
.headphoto{
    margin:0 auto;
 display: block;
 text-align: center;
}
li{
    list-style: none;
    float: left;
    padding: 0;
  
margin-top:150px; 

}
#much{
  margin-top: 50px;
}
em {
  display: block;
  font-style: normal;
  font-size: 40px;

}


.headphoto {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  /* text-justify: auto; */
  margin-bottom: 10px;
 
}
.member{
  width: 20px;
  height: 20px;
}
.member-button{
  border-radius: 10%;
  background-color: coral;
    font-size: 20px;
   text-align: center;
  color: #fff;
}
.middle p{
  line-height: 20px;
  height: 20px;
}
/* .member-type{
  width: 100%;
  height: 600px;
  background-color: #ccc;

} */

.open-member{
  width: 90%;
  height: 100%;
  background-color: rgba(248, 240, 233,0.8);
  /* opacity: 50%; */
  margin: 0 auto;
  /* margin-top: 10px; */
}
.title{
 font-size: 25px;
  margin: 30px;
}
.detail-type{
  width: 80%;
  height: 80%;
  margin: 0 auto;
 margin-bottom: 80px;
  border: 1px solid #ccc;
}
.member-card {
  
  width: 40%;
 margin: 0 auto;
 margin-top:50px; 
  border-radius: 2%;
  border: 1px solid #ccc;
}
.memberphoto{
  text-align: center;
  margin-top: 10px;
}
.memberphoto img{
  width: 40px;
  height: 40px;
}
.detail-type div  p{
  text-align: center;
  
}
.save-member span{
  font-size: 20px;
  border-radius: 10%;
  background-color: coral;
  color: #fff;

}
.process{
  width: 80%;
  height: 100px;
  margin-top: 80px;
  margin-bottom: 80px;
}
.process span{
  font-size: 20px;
}
@media screen  and (max-width: 768px) {
  .middle{
    height: 900px;
  }
  
}

</style>