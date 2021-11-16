import React from 'react'
import {useDispatch} from 'react-redux'

function Cat({id, created_at, tags }) {
    const dispatch = useDispatch(); 
    
    return (
        <div className='cat'>
        <li className='cat__image' key={id} style={{backgroundImage: `url(https://cataas.com/cat/${id})`,}}>
            
        </li>
        </div>
    )
}

export default Cat
