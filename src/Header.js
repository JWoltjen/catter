import React from 'react'
import {useSelector, useDispatch} from 'react-redux'; 
import {resetAllCats} from './features/catsSlice'

function Header() {

    const catState = useSelector(state => state.cats)
    const starsTotal = catState.reduce((acc, catItem) => acc + catItem.upvotes, 0); 
    const dispatch = useDispatch(); 

    return (
        <header>
            <h1>Catter</h1>
            <h2>Please enjoy some cats</h2>
                <div>Total {starsTotal} ⭐</div> 
                <div onClick={() => dispatch(resetAllCats())}>Reset All 🔄</div>
        </header>
    )
}

export default Header
