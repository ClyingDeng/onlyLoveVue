<template>
  <div id="appVue">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/personal">personal</router-link>|
      <router-link to="/register">register</router-link>|
      <router-link to="/login">login</router-link>
    </div> -->
    <!-- <HeadNav></HeadNav> -->
    <router-view v-if="alive"/>
  </div>
</template>

<style>

/* html,body,#app{
  height: 100%;
} */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}


</style>
<script>
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      alive: true
    }
  },
  methods: {
    reload() {
      this.alive= false
      this.$nextTick(() => {
        this.alive = true
      })
    }
  }
}
</script>
