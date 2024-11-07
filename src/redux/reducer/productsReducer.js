const initialStateAllProducts = {
    loading: false,
    products: [],
    error: null
}

export const productsReducer = (state = initialStateAllProducts, action) => {
    switch (action.type) {
        case "PRODUCTS_LOADING":
            return {
                ...state,
                loading: true
            }
        case "PRODUCTS_SUCCESS":
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case 'PRODUCTS_FAILED':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}
