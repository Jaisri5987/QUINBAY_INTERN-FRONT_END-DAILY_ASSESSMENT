<template>
    <div>
        <h1 style="background-color: blue; color:white"> PRODUCT LIST</h1>
        <div class="filter_list">Filter option :{{ filteredProducts }}
            <br>
            <br/>
            <!-- <p>Price Range</p> -->
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
                <center><button  onclick="filter_search()" type="submit" placeholder="Filter_search"><i>Filter_search</i></button></center>
            </form>
        </div>
        <div class="product_list" v-for="(product_list,index) in products" :key="index" >
            <p>{{ product_list.mobile_name }}</p>
            <center><img :src="product_list.image" width="160" height="170"/></center>
            <p>{{ product_list.brand }}</p>
            <p>{{product_list.price  }}</p>
            <p>{{ product_list.ram }}</p>
            <p>{{ product_list.rom }}</p>
            
        <br>
            <!-- <button @click="count++" v-bind:disabled="blockCount">Add to cart</button> -->
            <button :disabled="product_list.count===0" @click="reduceQuantity(product_list)">Add to cart </button>
            <p>Stock {{ product_list.count }}</p>
            <p v-if="product_list.count== 0">OUT OF STOCK</p>
            <p v-else>{{  }}</p>
            <br>

            <div v-for="(product, index) in computedProducts" :key="index">
      <p>{{product.brand}}</p>
      <p>{{ product.ram }}</p>
            </div>
        
            <!-- <button @click="click(mobile_name)">button</button> -->
        </div>     
    </div>  

</template>


<script src="./js/vue_day4.js"></script>
<style>
.product_list
{
    display:grid; 
    background-color: #d9d9d9;
    border:4px solid black;
    border-radius: 20 px;
    width:300px;
    height:650px;
    margin :25px;
    float:right; 
    border-radius: 20px;
    column-gap: 15px;

}
.filter_list {
     float: left;  
    background-color: antiquewhite;
    border:1px solid black;
    width:300px;
    margin:5px;
    border-collapse:collapse;
    padding: 3px 7px,6px 5px
}
@media(max-width:300px)
        {
        body
        {
            width:100%;
        }
      }

 
  
      
        /* b
        {
            background-image: url("data:image/jpeg;base64,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");
        } */  
</style>


