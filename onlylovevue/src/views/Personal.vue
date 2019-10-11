<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
 
        </div>
        <!-- <AsideNav class="col-lg-4"></AsideNav> -->
      </div>
    </div>
    <!-- <AsideNav></AsideNav> -->
  </div>
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