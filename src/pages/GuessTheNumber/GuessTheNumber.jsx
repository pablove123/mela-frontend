import React, { useState } from 'react';
import styles from "../GuessTheNumber/GuessTheNumber.module.css"

function GuessTheNumber() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [tries, setTries] = useState('0');
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
      setMessage(`Congratulations! You guessed the number ${number}!`)
      ;
    } else if (userGuess < number) {
      setMessage('The number is higher')
      setTries();
    } else if (userGuess > number) {
      setMessage('The number is lower');
    }
    setCurrentGuess(guess)
    setGuess('');
  }

  return (
    <div>
      <h1>Guess the Number Game</h1>
      <p className={styles.message}>{message}</p>
      <p className={styles.message}>Previous Guess: {currentGuess}</p>
      <form className={styles.message} onSubmit={handleGuess}>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button type="submit">Guess</button>
      </form>
      <h2>It took you {tries} guesses </h2>
    </div>
  );
}

export default GuessTheNumber;