import UserService from '/Users/jaisri/Documents/vue.js/vue-learn/src/service/UserService.js'

export default {
    state:{
        productdetails:{}

    },
    getters:{
        getdetails(state){
            return state.productdetails
        }

    },
    mutations:{
        setproductdetails(state,productdetails)
        {
            state.productdetails = productdetails;
        }

    },
    actions:{
        getProducts:({commit},{success,fail,data})=>
        {
          UserService.fetchproducts({
           success: (detail)=>
           {
            console.log(detail)
            commit('setproductdetails',detail.data.data.products)
            success(detail.data.data.products)
           },
           fail,
           data
          })
         
     
        }

    },
    namespaced: true
}