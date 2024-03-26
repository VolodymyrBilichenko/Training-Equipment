import {createSlice} from "@reduxjs/toolkit";
import setCookie from "../functions/setCookie";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        user: {},
        favorites: [],
        basket: [],
        allProducts: []
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },

        setAllProducts(state, action) {
            state.allProducts = action.payload
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
            // if (state.basket?.some(item => item !== action.payload)) {
            //     const newArray = state.basket.filter(item => {
            //         if (item.product_id === action.payload.product_id) {
            //             return {
            //                 ...item,
            //                 product_amount: item.product_amount + action.payload.product_amount
            //             }
            //         } else {
            //             return item
            //         }
            //     })
            //
            //     state.basket = newArray
            // } else {
            //     state.basket = [...state.basket, action.payload]
            // }

            if (state.basket?.some(item => item === action.payload)) {
                state.basket = state.basket.map(item => {
                    if (item.product_id === action.payload.product_id) {
                        return {
                            ...item,
                            product_amount: item.product_amount + action.payload.product_amount
                        }
                    } else {
                        return item
                    }
                })
            } else {
                state.basket = [...state.basket, action.payload]
            }

            setCookie("basket", JSON.stringify(state.basket))

        },
        removeBasketItem(state, action) {
            state.basket = state.basket.filter(item => item.product_id !== action.payload)
            setCookie("basket", JSON.stringify(state.basket))
        },
        setBasket(state, action) {
            state.basket = action.payload
        },
        changeBasketItem(state, action) {
            state.basket = state.basket.map(item => {
                if (item.product_id === action.payload.product_id) {
                    return {
                        product_id: item.product_id,
                        product_amount: item.product_amount + action.payload.count,
                    }
                } else {
                    return item;
                }
            })


            setCookie("basket", JSON.stringify(state.basket))
        }

    }
})

export default toolkitSlice.reducer;
export const {

    setUser,
    setAllProducts,
    setFavorites,
    addFavorite,
    addBasketItem,
    removeBasketItem,
    setBasket,
    changeBasketItem,


} = toolkitSlice.actions;