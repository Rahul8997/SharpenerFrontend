
import { configureStore, createSlice } from '@reduxjs/toolkit';

const inititalAuthState = {
    token: localStorage.getItem("token")
}
const authSlice = createSlice({
    name: "authentication",
    initialState: inititalAuthState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
        }
    }
})

const store = configureStore({
    reducer: {authentication: authSlice.reducer }
});

export default store;
export const authActions = authSlice.actions;
