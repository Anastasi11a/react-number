import { useState } from "react";
import './style/myStyle.css';

function RandomNames() {
    const [outputFemaleNames, setOutputFemaleNames] = useState('');
    const [outputMaleNames, setOutputMaleNames] = useState('');

    const generateRandomNames = () => {
        const arrFemaleNames = ["Aelarion","Elowen", "Galadriel", "Thalindra", "Lirael", "Alino", "Nimue", "Maelindra", "Elenwe", "Araluen", "Arwen", "Elanor", "Thranduil", "Lóte", "Elysia", "Loraelith", "Caladwen", "Yavanna", "Anarwen", "Ariandel"];
        const arrMaleNames = ["Legolas", "Eldarion", "Thranduil", "Arathorn", "Finrod", "Galadran", "Thalion", "Elrond", "Haldir", "Lindir", "Aragorn", "Celeborn", "Fingolfin", "Eolande", "Gildor", "Halbarad", "Imrahil", "Lórien", "Maedhros", "Círdan"];

        let randomFemaleName = arrFemaleNames[
            Math.floor(Math.random() * arrFemaleNames.length)
        ];
        let randomMaleName = arrMaleNames[
            Math.floor(Math.random() * arrMaleNames.length)
        ];

        setOutputFemaleNames(randomFemaleName);
        setOutputMaleNames(randomMaleName);
    };

    return (
        <>
            <div className="container">
                <h1 className="header">The Elf Name Generator</h1>
                <div className="input-container">
                    <p className="resultTxt"> 🧝🏻‍♀️ Random Female name: 
                    <br />
                        <span className="randomName">
                            {outputFemaleNames}
                        </span>
                    </p>
                    <p className="resultTxt"> 🧝🏻‍♂️ Random Male name: 
                    <br />
                        <span className="randomName">
                            {outputMaleNames}
                        </span>
                    </p>

                    <button 
                        onClick={generateRandomNames}
                        className="btn"
                    >Generate
                    </button>
                </div>
            </div>
        </>
    );
}

export default RandomNames;