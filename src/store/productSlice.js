// import {createSlice} from '@reduxjs/toolkit';

// const initialState = {
//     data:[],
// }

// const productSlice = createSlice({
//     name: 'products',
//     initialState,
//     reducers: {
//         fetchProducts(state, action){
//             state.data = action.payload;
//         }
//     }
// });

// export const {fetchProducts} = productSlice.actions;
// export default productSlice.reducer;

// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState) {
//         const data = await fetch('https://fakestoreapi.com/products')
//         const result = data.json();
//         dispatch(fetchProducts(result));
//     }
// }













// productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StatusCode from '../utils/StatusCode';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  }
);

const initialState = {
  data: [],
  status: StatusCode.IDLE,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = StatusCode.LOADING;
        console.log('StatusCode:', StatusCode.LOADING);
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = StatusCode.IDLE;
        state.data = action.payload;
        console.log('StatusCode:', StatusCode.IDLE);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
        state.error = action.error.message;
        console.log('StatusCode: ', StatusCode.ERROR);
      });
  },
});

export default productSlice.reducer;
