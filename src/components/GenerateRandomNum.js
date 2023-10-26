// Generate a random number between 1 and 10 (inclusive).

import React, { useState, useEffect } from "react";
import './style/myStyle.css';

function GenerateRandomNum() {
    const [min, setMin] = useState(null);
    const [max, setMax] = useState(null);
    const [randomNum, setRandomNum] = useState(null);

    const generateRandom = () => {
        const random = Math.floor(Math.random() * (max - min + 1) + min);
        setRandomNum(random);
    }

    const handleMinInputChange = (e) => {
        const inputVal = e.target.value;
        setMin(parseInt(inputVal));
    }
    const handleMaxInputChange = (e) => {
        const inputVal = e.target.value;
        setMax(parseInt(inputVal));
    }

    useEffect(() => {
        setRandomNum(
            generateRandom(min, max)
        );
    }, [min, max]);

    return (
        <>
            <div className="container">
                <h1 className="header">🎱 Random Number Generator</h1>
                <div className="input-container">
                    <input 
                        type="number"
                        value={min}
                        onChange={handleMinInputChange}
                        placeholder="min"
                    />
                    <br />
                    <input 
                        type="number"
                        value={max}
                        onChange={handleMaxInputChange}
                        placeholder="max"
                    />
                    <br />
                    <button className="btn"
                        onClick={generateRandom}>
                        Generate
                    </button>

                    <p className="resultTxt">Random Number: 
                        <span className="random">
                            {randomNum}
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default GenerateRandomNum;
