<template>
    <div class="indexcontent">
        <div class="container">
      <div class="row">
        <div class="col-lg-8 indexLeft">
            <!-- <h1>首页</h1> -->
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>

                    <!-- Wrapper for slides -->
                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <img src="../assets/imgs/lunbo1.jpg" alt="...">
                            <div class="carousel-caption">
                                
                            </div>
                        </div>
                        <div class="item">
                            <img src="../assets/imgs/lunbo2.jpg" alt="...">
                            <div class="carousel-caption">
                            </div>
                        </div>
                        <div class="item">
                            <img src="../assets/imgs/lunbo3.jpg" alt="...">
                            <div class="carousel-caption">
                            </div>
                        </div>
                        
                    </div>

                    <!-- Controls -->
                    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <div class="wenzhang">
                    <!-- <span style="display: block; width: 750px;background-color: #EAEAED"><h4 style="width: 120px"><i class="fa fa-bars" aria-hidden="true" style="margin-right:0"></i>最新文章</h4><p>New Article</p></span> -->
                    <h4 class="index-title homeh4" style="animation: 0.8s ease 0s 1 normal none running fuxiasuo">
                        <a href="#" title="" style="text-decoration:none">
                            <i class="fa fa-th-list"></i>
                            最新文章
                            <small>New Article</small>
                        </a>
                    </h4>
                    <div class="media moveLeft "   v-for="key in conditions">
                        <div class="media-left media-middle ">
                            <a href="#">
                                <img class="media-object Imges" src="../assets/imgs/wenzhang1.jpg" alt="..." style="padding-left: 17px">
                                <!-- <img class="media-object Imges" src="http://localhost/public/hspicture/{{key.con_pic_1}}" alt="..." style="padding-left: 17px"> -->
                            </a>
                        </div>
                        <div class="media-body ">
                            <h4 class="media-heading" style="font-weight: 700;background-color: transparent">{{key.con_words.substr(0, [6])}}...</h4>
                            <p>
                                <a href="#" style="text-decoration: none;color: black">
                                    <p id="q1">"{{key.con_words}}"</p>
                                </a>
                            </p>

                            <ul class="q2" style="font-size:12px; list-style: none;">
                                <li style="float: left;">
                                    <a title>
                                        <i class="fa fa-calendar" aria-hidden="true" style="margin-left:-40px"></i>
                                        {{key.con_time.substr(0, [10])}}
                                    </a>
                                </li>
                                <li style="float: left;">
                                    <a href="#">
                                        <i class="fa fa-user-o" aria-hidden="true"></i>
                                        {{key.nickName}}
                                    </a>
                                </li>
                                <li style="float: left;">
                                    <a href="#">
                                        <i class="fa fa-commenting-o" aria-hidden="true"></i>
                                        <em>0</em>
                                    </a>
                                </li>
                                <li style="float: left;">
                                    <a title>
                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                        <em>{{key.see}}</em>
                                    </a>
                                </li>
                                <li style="float: right;">
                                    <a href="#">
                                        <i class="fa fa-th-list"></i>
                                        谈天说地
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="media moveLeft" style="background-color: #fefcfa;">
                        <div class="media-left media-middle ">
                            <a href="#">
                                <img class="media-object Imges" src="../assets/imgs/wenzhang2.jpg" alt="...">
                            </a>
                        </div>
                        <div class="media-body ">
                            <h4 class="media-heading" style="font-weight: 700;">曾经，我以为......</h4>
                            <p>
                                <a href="#" style="text-decoration: none;color: black">
                                    <p id="q1">曾经，我以为有了你我就是世界上最快乐的，但，我不是……曾经，我以为有了你我就是世界上最幸福的，
                                        但，我不是……曾经，我以为爱上你是我今生最大的幸运，但，我不是……</p>
                                </a>
                            </p>

                            <ul class="q2" style="font-size:12px; list-style: none;">
                                <li style="float: left;">
                                    <a title>
                                        <i class="fa fa-calendar" aria-hidden="true" style="margin-left:-40px"></i>
                                        " 2019-08-29"
                                    </a>
                                </li>
                                <li style="float: left;">
                                    <a href="#">
                                        <i class="fa fa-user-o" aria-hidden="true"></i>
                                        彼爱
                                    </a>
                                </li>
                                <li style="float: left;">
                                    <a href="#">
                                        <i class="fa fa-commenting-o" aria-hidden="true"></i>
                                        <em>0</em>
                                    </a>
                                </li>
                                <li style="float: left;">
                                    <a title>
                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                        <em>99</em>
                                    </a>
                                </li>
                                <li style="float: right;">
                                    <a href="#">
                                        <i class="fa fa-th-list"></i>
                                        彼爱无岸
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

        </div>
        <AsideNav class="col-lg-4"></AsideNav>
      </div>
    </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            conditions:[]
        }
    },
    //组件创建完成后执行的操作
      created(){
        this.$axios.get('http://localhost:3000/allCondition')
        .then(res => {
          console.log('查询结果：' )
          console.log(res.data.data)
          //拿到后台数据赋值给前端
          this.conditions = res.data.data
        })
        .catch(err => {
          console.log('错误信息：' + err)
        })
      }
}
</script>

<style lang="css" scoped>
.indexcontent{
  margin-top: 100px;
}
.indexLeft{
    margin-top: 20px;
}
i {
            margin-right: 0;
            color: #ff6700;
        }



        .media-body ul li a {
            text-decoration: none;
        }

        #q1 {
            line-height: 25px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            max-height: 72px;
            overflow: hidden;
            text-overflow: ellipsis;
            text-overflow: -o-ellipsis-lastline;
        }

        .media-heading:hover {
            color: #ff6700;
        }

        /* .media-heading a{
            text-decoration: none;
        } */
        .moveLeft {
            background-color: #e7e7e7;height: 150px;padding-top: 13px;height:150px;
            transition: all .6s linear;
        }

        .moveLeft:hover {
            margin-left: -15px;
            background: rgba(245, 251, 255, 0.8);
        }

        @media screen and (max-width: 700px) {
            .Imges {
                width: 170px;
                height: 100px;
            }
        }

        @media screen and (max-width: 585px) {
            .q2 li {
                margin-right: 2px
            }
        }

        @media screen and (min-width: 585px) {
            .q2 li {
                margin-right: 20px
            }
        }
</style>