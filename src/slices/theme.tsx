import { createSlice } from "@reduxjs/toolkit";

const initialStateValue: string = "dark";

export const themeSlice = createSlice({
    name: "theme",
    initialState: { value: initialStateValue },
    reducers: {
        changeTheme: (state) => {
            state.value = state.value === "light" ? "dark" : "light";
        },
    },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
