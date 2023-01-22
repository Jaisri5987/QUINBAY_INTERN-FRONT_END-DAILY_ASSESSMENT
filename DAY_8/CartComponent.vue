<template>
    <div class="cart">
        <div>
           <center> <h1 class="head"> shopping cart</h1></center>
            
    </div>
    <h1 v-if="isplaced" class="placed_order">your order has been placed!!!!!!</h1>
    <h1 v-if="isplaced" class="placed_order">Thank you..Revisit again here to buy good products ......</h1>
    <h3 v-if="isplaced" class="place_order">Redirecting.....</h3>
     <center> <div class="product_details" v-for="(product,index) in  getcartdetails" :key=index >
            <p>{{ product.name }}</p>
            <div> 
                <button >+</button>
                <span >1</span>
                <button >-</button>
            </div>
        <p> {{ product.price.priceDisplay }}</p>
        <button @click="removecartdetails(product)" type="button" class="remove">remove</button>
        <!-- <button @click="checkout()">Checkout</button>
  <p v-if="checkoutStatus">{{checkoutStatus}}</p>
           -->
        </div></center>
        <footer class="footer">
            <button @click="orderplaced" class=""> Place Order</button>
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
    height:180px;
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
.remove
{
    background-color: red ;
}
.placed_order{
    color:blue;
}
.place_order{
    font-family: italic;
}
</style>
<script src="./js/CartDetails.js"></script>
