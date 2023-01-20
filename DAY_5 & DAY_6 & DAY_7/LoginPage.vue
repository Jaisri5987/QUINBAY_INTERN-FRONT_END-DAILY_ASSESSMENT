<template>
    <div>
        <div>
        <h1 style="background-color:wheat; font-family:Times New Roman, Times, serif; font-size:80px">login page</h1>
    </div>
        <form class="form">   
      <center><img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg" width="200px" height="200px" class="image"/></center>  
        <label for="username">username </label>
        <input  v-model="users.name" type="text" name="username" placeholder="username" class="input" /><br><br>
        <label for="password">password  </label>
        <input v-model="users.pass" type="password" name="password" placeholder="password" class="input"/><br><br>
        <button @click="loginCheck" class="login">Login</button><br><br>
        <button @click="guest" type="button" class="guest">continue as geust user</button>
        </form>
    </div>
</template>
<script src="./js/LoginPage.js"></script>

<style>
@import '/Users/jaisri/Documents/vue.js/vue-learn/src/components/css/LoginPage.css'
</style>