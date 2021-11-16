import React from 'react'
import {useDispatch} from 'react-redux'

function Cat({id, created_at, tags }) {
    const dispatch = useDispatch(); 
    
    return (
        <li key={id}>
            <h1>{id}</h1>
        </li>
    )
}

export default Cat
