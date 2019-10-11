<template>
  <div class="home">
    <HeadNav></HeadNav>
    <div class="container">
      <div class="row">
        <router-view/>
        <!-- <div class="col-lg-8">
          
        </div>
        <AsideNav class="col-lg-4"></AsideNav>-->
      </div> 
    </div>
    <FootNav></FootNav>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
// import Search from './Search.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
