
import { configureStore, createSlice } from '@reduxjs/toolkit';

const inititalCounterState={ counter: 0 }
const counterSlice=createSlice({
  name:"counter",
  initialState:inititalCounterState,
  reducers:{
    increase(state){
      state.counter++
    },
    decrease(state){
      state.counter--
    },
    incrementBy5(state,action){
      state.counter=state.counter+action.payload;
    },
    decrementBy5(state,action){
      state.counter=state.counter-action.payload;
    },
  }
})

const inititalAuthState={ isAuthenticated: false }
const authSlice=createSlice({
  name:"authentication",
  initialState:inititalAuthState,
  reducers:{
    login(state){
      state.isAuthenticated=true;
    },
    logout(state){
      state.isAuthenticated=false;
    }
  }
})
// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//     };
//   }
//   if (action.type === 'incrementBy5') {
//     return {
//       counter: state.counter + 5,
//     };
//   }

//   if (action.type === 'decrementBy5') {
//     return {
//       counter: state.counter - 5,
//     };
//   }

//   return state;
// };

const store = configureStore({
  reducer:{counter:counterSlice.reducer,authentication:authSlice.reducer}
});

export default store;
export const counterActions=counterSlice.actions;
export const authActions=authSlice.actions;