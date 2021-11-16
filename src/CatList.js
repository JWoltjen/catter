import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setCats} from './features/catsSlice'
import Cat from './Cat'

function CatList() {
    const dispatch = useDispatch(); 

    const catState = useSelector(state => state.cats)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await fetch('https://cataas.com/api/cats?tags=cute&limit=10')
        const data = await res.json()
        dispatch(setCats(data.map(cat => ({...cat, upvotes: 0})))); 
    }

    return (
        <div>
            {catState && <ul>
                {catState.map((cat) => (
                    <Cat cat={cat} id={cat.id} created_at={cat.created_at} tags={cat.tags}/>
                ))}
            </ul>}
        </div>
    )
  
}

export default CatList
