import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [sodas, setSodas] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/sodas')
            .then(res => {
                console.log(res)
                setSodas(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

  return (
    <div>
        <ul>
            {
                sodas.map( soda => <li key={soda._id}>{soda.name}</li>)
            }
        </ul>
    </div>
  )
}

export default DataFetching