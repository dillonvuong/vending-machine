import React, {useState, useEffect, useFetch} from 'react'

import axios from 'axios'
import Soda from './Soda'

function VendingMachine() {
    const [sodas, setSodas] = useState([])

    const fetchSodas = () => {
        axios.get('http://localhost:8080/sodas')
            .then(res => {
                setSodas(res.data)
            })
            .catch(err => {
                console.log(err)
        })
    }

    useEffect(() => {
        fetchSodas()
    }, [])

    const refetchSodas = () => {
        fetchSodas();
    }

  return (
    <div>
        <ul style={{listStyle: "none"}}>
            {
                sodas.map( soda => 
                    <Soda
                        key={soda._id} 
                        soda={soda}
                        refetchSodas={refetchSodas}
                    />
                )
            }
        </ul>
    </div>
  )
}

export default VendingMachine