<template>
  <div class="home">
    <HeadNav></HeadNav>
    <div class="container">
      <div class="row">

        <router-view/>

      </div> 
    </div>
    <FootNav></FootNav>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
// import Search from './Search.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>
