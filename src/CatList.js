import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setCats} from './features/catsSlice'

function CatList() {
    const dispatch = useDispatch(); 
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await fetch('https://cataas.com/api/cats?tags=cute&limit=10')
        const data = await res.json()
        dispatch(setCats(data))
    }

    return (
        <div>
            
            <pre>hello</pre>
        </div>
    )
  
}

export default CatList
