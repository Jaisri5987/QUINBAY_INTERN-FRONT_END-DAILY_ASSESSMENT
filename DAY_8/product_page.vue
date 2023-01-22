<template> 
    <div>
      <div class="home">
        <h2>welcome to xyz shopping</h2>  
        <button id="logout-button" @click.prevent="user_logout()">Log out</button>
        <input type="text" placeholder="search here..." name="search" class="search" v-model="searchquery" >
          <button type="submit" @click="productfetch()" class="submit" ><i >submit</i></button>  
    
          <br/>
        <button  @click="cartcomp()" class="cart"><i class="fa fa-cart-plus fa-lg"  style="color: black;margin: auto;"></i></button>  
          
          <!-- <button  @click="changeUser()" ><i >changed</i></button>
          <button  @click="deleteUser()" ><i >delete</i></button> -->
      </div>
      <br>
        <br>
         <div class="filter_list" >Filter option :
              <br>
              <br/>
              <form class="filter" >
            <label> Mobilename :</label>
            <input type="text" placeholder="enter brand name" />
            <br/> 
            <br/>
            <label> Brandname :</label>
            <input type="text" placeholder="enter brand name" />
            <br/>
            <br/>
            <label> RAM Size :</label>
            <input type="text" placeholder="enter RAM" />
            <br/>
            <br/>
            <label> ROM Size :</label>
            <input type="text" placeholder="enter rom" />
            <br/>
            <br/>
            <label> Price :</label>
            <input type="number" placeholder="enter Price" />
            <br/>
            <br/>
            <center><button  @click="filter1" type="button" placeholder="Filter_search"><i>Filter_search</i></button></center>
          
              </form>
      </div>
  
      <!-- <div class="product_list" v-for="(product_list,index) in products" :key="index" >
              <p>{{ product_list.mobile_name }}</p>
              <center><img :src="product_list.image" width="120" height="140"/></center>
              <p>{{ product_list.brand }}</p>
              <p>{{product_list.price  }}</p>
              <p>{{ product_list.ram }}</p>
              <p>{{ product_list.rom }}</p>
              
          <br> -->
               <!-- <button @click="count++" v-bind:disabled="blockCount"></button>  -->
               <!-- <button :disabled="product_list.count===0" @click="reduceQuantity(product_list)">Add to cart </button>
              <p>Stock {{ product_list.count }}</p>
              <p v-if="product_list.count== 0">OUT OF STOCK</p>
              <p v-else>{{  }}</p>
              <br>
  
              <div v-for="(product, index) in computedProducts" :key="index">
        <p>{{product.brand}}</p>
        <p>{{ product.ram }}</p>
              </div>  -->
          
              <!-- <button @click="click(mobile_name)">button</button> -->
              <p v-if="isErrorOccured">There is some error in your page!!!! please try after some time</p>
              <ProductCard
            v-for="(order, index) in filter_list"
            :key="index"
            :productobj="order" >
          </ProductCard>      
    </div>

  </template>
  <script src="./js/product.js"></script>
  <style>
  @import '/Users/jaisri/Documents/vue.js/vue-learn/src/components/css/product_page.css' 
 
  
  </style>
  
     