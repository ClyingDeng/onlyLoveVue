
<template>
  <div>
    <nav class="navbar navbar-fixed-top myHeader">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#navbar-collapse" aria-expanded="false">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand logo" href="#"><img src="../assets/imgs/logo1.png" alt=""></a>
            </div>

            <div class="collapse navbar-collapse in" id="navbar-collapse">
                <div class="head-message visible-lg col-lg-3">
                    <i class="fa fa-volume-up" aria-hidden="true"></i>
                    <div id="nav_message">
                        <ul class="mulitline" id="nav_xiaoxi">
                            <li>唯爱(onlyLove): http://www.onlyLove.cn</li>
                            <li>客服QQ: 869537628</li>
                            <li>官方Email: onlyLove@163.cn</li>
                        </ul>
                    </div>
                </div>
                <div class="search1  visible-sm visible-xs">
                    <form>
                        <div class="search-index visible-sm visible-xs">
                            <input name="keywords" type="text" placeholder="请输入关键字" id="keywords"
                                onfocus="this.placeholder=''"
                                onkeydown="if(event.keyCode==13){SiteSearch('/search.html', '#keywords');return false};"
                                onblur="this.placeholder='请输入关键字'" />
                            <i class="fa fa-search"><input class="search_input" value=" " type="submit" /></i>
                        </div>
                    </form>
                </div>
                <ul class="nav navbar-nav navbar-right" id="mymenu">
                    <li id="nav_1">
                        <a href="/">唯爱</a>
                    </li>
                        <!-- <router-link to="/" tag='li'>唯爱</router-link> -->
                    <li id="nav_2">
                        <a href="#">搜索</a>
                    </li>
                    <li id="nav_3">
                        <!-- <span id="headingOne"> -->
                        <a id="headingOne" href="#"><span style="margin-left: 8px"></span>排行</span><span id="inversion"
                                class="fa fa-chevron-up" aria-hidden="true"></span></a>
                        <!-- </span> -->
                        <div id="collapseOne" class="">
                            <ul id="drop-nav">
                                <li id="nav_77" class="drop_nav_active"><a href="/du/77.html">狂热榜</a></li>
                                <li id="nav_78"><a href="/du/78.html">魅力榜</a></li>
                                <li id="nav_79"><a href="/du/79.html">比翼榜</a></li>
                            </ul>
                        </div>
                    </li>
                    <li id="nav_4">
                        <a href="#">热搜</a>
                    </li>
                    <li id="nav_5">
                        <a href="/shou.html">个人中心</a>
                    </li>
                    <li id="nav_6">
                        <a href="./views/friend.html">唯爱商城</a>
                    </li>
                    <li class="col-md-2" id="nav_7">
                        <a href="/link.html">登录</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="css" scoped>

</style>