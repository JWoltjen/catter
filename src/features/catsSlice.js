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
        }, 
        upVoteCat: (state, action) => {
            const targetCat = state.cats.find(cat => cat.id === action.payload); 
            if(targetCat){
                targetCat.upvotes += 1; 
                console.log('cat upvoted!')
            }
        }
    }
}); 

export const { setCats, upVoteCat } = catsSlice.actions; 

export default catsSlice.reducer; 