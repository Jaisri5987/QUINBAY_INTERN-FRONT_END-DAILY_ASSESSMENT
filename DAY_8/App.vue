<template>
  <div id="app">
    <router-view></router-view>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <LoginPage v-if="Object.keys(user).length == 0"/> -->
    <!-- <home_page :name="user.name" v-else/>  -->
    <!-- <product_page/> -->
    <!-- <router-view /> -->
    <!-- <a href ='/LoginPage'>click</a> -->
     <!-- <router-view/> -->
     <!-- <vue_day4/> -->


</div>
</template>

<script>
 import {mapGetters} from "vuex";
//  import LoginPage from './components/LoginPage.vue';
//  import home_page from './components/home_page.vue';
//  import Products from '.component
// import vue_day4 from './components/vue_day4.vue'
// import detailsPage from './components/detailsPage.vue'


//  import product_page from './components/product_page.vue'


export default {
  name: 'App',
  components: {
    // LoginPage,
    // home_page
    // product_page
    // vue_day4,
    // detailsPage
},
data()
  {
    return{
        
    }
  },
  computed:{
    ...mapGetters('UserStore',['user'])
  }
}
// methods:{

// }

// }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
