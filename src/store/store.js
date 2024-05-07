import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
// import Product from '../components/Product';
import productSlice from './productSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice,
    }
});

export default store;

