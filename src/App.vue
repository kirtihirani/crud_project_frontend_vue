<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Nav_bar />
  <Home />
  <AddDepartment />
  
</template>

<script>
import Nav_bar from './components/navbar.vue';
import Home from './components/Home.vue';
// import AddEmployee from './components/AddEmployee.vue';
// import HelloWorld from './components/HelloWorld.vue'
import AddDepartment from './components/AddDepartment.vue';

export default {
  name: 'App',
  components: {
    Nav_bar,
    Home,
    AddDepartment
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
