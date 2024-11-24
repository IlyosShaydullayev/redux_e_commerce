import axios from "axios"

export const getAllProducts = (filter) => async (dispatch) => {
    dispatch({ type: "PRODUCTS_LOADING" })

    const productURL = filter ? `https://fakestoreapi.com/products/category/${filter}` : 'https://fakestoreapi.com/products'

    try {
        const { data, status } = await axios.get(productURL)

        if (status === 200) {
            dispatch({ type: "PRODUCTS_SUCCESS", payload: data })
        }
    } catch (error) {
        dispatch({ type: "PRODUCTS_FAILED", error: error.message })
    }
}

export const getSingleProduct = (id) => async (dispatch) => {
    dispatch({ type: "SINGLE_PRODUCT_LOADING" })

    const productURL = `https://fakestoreapi.com/products/${id}`

    try {
        const { data, status } = await axios.get(productURL)

        if (status === 200) {
            dispatch({ type: "SINGLE_PRODUCT_SUCCESS", payload: data })
        }
    } catch (error) {
        dispatch({ type: "SINGLE_PRODUCT_FAILED", error: error.message })
    }
}

export const getRecommendProducts = (category) => async (dispatch) => {
    dispatch({ type: "RECOMMEND_PRODUCT_LOADING" })

    const productURL = `https://fakestoreapi.com/products/category/${category}`

    try {
        const { data, status } = await axios.get(productURL)

        if (status === 200) {
            dispatch({ type: "RECOMMEND_PRODUCT_SUCCESS", payload: data })
        }

    } catch (error) {
        dispatch({ type: "RECOMMEND_PRODUCT_FAILED", error: error.message })
    }
}

export const addToCart = (product) => (dispatch) => {
    dispatch({ type: "ADD_TO_CART", payload: product })
}

export const incrementProductItem = (id) => (dispatch) => {
    dispatch({ type: "INCREASE_PRODUCT_ITEM", payload: id });
};
export const decrementProductItem = (id) => (dispatch) => {
    dispatch({ type: "DECREMENT_PRODUCT_ITEM", payload: id });
};
export const removeProductItem = (id) => (dispatch) => {
    dispatch({ type: "REMOVE_PRODUCT_ITEM", payload: id });
};