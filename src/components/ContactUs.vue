<template>
  <main>
    <div id="app"><br>
      <h1>CONTACT US</h1>
        <form @submit.prevent="submitForm">
          <div class="form-group">
              <label for="">Name</label>
              <input v-model="formData.name" type="text" id="name" required>
          </div>
          <div class="form-group">
              <label for="">Email</label>
              <input v-model="formData.email" type="email" id="email" required>
          </div>
          <div class="form-group">
              <label for="">Phone Number</label>
              <input v-model="formData.phoneNumber" type="text" id="phoneNumber" required>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div v-if="orderSummitted">
          <h2>Thank you for contact us!</h2>
          <!-- <p><strong>Name: </strong>{{ formData.name }}</p>
          <p><strong>Email: </strong>{{ formData.email }}</p>
          <p><strong>Phone Number#: </strong>{{ formData.phoneNumber }}</p> -->
        </div>
    </div>
  </main>
  </template>
  
  <script>
  export default{
    name: 'ContactUs',
    data(){
      return{
        formData:{
          name: '',
          email:'',
          phoneNumber:'',
        },
        orderSummitted: false,
      }
    },
    methods:{
      submitForm(){
          this.orderSummitted = true;
          this.name='';
          this.email= '';
          this.phoneNumber= '';
      }
    }
  }
  </script>
  
<style>
  label
  {
     display: block;
     margin-bottom: 5px;
  }
  input{
    width: 80%;
    padding: 10px;
    font-size: 15px;
    margin-bottom: 10px;
  }
  button{
    padding: 15px;
    font-size: 15px;
    background-color: blue;
    color:beige;
    border: none;
    cursor: pointer;
  }
  
</style>