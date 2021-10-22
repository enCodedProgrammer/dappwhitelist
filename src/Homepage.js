import React, { useEffect } from 'react'
import barCode from "./eth-barcode.png"
import axios from "./axios"
function Homepage() {

    useEffect(() => {
        axios.get("/");
    }, [])

    return (
        <div>
            <img src={barCode}>
            </img>
        </div>
    )
}

export default Homepage
