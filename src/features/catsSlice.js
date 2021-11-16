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
            }
        }, 
        resetUpVotes: (state, action) => {
            const targetCat = state.cats.find(cat => cat.id === action.payload); 
            if(targetCat){
                targetCat.upvotes = 0; 
                console.log('upvotes reset!')
            } else {
                console.log("something wrong!")
            }
        }, 
    }
}); 

export const { setCats, upVoteCat, resetUpVotes } = catsSlice.actions; 

export default catsSlice.reducer; 