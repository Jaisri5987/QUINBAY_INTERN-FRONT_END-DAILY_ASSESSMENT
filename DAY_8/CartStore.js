export default {
    state:{
        cart:[],
        // checkoutStatus:null

    },
    getters:{
        getcartdetails(state){
            return state.cart
        }

    },
    mutations:{
        setcartdetails(state,details)
        {
            state.cart.push(details)
         }
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
       }
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