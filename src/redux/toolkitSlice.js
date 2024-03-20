import {createSlice} from "@reduxjs/toolkit";


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
        addFavorite(state, action) {
            if (state.favorites.some(item => item === action.payload)) {
                state.favorites = state.favorites.filter(item => item !== action.payload)
            } else {
                state.favorites = [...state.favorites, action.payload]
            }
        },

        addBasketItem(state, action) {
            if (state.basket?.some(item => item === action.payload)) {
                state.basket = state.basket.filter(item => item !== action.payload)
            } else {
                state.basket = [...state.basket, action.payload]
            }
        },
        removeBasketItem(state, action) {
            state.basket = state.basket.filter(item => item !== action.payload)
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
    addFavorite,
    addBasketItem,
    removeBasketItem,
    setBasket,


} = toolkitSlice.actions;