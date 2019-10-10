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
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
