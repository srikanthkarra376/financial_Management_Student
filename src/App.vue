<template>
  <div id="app">
    <NavBar/>
    <div class="container">
       <router-view/>
    </div>
    
    
  </div>
</template>

<script>
import NavBar from './Components/navBar'
export default {
  name: 'app',
  components :{
    NavBar
  }
}
</script>

<style scoped>

</style>
