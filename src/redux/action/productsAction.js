import axios from "axios"

export const getAllProducts = () => async (dispatch) => {
    dispatch({ type: "PRODUCTS_LOADING" })

    const productURL = 'https://fakestoreapi.com/products'

    try {
        const { data, status } = await axios.get(productURL)
        console.log(data);

        if (status === 200) {
            dispatch({ type: "PRODUCTS_SUCCESS", payload: data })
        }
    } catch (error) {
        dispatch({ type: "PRODUCTS_FAILED", error: error.message })
    }
}
