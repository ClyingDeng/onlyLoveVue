<template>
  <div>
    <HeadNav></HeadNav>
    <div class="container">
      <div class="row">
        <div class="col-lg-8"></div>
        <AsideNav class="col-lg-4"></AsideNav>
      </div>
    </div>
    <FootNav></FootNav>
  </div>
  <!-- <div class="container">
    <div class="row">
     
      <Popover style="width:290px;float:left"></Popover>
      <Popover style="width:290px;float:left"></Popover>
      <Popover style="width:290px;float:left"></Popover>
      <Popover style="width:290px;float:left"></Popover>
    </div>
  </div>-->
  <!-- <AsideNav style="float:right"></AsideNav>
  <FootNav class="F" style="float:right"></FootNav>-->
</template>

<script>
export default {
  data: function() {
    return {
      images: [
        { url: require("../assets/imgs/01.jpg"), link: "/content1" },
        { url: require("../assets/imgs/02.jpg"), link: "/content1" },
        { url: require("../assets/imgs/03.jpg"), link: "/content1" },
        { url: require("../assets/imgs/04.jpg"), link: "/content1" }
      ]
    };
  }
};
</script>