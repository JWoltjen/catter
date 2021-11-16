import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setCats} from './features/catsSlice'

function CatList() {
    const dispatch = useDispatch(); 
    const catState = useSelector(state => state.cats)
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
            {catState && <ul>
                {catState.map((cat) => (
                    <li key={cat.id}>{cat.id}</li>
                ))}
            </ul>}
        </div>
    )
  
}

export default CatList
