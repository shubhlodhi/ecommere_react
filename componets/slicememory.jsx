import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
const initialState = []
// const [quan ,setqaun] = useState(0)
const Slice  = createSlice(
    {
        name:"cartitem",
        initialState,
        reducers :{
            additem:(state  , action)=>{
                // const item = state.filter(ind=>ind==action.payload)
                // if (item){
                //     item.quantity +=1
                // }
                // else{
                

    
                state.push(action.payload )
                // }
                
            },
            removeitem:(state , action)=>{
                state.splice(action.payload  , 1)
            },
           
            
        } 
    }
)
localStorage.setItem("user" , JSON.stringify(initialState))
export const {additem , removeitem ,increase} = Slice.actions
export default Slice.reducer