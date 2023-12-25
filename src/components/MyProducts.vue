
<template>
<br>
<h1>OUR PRODUCTS</h1>
 <table class="item" v-for="item in list" :key="item.id"> 
    <td><img :src="item.image" width="200vw"/></td><br>
    <td>{{ item.name }}</td>
</table>
</template>

<script>

import axios from "axios";
export default{
            name: 'MyProducts',
  data(){
    return {
      list:[]
    }
  },
  async mounted(){
      let result = await axios.get("https://api.escuelajs.co/api/v1/categories");
      console.warn(result.data);
      this.list =result.data;
  }

};
</script>

<style>
table{
  display: inline-block;
  flex-wrap: wrap;
  padding: 20px;
  background-color: rgb(102, 202, 147);
  border-radius: 2px;
  border-style: double;

}
td{
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>