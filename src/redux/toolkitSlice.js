import { createSlice } from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        user: {},
        favorites: [],
        basket: [],
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },


        setFavorites(state, action) {
            state.favorites = action.payload
        },
        addBasketItem(state, action) {
            state.basket = [...state.basket, action.payload]
        },
        setBasket(state, action) {
            state.basket = action.payload
        }
        
    }
})

export default toolkitSlice.reducer;
export const {

    setUser,
    setFavorites,
    addBasketItem,
    setBasket,
    

} = toolkitSlice.actions;