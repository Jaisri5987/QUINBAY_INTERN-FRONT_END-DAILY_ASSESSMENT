<template>
     <div class="productCard" @click="showdescription()" >
              <p>{{ productobj.name }}</p>
              <center><img :src="productobj.images[0]" width="150" height="150"/></center>
              <p>{{ productobj.brand }}</p>
              <p>{{productobj.price.priceDisplay  }}</p>
              <p>{{ productobj.itemcount }}</p>
              <p>{{ productobj.merchantName }}</p>
              <button :disabled="productobj.count===0" @click="reduceQuantity(product_list)">Add to cart </button>
              
              
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






