import React, { useState } from "react";
import { generateRandomNumber } from "./utils";

function GuessTheNumber() {
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [number, setNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState("");

  // Function to handle guess checking
  const handleGuess = () => {
    const num = parseInt(guess, 10);

    if (isNaN(num) || num < 1 || num > 100) {
      setMessage("Please enter a number between 1 and 100");
      return;
    }

    setAttempts((prev) => {
      const totalAttempts = prev + 1;
      if (num === number) {
        setMessage(`Congratulations! You guessed the number in ${totalAttempts} attempts!`);
      } else if (num < number) {
        setMessage("Too low! Try again.");
      } else {
        setMessage("Too high! Try again.");
      }
      return totalAttempts;
    });
  };

  // Function to reset the game
  const resetGame = () => {
    const newNumber = generateRandomNumber();
    console.log("New number is:", newNumber);
    setNumber(newNumber);
    setGuess("");
    setMessage("");
    setAttempts(0);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <h2>Guess the Number</h2>
      <input
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        type="number"
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        id="guess-input"
      />
      <div
        style={{
          margin: "20px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "300px",
        }}
      >
        <button onClick={handleGuess}>Check Guess</button>
        <button onClick={resetGame}>Reset Game</button>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default GuessTheNumber;
