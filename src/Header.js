import React from 'react'
import {useSelector} from 'react-redux'

function Header() {
    const catState = useSelector(state => state.cats)
    const starsTotal = catState.reduce((acc, catItem) => acc + catItem.upvotes, 0); 

    return (
        <header>
            <h1>Catter</h1>
            <h2>Please enjoy some cats</h2>
            <div>Total {starsTotal} ⭐</div>
            <div>Reset All 🔄</div>
        </header>
    )
}

export default Header
