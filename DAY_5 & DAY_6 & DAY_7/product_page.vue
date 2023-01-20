<template> 
    <div>
      <div class="home">
        <h2>welcome to xyz shopping</h2>  
        <button id="logout-button" @click.prevent="user_logout()" :disabled="isLoggedOut">Log out</button>
        <input type="text" placeholder="search here..." name="search" class="search" v-model="searchquery" >
          <button type="submit" @click="submit()" class="submit" ><i >submit</i></button> 
          <!-- <button  @click="changeUser()" ><i >changed</i></button>
          <button  @click="deleteUser()" ><i >delete</i></button> -->
      </div>
      <br>
        <br>
         <div class="filter_list">Filter option :
              <br>
              <br/>
              <form class="filter" >
                    <label for="price_range" id="price_range"><b>Price range</b> </label>
                    <br>
                    <input type="checkbox" name="10000-20000" id="10000-20000" value="10000-20000" >&#8377;10000 - &#8377;20000 <br>
                    <input type="checkbox" name="20000-30000" id="20000-30000" value="20000-30000">&#8377;20000 - &#8377;30000 <br>
                    <input type="checkbox" name="30000-40000" id="30000-40000" value="30000-40000">&#8377;30000 - &#8377;40000<br>
                    <input type="checkbox" name="40000-50000" id="40000-50000" value="40000-50000">&#8377;40000 - &#8377;50000 <br>
                    <input type="checkbox" name="Above - 50000" id="Above_50000" value="Above_50000"> Above &#8377; 50000 <br> <br>
                    <label for="rating"><b>Customer Ratings</b> </label>
                    <br>
                    <input type="checkbox" name="4 and above" id="4 and above" value="4 and above">4 &#9733; & above <br>
                    <input type="checkbox" name="3 and above" id="3 anda bove" value="3 and above">3 &#9733; & above <br>
                    <input type="checkbox" name="2 and above" id="2 and above" value="2 and above">2 &#9733; & above <br>
                    <input type="checkbox" name="1 and below" id="1 and below" value="1 and below">1 &#9733; & below <br>
                    <br>
                    <label for="ram"><b>RAM Size</b> </label>
                    <br>
                    <input type="radio" name="ram" id="ram" value="4GB">4GB <br>
                    <input type="radio" name="ram" id="ram" value="6GB" >6GB <br>
                    <input type="radio" name="ram" id="ram" value="8GB" >8GB <br>
                    <input type="radio" name="ram" id="ram" value="12GB" >12GB <br>
                    <br>
                    <label for="rom"><b>ROM Size</b></label>
                    <br>
                    <input type="radio" name="rom" id="rom" value="32GB" >32GB <br>
                    <input type="radio" name="rom" id="rom" value="64GB" >64GB <br>
                    <input type="radio" name="rom" id="rom" value="128GB" >128GB <br>
                    <input type="radio" name="rom" id="rom" value="256GB" >256GB <br>
                    <br>
                    <br>
                    <label for="mobile_brand"><b> Brand</b></label><br>
                    <input type="checkbox" name="Apple" id="Apple" value="Apple" >Apple <br>
                    <input type="checkbox" name="Oneplus" id="Oneplus" value="Oneplus" >Oneplus <br>
                    <input type="checkbox" name="Samsung" id="Samsung" value="Samsung" >Samsung<br>
                    <input type="checkbox" name="poco" id="poco" value="poco" >poco<br>
                    <input type="checkbox" name="Realme" id="Realme" value="Realme" >Realme <br>
                    <input type="checkbox" name="vivo_x50" id="vivo" value="vivo" >Vivo<br>
                    <br>
                  <br>
                  <center><button @onclick="search()" type="submit" placeholder="Filter_search"><i>search</i></button></center>
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
              <ProductCard
            v-for="(order, index) in filter_list"
            :key="index"
            :productobj="order" >
          </ProductCard>      
    </div>

  </template>
  <script src="./js/product.js"></script>
  <style>
  #logout-button 
  {
    float:right;
  }

  .submit
  {
    border:1px solid blue;
    background-color: blueviolet;
    color:white;


  }
  .home
{
  
    background-color: deeppink;
    font-family: 'Times New Roman', Times, serif;
    font-size: 35px;
    color: aliceblue;
    height:80px;
    width : 1425px;
   position:sticky;
   
}
 
  .product_list
  {
    
      background-color: #d9d9d9;
      border:4px solid black;
      border-radius: 20 px;
      width:300px;
      height:370px;
      margin:70px;
      float:right; 
      border-radius: 20px;
      column-gap: 10px;
  
  }
  .filter_list {
       float: left;  
      background-color: antiquewhite;
      border:1px solid black;
      width:300px;
      height:1250px;
      border-collapse:collapse;
      padding: 3px 7px,6px 5px
  }
 
  @media(max-width:105px)
          {
          body
          {
              width:100%;
          }
        }
  </style>
  
     