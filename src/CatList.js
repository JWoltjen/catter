import React, {useState, useEffect} from 'react'
import { useDebounce } from './useDebounce'
import {useSelector, useDispatch} from 'react-redux'
import {setCats} from './features/catsSlice'
import Cat from './Cat'

function CatList() {
    const dispatch = useDispatch(); 

    const catState = useSelector(state => state.cats)
    const [query, setQuery] = useState('cute')
    useEffect(() => {
        fetchData()
    }, [dispatch])

    const fetchData = async () => {
        const res = await fetch(`https://cataas.com/api/cats?tags=${query}`)
        const data = await res.json()
        dispatch(setCats(data.map(cat => ({...cat, upvotes: 0})))); 
    }

    const changeHandler = (e) => {
        e.preventDefault()
        setQuery(e.target.value)
    }

    useDebounce(query, 500, fetchData)

    return (
        <div>
            <div className='container'>
                <input 
                    className='search-input'
                    type='text'
                    placeholder='what type of cat?'
                    value={query}
                    onChange={changeHandler}
                />
            </div>
            {catState && <ul>
                {catState.map((cat) => (
                    <Cat cat={cat} id={cat.id} created_at={cat.created_at} tags={cat.tags}/>
                ))}
            </ul>}
        </div>
    )
  
}

export default CatList
