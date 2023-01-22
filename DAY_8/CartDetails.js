import {mapGetters} from 'vuex'
// import {mapState} from 'vuex'
// import{mapActions} from 'vuex'

export default{
    name:"CartComponent",
    data(){
        return{}
    },
    computed:{
        ...mapGetters('CartStore',['getcartdetails']),
        // ...mapState('CartStore',[state => state.checkoutstatus])
    },
    methods:{
    //    ...mapActions('Cartstore',['checkout'])
        

    }
}