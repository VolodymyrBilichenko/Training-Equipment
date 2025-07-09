import {createSlice} from "@reduxjs/toolkit";
import setCookie from "../functions/setCookie";
import { getProduct, removeFavoriteProduct, removeProduct, saveFavoriteProduct, saveProducts, updateProduct } from "../utils/db";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        user: {},
        favorites: [],
        basket: [],
        basketComment: '',
        allProducts: [],
        allCategories: [],
        settings: {},
        staticData: {},
        isUseBonuses: false
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },

        setSettings(state, action) {
            state.settings = action.payload
        },

        setAllProducts(state, action) {
            state.allProducts = action.payload
        },
        setAllCategories(state, action) {
            state.allCategories = action.payload
        },

        setFavorites(state, action) {
            state.favorites = action.payload
        },
        addFavorite(state, action) {
            
            for (let i = 0; i < state.favorites.length; i++) {
                if (state.favorites[i].id === action.payload.id) {
                    state.favorites[i] = action.payload
                    return
                }
            }
            state.favorites = [...state.favorites, action.payload]
            saveFavoriteProduct(action.payload)

        },
        removeFavorite(state, action) {

            for (let i = 0; i < state.favorites.length; i++) {
                if (state.favorites[i].id === action.payload.id) {
                    state.favorites.splice(i, 1)
                    removeFavoriteProduct(action.payload.id)
                    return
                }
            }

        },

        addBasketItem(state, action) {
    
            const product = action.payload

            for (let i = 0; i < state.basket.length; i++) {
                if (state.basket[i].id === product.id) {
                    updateProductAmount(product, i)
                    return 
                }
            }

            addProduct(product)

            async function addProduct(product) {
                state.basket = [...state.basket, product]

                // save product to db
                await saveProducts([product])
            }

            async function updateProductAmount(product, i) {
                state.basket[i].amount += product.amount

                // get product from db
                const productFromDb = await getProduct(product.id)
                
                // update product amount in db
                await updateProduct({ ...productFromDb, amount: product.amount + productFromDb.amount });
            }

        },
        updateBasketItem(state, action) {
            const product = action.payload

            for (let i = 0; i < state.basket.length; i++) {
                if (state.basket[i].id === product.id) {
                    state.basket[i].amount = product.amount

                    // update product amount in db
                    updateProduct({ ...state.basket[i], amount: product.amount });
                } else {
                    state.basket = [...state.basket]
                }
            }
        },
        removeBasketItem(state, action) {
            state.basket = state.basket.filter(item => item.id !== action.payload)

            // remove product from db
            removeProduct(action.payload)
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
        },
        setBasketComment(state, action) {
            state.basketComment = action.payload
        },

        setStaticData(state, action) {
            state.staticData = action.payload
        },

        setIsUseBonuses(state, action) {
            state.isUseBonuses = action.payload
        }

    }
})

export default toolkitSlice.reducer;
export const {

    setUser,
    setAllProducts,
    setAllCategories,
    setFavorites,
    addFavorite,
    addBasketItem,
    updateBasketItem,
    removeBasketItem,
    setBasket,
    changeBasketItem,
    removeFavorite,
    setBasketComment,
    setSettings,
    setStaticData,
    setIsUseBonuses


} = toolkitSlice.actions;