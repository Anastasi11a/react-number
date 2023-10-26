// Simulate rolling two dice and print the sum of the two dice.
import React, { useState } from "react";
import './style/myStyle.css';

function RollingSum() {
    const [firstDie, setFirstDie] = useState(1);
    const [secondDie, setSecondDie] = useState(1);

    const rollingDice = () => {
        const firstRandomDice = Math.floor(Math.random() * 6) + 1;
        const secondRandomDice = Math.floor(Math.random() * 6) + 1;
        
        setFirstDie(firstRandomDice);
        setSecondDie(secondRandomDice);
    };

    const sum = firstDie + secondDie;

    return (
        <>
            <div className="container">
                <h1 className="header">The Dies Roll 🎲🎲</h1>
                    <button 
                        className="btn" 
                        onClick={rollingDice}>
                        Generate
                    </button>

                    <div className="diceContainer">
                        <div className="dice">{firstDie}</div>
                        <div className="dice">{secondDie}</div>
                    </div>

                    <p className="resultTxt">Result: 
                        <span className="rolling">{sum}</span>
                    </p>
            </div>
        </>
    );
}

export default RollingSum;