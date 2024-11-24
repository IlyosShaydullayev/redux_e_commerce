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

const initialStateCart = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
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

export const cartReducer = (state = initialStateCart, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const findProd = state.cart.find((c) => c.id === action.payload.id);
            if (!findProd) {
                const product = [...state.cart, { ...action.payload, qty: 1 }];
                localStorage.setItem("cart", JSON.stringify(product));
                return {
                    ...state,
                    cart: product,
                };
            } else if (findProd) {
                const product = state.cart.map((item) =>
                    item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
                );
                localStorage.setItem("cart", JSON.stringify(product));
                return {
                    ...state,
                    cart: product,
                };
            }
            break;
        case "INCREASE_PRODUCT_ITEM":
            const incProduct = state.cart.map((item) =>
                item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
            );
            localStorage.setItem("cart", JSON.stringify(incProduct));
            return {
                ...state,
                cart: incProduct,
            };
        case "DECREMENT_PRODUCT_ITEM":
            const decProduct = state.cart.map((item) =>
                item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
            );
            localStorage.setItem("cart", JSON.stringify(decProduct));
            return {
                ...state,
                cart: decProduct,
            };
        case "REMOVE_PRODUCT_ITEM":
            const removeProduct = state.cart.filter(
                (item) => item.id !== action.payload
            );
            localStorage.setItem("cart", JSON.stringify(removeProduct));
            return {
                ...state,
                cart: removeProduct,
            };

        default:
            return state;
    }
};