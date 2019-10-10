<template>
  <div>
    <!-- <Carousel :imgs="images"></Carousel> -->
    <!-- <AsideNav></AsideNav> -->
    <!-- <Popover></Popover> -->
    <HeadNav></HeadNav>
    <AsideNav></AsideNav>
    <FootNav class="F"></FootNav>
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