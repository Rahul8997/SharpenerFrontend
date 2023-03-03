const { configureStore, createSlice } = require('@reduxjs/toolkit');


const initialCartState = { cartItems: [], cardShow: false }
const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        setToggle(state, actions) {
            state.cardShow = actions.payload
        },
        setAddCartItem(state, actions) {
            state.cartItems = [...state.cartItems, actions.payload]
        },
        setCartItemIncrease(state, actions) {
            state.cartItems.map((item) => {
                if (item.prodId === actions.payload) {
                    item.quantity = item.quantity + 1;
                }
                return true;
            })
        },
        setCartItemDecrease(state, actions) {
            state.cartItems.map((item) => {
                if (item.prodId === actions.payload) {
                    item.quantity = item.quantity - 1;
                }
                return true;
            })
        }, setCartFilter(state) {
            state.cartItems= state.cartItems.filter((item) => {
                return item.quantity > 0
            })
        }
        , setCart(state,actions) {
            state.cartItems=actions.payload
        }
    }
})


const store = configureStore({
    reducer: { cart: cartSlice.reducer }
})

export default store;
export const cartActions = cartSlice.actions;