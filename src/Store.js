// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice.jsx';

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});

