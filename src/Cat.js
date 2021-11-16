import React from 'react'
import {useDispatch} from 'react-redux'
import {upVoteCat} from './features/catsSlice'

function Cat({cat, id, created_at, tags }) {
    const dispatch = useDispatch(); 
    
    return (
        <div className='cat'>
       <div className='cat__controls'>
            <div onClick={() => dispatch(upVoteCat(cat.id))}>⭐</div>
            <div>🔄</div>
        </div>
            {cat.upvotes > 0 && <div className='cat__upvotes'>{cat.upvotes}⭐</div>}
            <li className='cat__image' key={id} style={{backgroundImage: `url(https://cataas.com/cat/${id})`,}}>
            </li>
            </div>
    )
}

export default Cat
