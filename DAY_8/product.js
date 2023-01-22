import ProductCard from '../../components/ProductCard.vue';
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import axios from 'axios'


export default 
{
  name:'product_page',
    components:
  {
    ProductCard
  },
  props:{
    name:String
  },
  
    data()
    {
    return{
      isErrorOccured : false,
      articleId:"null",
        searchResult:[],
        searchquery:'all',
        products:[],
        filter_list:[],
        // products:[
        //     {
        //         mobile_name:"VIVO V20",
        //          image:
        //         "https://img3.gadgetsnow.com/gd/images/products/additional/large/G200279_View_3/mobiles/smartphones/vivo-v20-128-gb-moonlight-sonata-8-gb-ram-.jpg",
        //         price: 24500,
        //         brand:"vivo",
        //         Customer_Rating:4,
        //         ram:"8 GB",
        //         rom:"128 GB",
        //         count:2  
        //       },
        //       {
        //         mobile_name:"REALME GT2 PRO",
        //         image:
        //         "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRDuThG7CI2Z9ogg-inEif0E-oiMU8NWKxxq17a-2p8l3NAidPm1eMNxMsiKwUvw4LtFiSP9sf_HDbZ5ikl0ru8D4Ka8lPaFQ",
        //         price: 50000,
        //         brand:"realme",
        //         Customer_Rating:3,
        //         ram:"8 GB",
        //         rom:"128 GB",
        //         count:0
        //       },
        //       {
        //         mobile_name:"APPLE Iphone 13",
        //         image:
        //        "https://img6.gadgetsnow.com/gd/images/products/additional/large/G390858_View_1/mobiles/smartphones/apple-iphone-14-pro-max-256-gb-deep-purple-6-gb-ram-.jpg",
        //         price: 60000,
        //         brand:"apple",
        //         Customer_Rating:4,
        //         ram:"6 GB",
        //         rom:"128 GB",
        //         count:4
        //       },
        //       {
        //         mobile_name:"Mi 10T Pro",
        //         image:
        //         "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1641445095.06029150.png",
        //         price: 47999,
        //         brand:"mi",
        //         Customer_Rating:4,
        //         ram:"8 GB",
        //         rom:"128 GB",
        //         count:0
        //       },
        //       {
        //         mobile_name:"Samsung Galaxy F23",
        //         image:
        //         "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTH6A4q9lFNV_k8v7hmCkyFy0LfUPUinwRHfwv9MX1kczE0fFIw-Nks1LGGMxtqnwFmpPK5boTRF2rPhz6mqBLLyrav67GkOahs_rsLapkA&usqp=CAE",
        //         price: 15000,
        //         brand:"samsung",
        //         Customer_Rating:3,
        //         ram:"6 GB",
        //         rom:"64 GB",
        //         count:5
        //       },
        //       {
        //         mobile_name:"Xiaomi",
        //         image:
        //         "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662444582/Croma%20Assets/Communication/Mobiles/Images/247130_dlg1g6.png/mxw_2256,f_auto",
        //         price: 40900,
        //         brand:"xiaomi",
        //         Customer_Rating:4,
        //         ram:"6 GB",
        //         rom:"128 GB",
        //         count:0
        //       },
        //       {
        //         mobile_name:"ONE PLUS NORD CE 2",
        //         image:
        //         "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ3hNascy8sMzD9q2BaETWmvVzwiZec9K2B9OGJaokB6-3DLzojfg9Ji_dvYK45VEXk1rmfG901tvYLRlk6yHAf1KiN2bQw",
        //         price: 24999,
        //         brand:"one plus",
        //         Customer_Rating:4,
        //         ram:"8 GB",
        //         rom:"128 GB",
        //         count:5
        //       },
        //       {
        //         mobile_name:"POCO X4 PRO",
        //         image:
        //         "https://rukminim1.flixcart.com/image/832/832/l19m93k0/mobile/q/f/w/-original-imagcv2dgezfbfet.jpeg?q=70",
        //         price: 22000,
        //         brand:"poco",
        //         Customer_Rating:3,
        //         ram:"6 GB",
        //         rom:"64 GB",
        //         count:3
        //       }     
        // ],
        // filter_list:[
        //     {
        //         mobile_name:"VIVO V20",
        //          image:
        //         "https://img3.gadgetsnow.com/gd/images/products/additional/large/G200279_View_3/mobiles/smartphones/vivo-v20-128-gb-moonlight-sonata-8-gb-ram-.jpg",
        //         price: 24500,
        //         brand:"vivo",
        //         Customer_Rating:4,
        //         ram:"8 GB",
        //         rom:"128 GB",
        //         count:2  
        //       },
        //       {
        //         mobile_name:"REALME GT2 PRO",
        //         image:
        //         "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRDuThG7CI2Z9ogg-inEif0E-oiMU8NWKxxq17a-2p8l3NAidPm1eMNxMsiKwUvw4LtFiSP9sf_HDbZ5ikl0ru8D4Ka8lPaFQ",
        //         price: 50000,
        //         brand:"realme",
        //         Customer_Rating:3,
        //         ram:"8 GB",
        //         rom:"128 GB",
        //         count:0
        //       },
        //       {
        //         mobile_name:"APPLE Iphone 13",
        //         image:
        //        "https://img6.gadgetsnow.com/gd/images/products/additional/large/G390858_View_1/mobiles/smartphones/apple-iphone-14-pro-max-256-gb-deep-purple-6-gb-ram-.jpg",
        //         price: 60000,
        //         brand:"apple",
        //         Customer_Rating:4,
        //         ram:"6 GB",
        //         rom:"128 GB",
        //         count:4
        //       },
        //       {
        //         mobile_name:"Mi 10T Pro",
        //         image:
        //         "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1641445095.06029150.png",
        //         price: 47999,
        //         brand:"mi",
        //         Customer_Rating:4,
        //         ram:"8 GB",
        //         rom:"128 GB",
        //         count:0
        //       },
        //       {
        //         mobile_name:"Samsung Galaxy F23",
        //         image:
        //         "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTH6A4q9lFNV_k8v7hmCkyFy0LfUPUinwRHfwv9MX1kczE0fFIw-Nks1LGGMxtqnwFmpPK5boTRF2rPhz6mqBLLyrav67GkOahs_rsLapkA&usqp=CAE",
        //         price: 15000,
        //         brand:"samsung",
        //         Customer_Rating:3,
        //         ram:"6 GB",
        //         rom:"64 GB",
        //         count:5
        //       },
        //       {
        //         mobile_name:"Xiaomi",
        //         image:
        //         "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662444582/Croma%20Assets/Communication/Mobiles/Images/247130_dlg1g6.png/mxw_2256,f_auto",
        //         price: 40900,
        //         brand:"xiaomi",
        //         Customer_Rating:4,
        //         ram:"6 GB",
        //         rom:"128 GB",
        //         count:0
        //       },
        //       {
        //         mobile_name:"ONE PLUS NORD CE 2",
        //         image:
        //         "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ3hNascy8sMzD9q2BaETWmvVzwiZec9K2B9OGJaokB6-3DLzojfg9Ji_dvYK45VEXk1rmfG901tvYLRlk6yHAf1KiN2bQw",
        //         price: 24999,
        //         brand:"one plus",
        //         Customer_Rating:4,
        //         ram:"8 GB",
        //         rom:"128 GB",
        //         count:5
        //       },
        //       {
        //         mobile_name:"POCO X4 PRO",
        //         image:
        //         "https://rukminim1.flixcart.com/image/832/832/l19m93k0/mobile/q/f/w/-original-imagcv2dgezfbfet.jpeg?q=70",
        //         price: 22000,
        //         brand:"poco",
        //         Customer_Rating:3,
        //         ram:"6 GB",
        //         rom:"64 GB",
        //         count:3
        //       },
              
        // ],
        
        searchitem:{
          brand:"" , name:" " ,ram:" " ,rom:" ",priceDisplay:" "
        },
        updated:[],
        search: "all"

    }
 
   },
   computed:{
    ...mapGetters('ProductStore',['Getdetails']),
    ...mapGetters('UserStore',['User'])
   },

    mounted() {
      // this.callApi();
      // this.getProducts({
      //   success: this.onSuccessOfProduct,
      //   fail:this.onFailOfProduct
      // })
      this.productfetch();
    },
    methods:{
      ...mapActions('UserStore',['log_out']),
      ...mapActions('ProductStore',['getProducts']),

      productfetch(){
        this.getProducts({
          success: this.onSuccessOfProduct,
          fail:this.onFailOfProduct
        })  
      },
      onSuccessOfProduct(data)
      {
        this.filter_list=data;
      },
      onFailOfProduct(error){
        console.error(error);
      },

      async changeUser()
    {
      axios.post(`https://63c8ecef904f040a9652af79.mockapi.io/users/users`,{name:"jaisri"}).then(
                 (res) => {
                    console.log(res);   
                    
                }
            ).catch({
                function(res) {
                    console.log(res);
                }
    
            })
    },
    async deleteUser()
    {
      axios.delete(`https://63c8ecef904f040a9652af79.mockapi.io/users/users/13`).then(
                 (res) => {
                    console.log(res);   
                    
                }
            ).catch({
                function(res) {
                    console.log(res);
                }
    
            })
    },
    // callApi(){
    //   axios.get(`https://www.blibli.com/backend/search/products?searchTerm=${this.searchquery}&start=0&itemPerPage=24`).then(
    //              (res) => {
    //                 console.log(res);
    //                 this.onSearchSuccess(res.data.data.products);
    //                this.filter_list=res.data.data.products
                   
                    
    //             }
    //         ).catch({
    //             function(res) {
    //                 console.log(res);
    //             }
    
    //         })           
    //     },

    filter1()      
    {
         
         this.filter_list=this.products;
        this.filter_product=this.products.filter(x =>  
            (this.dummy.name ? x.mobile_name === this.dummy.name :true)  &&
            (this.dummy.brand ? x.brand === this.dummy.brand :true)  &&
            (this.dummy.ram ? x.ram ===this.dummy.ram :true)  &&
            (this.dummy.rom ? x.rom===this.dummy.rom:true) &&
            (this.dummy.price ? x.price===this.dummy.price :true )) 
        console.log(this.filter_product)   
    },
    isLoggedOut(){
      this.log_out()
      if(this.user)
      {
         this.$router.push({name:"Login_page"})
      }
 },

      searchbox() {
        var pro2 = document.getElementById("search").value;
        window.alert("You have searched " + pro2);
      },
      user_logout() {
        alert("logout")
        this.$router.push('/')
      },
      submit()
      {
        alert("called");
          this.callApi();
      },
      cartcomp()
      {
        this.$router.push('./CardComponent')
      }
    },
    watch: {
      search: function () {
          this.filter_list = this.product.filter(product => (this.search ? product.brand === this.search : true))
      }
  }
}
