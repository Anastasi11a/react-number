// Simulate rolling a six-sided dice and print the result.
import React, { useState } from "react";
import './style/myStyle.css';

function Rolling() {
    const [outputRandom, setOutputRandom] = useState(null);

    const rollingDice = () => {
        const min = 1;
        const max = 6;
        
        const randomOutput = Math.floor(
            Math.random() * (max - min + 1)) + min
        ;
        setOutputRandom(randomOutput);
    };

    return (
        <>
            <div className="container">
                <h1 className="header">The Die Roll 🎲</h1>
                    <button 
                        className="btn" 
                        onClick={rollingDice}
                    >Roll the Dice</button>

                    <p className="resultTxt">Result: 
                        <span className="rolling">{outputRandom}</span>
                    </p>
            </div>
        </>
    );
}

export default Rolling;