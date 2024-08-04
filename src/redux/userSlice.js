import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    token: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },

        logout: (state, action) => {
            state.user = {};
            state.token = "";
        },

    }
})

export const { login, logout, showLoading, hideLoading } = userSlice.actions;
export default userSlice.reducer;