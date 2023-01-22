import {mapActions,mapGetters} from 'vuex'
// import {mapState} from 'vuex'
// import{mapActions} from 'vuex'

export default{
    name:"CartComponent",
    data(){
        return{
            isplaced:false,
        }
    },
    computed:{
        ...mapGetters('CartStore',['getcartdetails','getorder']),
        ...mapGetters('UserStore',['userdetails']),
        // ...mapState('CartStore',[state => state.checkoutstatus])
    },
    methods:{
    //    ...mapActions('Cartstore',['checkout'])
    ...mapActions('CartStore',['REMOVE_CART','CLEAR_CART']),
    user_logout(){
        this.$store.dispatch('UserStore/logOut')
        if(this.userdetails)
        {
            this.$route.push({name:'LoginPage'})
        }
    },
    removecartdetails(product)
    {
        const array=this.getcartdetails
        const index = array.findIndex(obj => {
            return obj.name === product.name;
        });
        this.REMOVE_CART(index)
    },
    orderplaced()
    {
        this.CLEAR_CART()
        this.isplaced=true
    }
        

    },
    watch:{
        isplaced: function() {
            if(this.isplaced == true)
            {
                setTimeout(() => this.$router.push('/home'),2000);
            }
        }
    }
}