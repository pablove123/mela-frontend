import React, { useState } from 'react';

function GuessTheNumber() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Guess a number between 1 and 100');

  const [currentGuess, setCurrentGuess] = useState('')

  function handleGuess(e) {
    e.preventDefault();
    const userGuess = parseInt(guess, 10);
    if (isNaN(userGuess)) {
      setMessage('Please enter a valid number');
    } else if (userGuess < 1 || userGuess > 100) {
      setMessage('Please enter a number between 1 and 100');
    } else if (userGuess === number) {
      setMessage(`Congratulations! You guessed the number ${number}!`);
    } else if (userGuess < number) {
      setMessage('The number is higher');
    } else if (userGuess > number) {
      setMessage('The number is lower');
    }
    setCurrentGuess(guess)
    setGuess('');
  }

  return (
    <div>
      <h1>Guess the Number Game</h1>
      <p>{message}</p>
      <p>Previous Guess: {currentGuess}</p>
      <form onSubmit={handleGuess}>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button type="submit">Guess</button>
      </form>
    </div>
  );
}

export default GuessTheNumber;