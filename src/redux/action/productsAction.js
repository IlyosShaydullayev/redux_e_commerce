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
