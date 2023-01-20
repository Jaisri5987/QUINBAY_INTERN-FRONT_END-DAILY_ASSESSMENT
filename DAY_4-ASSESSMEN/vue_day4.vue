<template>
    <div>
        <h1 style="background-color: blue; color:white display:right" > PRODUCT LIST</h1>
        <br/><br/>
        <div class="filterlist">Filter option :{{ filteredProducts }}
            <br/>
            <br/>
            <form class="filter" >
            <label> Mobilename :</label>
            <input type="text" placeholder="enter brand name" v-model="dummy.mobile_name"/>
            <br/> 
            <br/>
            <label> Brandname :</label>
            <input type="text" placeholder="enter brand name" v-model="dummy.brand"/>
            <br/>
            <br/>
            <label> RAM Size :</label>
            <input type="text" placeholder="enter RAM" v-model="dummy.ram"/>
            <br/>
            <br/>
            <label> ROM Size :</label>
            <input type="text" placeholder="enter rom" v-model="dummy.rom"/>
            <br/>
            <br/>
            <label> Price :</label>
            <input type="text" placeholder="enter Price" v-model= "dummy.price"/>
            <br/>
            <br/>
            <center><button  @click="filter()" type="button" placeholder="Filter_search"><i>Filter_search</i></button></center>
            <br>
            <hr>
            <h2 style="background-color: #80bd46;"><center>Add new mobiles</center></h2>
  <div class="new_section" @click="add_mobiles" id="addmobileform">
  <label for="mobile name">Mobile name : </label>
  <input type="pass" placeholder="Mobile name here.." name="mobile name" id="Mobile name ">
  <br>
  <br><br><br>
  <label for="brand">Brand Name : </label>
  <input type="text" placeholder="Brand name here.." name="brand name" id="Brand name ">
  <br>
  <br><br><br>
  <label for="inserting a image">Insert an image : </label>
  <input type="file" id="myfile">
  <br>
  <br><br><br>
  <tr>
      <td class="tdlabel" >
          <label for="RAM SIZE" class="label">RAM Size :</label>
      </td>
      <td>
          <select name="RAM Size" id="RAM SIZE" style = "width :160px" >
          <option value="CHOOSE RAM">Choose RAM ...</option>
          <option value="2 GB">2 GB</option>
          <option value="4 GB">4 GB</option>
          <option value="6 GB">6 GB</option>
          <option value="8 GB">8 GB</option>
          
      </select>
      </td>
  </tr>
  <br><br><br>
  <br>
  <tr>
      <td class="tdlabel">
          <label for="ROM SIZE" class="label">ROM Size :</label>
      </td>
      <td>
          <select name="ROM Size" id="ROM SIZE" style = "width :160px" >
          <option value="CHOOSE ROM">Choose ROM ...</option>
          <option value="2 GB">32 GB</option>
          <option value="4 GB">64 GB</option>
          <option value="6 GB">128 GB</option>
          <option value="8 GB">256 GB</option>
          
      </select>
      </td>
  </tr>
  <br><br><br>
  <br>
  <label for="Mobile price">Mobile price : </label>
  <input type="pass" placeholder="Enter mobile price.." name="Mobile price">
  <br>
  <br>
  <br>
  <button type="Add new Mobile"  >Add new Mobile</button>
  <p> The below link can also be used to save the new mobile product to showcase in the product list page <a href="http://127.0.0.1:5500/NEW%20MOBILE%20SECTION.html">get link</a></p>
</div>
  </form>
        </div>
        <div class="productlist" v-for="(product_list,index) in products" :key="index" >
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

            
        
            <!-- <button @click="click(mobile_name)">button</button> -->
        </div>     
    </div>  

</template>

<script src="./js/vue_day4.js"></script>
 <style >
 .productlist
{
    display:grid; 
    background-color: #d9d9d9;
    border:4px solid black;
    width:300px;
    height:600px;
    margin :25px;
    float:right; 
    border-radius: 20px;
    column-gap: 15px;

}
.filterlist {
    float:left;
    background-color: antiquewhite;
    border:1px solid black;
    height:1200px;
    width:300px;
    margin:5px;
    border-collapse:collapse;
    padding: 3px 7px,6px 5px;
    border-radius: 20px;
}
@media(max-width:300px)
        {
        body
        {
            width:150%;
        }
      }
 
 </style>




