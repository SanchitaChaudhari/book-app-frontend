import { configureStore } from '@reduxjs/toolkit'
// import cartReducer from './features/cart/cartSlice'
import cartReducer from './features/cart/cartSlice'
import booksApi from './features/books/bookApi'
import ordersApi from './features/orders/orderApi'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware),
})