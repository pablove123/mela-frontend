import styles from './TicTacToe.module.css'
const TTT = (props) => {
  
  return ( 
  <>
  <h1>Tic-Tac-Toe</h1>
	<h2 id="message">Message</h2>
	<h3>Click a square:</h3>

	<section class="board">
		<div class="sqr" id="sq0"></div>
		<div class="sqr" id="sq1"></div>
		<div class="sqr" id="sq2"></div>
		<div class="sqr" id="sq3"></div>
		<div class="sqr" id="sq4"></div>
		<div class="sqr" id="sq5"></div>
		<div class="sqr" id="sq6"></div>
		<div class="sqr" id="sq7"></div>
		<div class="sqr" id="sq8"></div>
	</section>  

	<button id="reset"> Reset Game</button>  
  </> );
}

export default TTT;