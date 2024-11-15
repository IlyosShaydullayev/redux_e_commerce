import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { productsReducer, recommendProductReducer, singleProductReducer } from './reducer/productsReducer'


const rootReducer = combineReducers({
    productReducer: productsReducer,
    singleProdReducer: singleProductReducer,
    recommendProdReducer: recommendProductReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export { store }