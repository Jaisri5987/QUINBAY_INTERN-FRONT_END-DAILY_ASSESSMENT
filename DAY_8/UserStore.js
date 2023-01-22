
export default {
    state:{
        userdetails:{}
         },
    getters:{
        userdetails(state){
            return state.userdetails
        }
    },
    mutations:{
        setuserdetails(state,userdetails)
        {
            state.userdetails=userdetails
        },
        logOut(state){
            let del = {}
            localStorage.setItem('userdetails',JSON.stringify(del))
            state.user=del
          }
    },
    actions:{
        getUserdetails:({commit},userdetails)=>
         {
           commit('setuserdetails',userdetails)
         },
         log_out:({commit})=>{
           commit('logOut')
         }
     
        },

    namespaced:true
}
// const store=new Vuex.Store(userStore)



/*import{ mapGetters} from "vuex"

export default{
    name:" ",
    data() {
        return {}

    }
   {{`${user.username}}}
}*/