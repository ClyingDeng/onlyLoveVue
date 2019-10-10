<template>
  <el-carousel ref="carousel" :interval="5000" style="width:800px;margin:0 auto">
    <el-carousel-item v-for="item in imgs" :key="item.url" style="width:800px;margin:0 auto">
      <img :src="item.url" style="height: 300px" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data: function() {
    return {
      imgs: [
        { url: require("../assets/imgs/01.jpg"), link: '/content1' },
        { url: require("../assets/imgs/02.jpg"), link: '/content1' },
        { url: require("../assets/imgs/03.jpg"), link: '/content1' },
        { url: require("../assets/imgs/04.jpg"), link: '/content1' }
      ]
    };
  },
  methods: {
    linkTo() {
      let activeIndex = this.$refs.carousel.activeIndex;
      this.$router.push(this.imgs[activeIndex].link);
    }
  }
};
</script>