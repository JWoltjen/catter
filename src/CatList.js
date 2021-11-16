import React, {useEffect} from 'react'

function CatList() {

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await fetch('https://cataas.com/api/cats?tags=cute&limit=10')
        const data = await res.json()
        console.log(data)
        return data
    }

    return (
        <div>
            <h1>hello again</h1>
        </div>
    )
  
}

export default CatList
