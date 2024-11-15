const initialStateAllProducts = {
    loading: false,
    products: [],
    error: null
}

const initialStateSingleProduct = {
    loading: false,
    products: [],
    error: null
}

const initialStateRecommendProduct = {
    loading: false,
    recommendProducts: [],
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


export const singleProductReducer = (state = initialStateSingleProduct, action) => {
    switch (action.type) {
        case "SINGLE_PRODUCT_LOADING":
            return {
                ...state,
                loading: true
            }
        case "SINGLE_PRODUCT_SUCCESS":
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case 'SINGLE_PRODUCT_FAILED':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export const recommendProductReducer = (state = initialStateRecommendProduct, action) => {
    switch (action.type) {
        case "RECOMMEND_PRODUCT_LOADING":
            return {
                ...state,
                loading: true
            }
        case "RECOMMEND_PRODUCT_SUCCESS":
            return {
                ...state,
                loading: false,
                recommendProducts: action.payload
            }
        case 'RECOMMEND_PRODUCT_FAILED':
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default:
            return state
    }
}