const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type == 'increment') {
        return {
            counter: state.counter + 1
        };
    }
    if (action.type == 'decrement') {
        return {
            counter: state.counter - 1
        };
    }
    if (action.type == 'INCREMENTBY2') {
        return {
            counter: state.counter + 2
        };
    }
    if (action.type == 'DECREMENTBY2') {
        return {
            counter: state.counter - 2
        };
    }
return state;
}
const store = redux.legacy_createStore(counterReducer);

const counterSubscriber = () => {
    const lateststate = store.getState();
    console.log(lateststate);
}
store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" })
store.dispatch({ type: "decrement" })
store.dispatch({ type: "INCREMENTBY2" })
store.dispatch({ type: "DECREMENTBY2" })