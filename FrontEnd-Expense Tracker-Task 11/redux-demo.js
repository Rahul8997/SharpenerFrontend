const redux=require('redux');

const counterReducer=(state={counter:0},action)=>{
return {
counter:state.counter+1
};
}
const store=redux.legacy_createStore(counterReducer);
console.log(store.getState());
const counterSubscriber=()=>{
   const lateststate=store.getState();
   console.log(lateststate);
    }
store.subscribe(counterSubscriber);
store.dispatch({type:"increment"})