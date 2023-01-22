export default {
    state:{
        cart:[],
        placedorder:[]

    },
    getters:{
        getcartdetails(state){
            return state.cart
        },
        getorder(state)
        {
            return state.placedorder
        }

    },
    mutations:{
        setcartdetails(state,details)
        {
            state.cart.push(details)
         },
         removecartdetails(state,details)
         {
            state.cart.splice(details,1)
         },
         placedorder(state)
         {
            state.placedorder=state.cart
            state.cart=[]
         },
        // pushproducttocart(state,productId)
        // {
        //     state.cart.push({
        //         id: productId,
        //         quantity:1
        //     })
        // },
        // increment_item_quantity(state,cartItem)
        // {
        //     cartItem.quantity++

        // },
        // setcheckoutStatus(state,data)
        // {
        //     state.checkoutStatus = data
        // },
        // emptyCart(state)
        // {
        //     state.cart=[]
        // }
    },
    actions:{
       GET_CART_DETAILS({commit},details)
       {
        commit('setcartdetails',details)
       },
       REMOVE_CART({commit},data)
       {
        commit('removecartdetails',data)
       },
       CLEAR_CART({commit}){
        commit('placedorder')
       },
    // GET_CART_DETAILS({commit,rootGetters,state}, product) {
    //      if (rootGetters['products/productIsInStock'](product)) {
    //        const cartItem = state.cart.find(item => item.id === 
    //      product.id)
    //        if (!cartItem) {
    //          commit('pushProductToCart', product.id)
    //        } else {
    //          commit('increment_item_quantity', cartItem)
    //        }
    //        commit('products/decrementProductInventory', 
    //       product, {root: true})
    //      }
    //     },
       
        },

    namespaced: true
}