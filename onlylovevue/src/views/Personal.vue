<template>
  <div>
    <Carousel :imgs="imgs"></Carousel>
    <asideNav></asideNav>
    <h1>personal</h1>
  </div>
</template>
<script>
export default {
  data: function(){
    return{
      imgs: [
        { url: require("../assets/imgs/01.jpg"), link: '/content1' },
        { url: require("../assets/imgs/02.jpg"), link: '/content1' },
        { url: require("../assets/imgs/03.jpg"), link: '/content1' },
        { url: require("../assets/imgs/04.jpg"), link: '/content1' }
      ]
    }
  }
}
</script>