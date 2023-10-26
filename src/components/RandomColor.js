// Create a function that generates a random RGB color value (e.g., "rgb(255, 0, 123)")
import React, { useState } from "react";
import './style/myStyle.css';

function RandomColor() {
    const [randomColor, setRandomColor] = useState(null);

    const generateRangomColor = () =>  {
        const redColor = Math.floor(Math.random() * 256);
        const greenColor = Math.floor(Math.random() * 256);
        const blueColor = Math.floor(Math.random() * 256);
        
        return `rgb(${redColor}, ${greenColor}, ${blueColor})`;
    };

    const handleRandom = () => {
        setRandomColor(
            generateRangomColor(randomColor)
        );
    }

    return (
        <>
            <div className="container">
                <h1 className="header">🎨 Random Color Generator</h1>
                <button 
                    className="btn" 
                    onClick={handleRandom}
                >Generate</button>

                <p className="resultTxt">Result:
                <br />
                    <span
                        className="color" 
                        style={{ backgroundColor: randomColor  }}
                    > {randomColor}
                    </span>
                </p>
            </div>
        </>
    );
}

export default RandomColor;