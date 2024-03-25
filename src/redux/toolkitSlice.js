import {createSlice} from "@reduxjs/toolkit";
import setCookie from "../functions/setCookie";


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
            setCookie("favorite", JSON.stringify(state.favorites))
        },

        addBasketItem(state, action) {
            if (state.basket?.some(item => item === action.payload)) {
                state.basket = state.basket.filter(item => item.product_id !== action.payload)
            } else {
                state.basket = [...state.basket, {
                    product_id: action.payload,
                    product_amount: 1,
                }]
            }
            setCookie("basket", JSON.stringify(state.basket))
        },
        removeBasketItem(state, action) {
            state.basket = state.basket.filter(item => item.product_id !== action.payload)
            setCookie("basket", JSON.stringify(state.basket))
        },
        setBasket(state, action) {
            // state.basket = action.payload
        },
        changeBasketItem(state, action) {
            const newBasketList = state.basket.map(item => {
                if (item.product_id === action.payload.product_id) {
                    return {
                        product_id: item.product_id,
                        product_amount: item.product_amount + action.payload.count,
                    }
                } else {
                    return item;
                }
            })

            state.basket = newBasketList
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
    changeBasketItem,


} = toolkitSlice.actions;