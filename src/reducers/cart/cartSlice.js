
import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    totalCount: 0,
    productList: [],
   
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProducToCart:(state, action)=>{
       state.productList= [...productList, action.payload],
       state.totalCount +=1
        
    },
    unsetUser:(state)=>{
        state.email = "",
        state.fullName="",
        state.token= ""
    }
   
  },
})

// Action creators are generated for each case reducer function
export const { setUser,unsetUser } = userSlice.actions

export default userSlice.reducer