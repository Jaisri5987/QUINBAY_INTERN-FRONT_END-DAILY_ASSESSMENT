export default {
   
    name: "productdescription",
    created()
    {
        console.log(this.$route.product)
        this.product_details = this.$route.query.product;
    },
    data() {
        return {
            product_details:{
                type:Object,
                default:{}
            }
        }
    },
    props: {
      
    },
    methods:{
       getValue() {
        console.log("called")
        console.log(this.product_details?.images[0])
        return this.product_details?.images[0];
       }
    }
   
}