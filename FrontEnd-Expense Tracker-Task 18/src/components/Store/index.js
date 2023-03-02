const { configureStore, createSlice } = require('@reduxjs/toolkit');


const initialCartState={cartItems:[],cardShow:false}
const cartSlice=createSlice({
name:"cart",
initialState:initialCartState,
reducers:{
    setToggle(state,actions){
        state.cardShow=actions.payload
    },
    setAddCartItem(state,actions){
        state.cartItems=[...state.cartItems,actions.payload]
    }
}
})

const initialCartItemState={cartItemQty:0}
const cartItemSlice=createSlice({
name:"cartitem",
initialState:initialCartItemState,
reducers:{
    setItemQtyIncrease(state){
        state.cartItemQty=state.cartItemQty+1;
    },
    setItemQtyDecrease(state){
        if (state.cartItemQty>0) {
            state.cartItemQty=state.cartItemQty-1;
        }
    }
}
})

const store=configureStore({
    reducer:{cart:cartSlice.reducer,cartitem:cartItemSlice.reducer}
})

export default store;
export const cartActions=cartSlice.actions;
export const cartItemActions=cartItemSlice.actions;