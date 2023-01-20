export default {
   
    name: "productdescription",
    data() {
        return {}
    },
    props: {
      
    },
    methods:{
       getValue() {
        console.log(this.$route)
        return this.$route.query.productBrand;
       }
    }
   
}