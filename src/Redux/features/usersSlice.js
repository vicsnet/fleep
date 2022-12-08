import {createSlice} from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: "usersSlice",
    initialState: {
        delOpen: true,
        error: "",
        loading: false,
    },
    reducers: {
        openDelOption: (state, action) => {
            state.delOpen =action.payload
        },
        closeDelOption: (state, action) => {
            state.delOpen = !action.payload
        },
    }
})

export const { openDelOption, closeDelOption } = usersSlice.actions;
export default usersSlice.reducer