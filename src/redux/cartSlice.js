import {createSlice} from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[],
        total:0
    }
    ,
    reducers:{
        addItems:(state,action)=>{
            state.total=state.total+Number(action.payload.price)
            state.items.push(action.payload)

        },
        clearItems:(state)=>{
            state.total=0
            state.items=[]

            return state
        },
        removeItem:(state, action) => {
            const itemIdToRemove = action.payload;
            const updatedItems = state.items.filter(item => item.id !== itemIdToRemove);
            // Calculate the updated total based on the updatedItems array
            const updatedTotal = updatedItems.reduce((total, item) => total + Number(item.price), 0);
      
            return {
              items: updatedItems,
              total: updatedTotal,
            }
        }
    }
})

export const {addItems,clearItems,removeItem} = cartSlice.actions
export default cartSlice.reducer