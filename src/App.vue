<template>
  <div class="navigation">
    <h3>
      <router-link to="/">Home</router-link>
      <router-link to="/prod">Products</router-link>
      <router-link to="/con">Contact Us</router-link>
    </h3>
  <router-view></router-view>
</div>
 </template>

 
<script>
export default {
  name: 'App',


}
</script>

<style>
.navigation{
  background-color: grey;
  height: 50px;
  align-content: center;
}
h3{
  display: flex;
  justify-content: space-evenly;
}

</style>
