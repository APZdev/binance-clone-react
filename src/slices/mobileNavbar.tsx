import { createSlice } from "@reduxjs/toolkit";

const initialStateValue: boolean = false;

export const navbarStateSlice = createSlice({
    name: "mobile-navbar",
    initialState: { value: initialStateValue },
    reducers: {
        changeState: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { changeState } = navbarStateSlice.actions;

export default navbarStateSlice.reducer;
