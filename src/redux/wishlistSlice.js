import {createSlice} from '@reduxjs/toolkit'


const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState:[],
    reducers:{
        addWishlist:(state,action)=>{
            state.push(action.payload)

        },
        clearWishlist:(state,action)=>{
            state=[]
            return state
        },
        removeFromWishlist:(state,action)=>{
            return state.filter((item)=>item.id !== action.payload) //this line will return me only that element which are not equal to action.payload
        
        }
    }
})

export const {addWishlist,clearWishlist,removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer