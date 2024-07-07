import React, { useState } from "react";
import './button.css'

function Api(){
    let [count, setCount] = useState(0)
    let incrementCount = () => {
        setCount(count + 1)
    };
    return(
        <div className="temperature">
            <p>The Temperature in Peshawar <br></br>{count}</p>
            <button onClick={(incrementCount)}>
                Temperature
            </button>
        </div>
    )
}

export default Api;