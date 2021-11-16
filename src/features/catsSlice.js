import { createSlice } from '@reduxjs/toolkit'

const initialCats = []

const catsSlice = createSlice({
    name: 'cats', 
    initialState: {
        cats: initialCats
    }, 
    reducers: {
        setCats: (state, action) => {
            state.cats = action.payload
        }
    }
}); 

export const { setCats } = catsSlice.actions; 

export default catsSlice.reducer; 