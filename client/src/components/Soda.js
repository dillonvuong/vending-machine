import React from 'react'
import '../App.css';
import axios from 'axios'

function Soda(props) {
    const handleClick = async () =>{
        const res = await axios.patch(`http://localhost:8080/sodas/buy/${props.soda._id}`);
        console.log(res)
        props.refetchSodas()
    }
    return (
    <>
        <div className='SodaDiv'>
            <h1>{props.soda.name}</h1>
            <h2>${props.soda.cost}</h2>
        </div>
        <h4>Remaining: {props.soda.maxQuantity}</h4>
        <p>{props.soda.description}</p>
        {/* <a href='/somefile.txt' onClick={handleClick}>Buy</a> */}

        <button className='BuyButton' onClick={handleClick}>Buy</button>
    </>
    )
}

export default Soda