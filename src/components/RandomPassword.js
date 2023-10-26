import { useState } from "react";

function RandomPassword() {
    const [randomPass, setRandomPass] = useState('');
    const [lengthPass, setLengthPass] = useState(10);

    const generateRandomPassword = () => {
        const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let randomSymbols = '';

        for (let i = 0; i < lengthPass; i++) {
            const random = Math.floor(Math.random() * symbols.length);
            randomSymbols += symbols.charAt(random);
        }

        setRandomPass(randomSymbols);
    };

    const handleLengthChange = (e) => {
        const length = parseInt(e.target.value);
        setLengthPass(length);
    };

    return (
        <>
            <div className="container">
                <h1 className="header">Random Password</h1>
                    <button 
                        className="btn" 
                        onClick={generateRandomPassword}
                    >Generate</button>

                    <input 
                        type="number"
                        value={lengthPass}
                        onChange={handleLengthChange}
                    />

                    {randomPass &&
                        <p className="resultTxt">Result: 
                        <br />
                            <span className="password">{randomPass}</span>
                        </p>
                    }
            </div>
        </>
    );


}

export default RandomPassword;