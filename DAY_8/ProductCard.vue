<template>
 
     <div class="productCard" >
              <p>{{ productobj.name }}</p>
              <center><img :src="productobj.images[0]" width="150" height="150"/></center>
              <p>{{ productobj.brand }}</p>
              <p>{{productobj.price.priceDisplay  }}</p>
              <p>{{ productobj.itemcount }}</p>
              <p>{{ productobj.merchantName }}</p>
              <button @click="add_to_cart()">Add to cart </button>
              <button  @click="showdescription()">show view details</button>
         
              
              
               <!-- <button @click="click(mobile_name)">button</button>  -->
           </div>
</template>
<style>
    .productCard
    {
        display: grid;
        background-color: rgb(236, 233, 233);
        border-radius: 10px;
        border: 1px solid black;
        float:left;
        width:300px;
        height:600px;
        margin:20px;

    } 

</style>
<script src="./productCard.js">

</script>






