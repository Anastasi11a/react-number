// Create a function that simulates flipping a coin and prints "Heads" or "Tails" based on the result.

import React, { useState } from "react";
import './style/myStyle.css';

function FlipCoin() {
    const [randomFlipCoin, setRandomFlipCoin] = useState();

    const flippingCoin = () => {
        const coins = Math.random();
        return coins < 0.5 ? "Heads" : "Tails";
    };

    const handleFlippingChange = (e) => {
        setRandomFlipCoin(
            flippingCoin(randomFlipCoin)
        );
    };

    return (
        <>
            <div className="container">
                <h1 className="header">🪙 Flip Coin</h1>
                <button 
                    className="btn" 
                    onClick={handleFlippingChange}
                >Generate</button>

                <p className="resultTxt">Heads or Tails:
                <br />
                    <span className="flipping" 
                    > {randomFlipCoin}
                    </span>
                </p>
            </div>
        </>
    );
}

export default FlipCoin;