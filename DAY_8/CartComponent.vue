<template>
    <div class="cart">
        <div>
           <center> <h1 class="head"> shopping cart</h1></center>
            
    </div>
     <center> <div class="product_details" v-for="(product,index) in  getcartdetails" :key=index >
            <p>{{ product.name }}</p>
            <div> 
                <button >+</button>
                <span >1</span>
                <button >-</button>
            </div>
        <p> {{ product.price.priceDisplay }}</p>
        <br><br>
        <!-- <button @click="checkout()">Checkout</button>
  <p v-if="checkoutStatus">{{checkoutStatus}}</p>
           -->
        </div></center>
        <footer class="footer">
            <button @click="place_order" class=""> Place Order</button>
        </footer>
      

    </div>
</template>
<style>
.product_details{
    border:4px solid black;
    background-color: lightgray;
    border-radius:8px;
    margin:25px;
    width:1100px;
    height:150px;
    margin-right: 150px;
    /* float:left; */
    
}
.head
{
    border:2px solid black;
    background-color: rgb(232, 161, 161);
    width:1100px;
    margin-right: 150px;
   
}
.place_order
{

}

</style>
<script src="./js/CartDetails.js"></script>
