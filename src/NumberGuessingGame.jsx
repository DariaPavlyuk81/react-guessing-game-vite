import React, { useState } from "react";
import GuessControl from "./GuessControl";

import GameOver from "./GameOver";



const NumberGuessingGame = () => {
    const [numberToGuess,setNumberToGuess] = useState(Math.floor(Math.random()* 100)+1);
    const [numberOfGuesses,setNumberOfGuesses] = useState(0);
    const [latestGuess, setLatestGuess] = useState(null);


const handleGuess = (guess) =>{
    setLatestGuess(guess);
    setNumberOfGuesses(prevGuesses => prevGuesses +1);
};



const handleReset = () => {
    setNumberToGuess(Math.floor(Math.random() * 100) +1);
    setNumberOfGuesses(0);
    setLatestGuess(null);
};
    
return (
    <div>
        <h1>Guess the Number</h1>
        {latestGuess === numberToGuess ? (
            <GameOver onReset={handleReset}/>
        ):(
            <div>
                <GuessControl onGuess={handleGuess}/>
                <p>Number of guesses: {numberOfGuesses}</p>
                <p>Latest guess: {latestGuess}</p>
        
    </div>
)}
</div>
);
};


export default NumberGuessingGame;