import { createSlice } from '@reduxjs/toolkit'

const initialState = []; 

const catsSlice = createSlice({
    name: 'cats', 
    initialState: {
        cats: initialState
    }, 
    reducers: {
        setCats: (state, action) => {
            state.cats = action.payload
        }
    }
}); 

export const { setCats } = catsSlice.actions; 

export default catsSlice.reducer; 