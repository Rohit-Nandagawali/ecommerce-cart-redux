import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";

const store = configureStore({
    // write here slices
    reducer:{
        //name: file export 
        cart:cartSlice,
        wishlist: wishlistSlice
    }

})
export default store;