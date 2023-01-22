import {mapActions} from "vuex"
import {mapGetters} from "vuex"

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
    computed:
    {
        ...mapGetters('CartStore',['getcartdetails'])
    },
    methods :{
        ...mapActions('CartStore',['GET_CART_DETAILS']),
    showdescription()
    {
        alert("called")
        this.$router.push({name:"productDescription",query:{product:this.productobj    }})

    },
    add_to_cart()
    {
        this.GET_CART_DETAILS(this.productobj)
        console.log(this.getcartdetails)
    }

}

}