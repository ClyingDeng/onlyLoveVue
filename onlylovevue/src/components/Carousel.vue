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
  props: ["imgs"],
  data: function() {
    return {
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