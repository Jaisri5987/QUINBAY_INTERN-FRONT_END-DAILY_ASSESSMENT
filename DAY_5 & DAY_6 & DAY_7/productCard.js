export default{

    name:"productCard",
    data()
    {
        return{ }
    },
    props: {

    productobj: {
        type:Object,
        default:{}
    }

    },
    methods :{
        
    showdescription()
    {
        alert("called")
        this.$router.push({name:"productDescription",query:{productBrand:this.productobj.brand}})

    }
}

}