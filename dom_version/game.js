const scoreboard = document.querySelector('#scoreboard'); //fetches reference to scoreboard element

function pushScore (elem,pScore,cScore) {

	//This functison pushes assings a score string (format "X-Y") to the textContent of some element "elem"

	let visibleScore = `${pScore} - ${cScore}`
	elem.textContent = visibleScore
};

function rockPaperScissors() {
	/* 
	This function plays a 5 round match of rock-paper-scissors!
	*/

	//Initializing variables

	let round = 0;
	let playerScore = 0;
	let computerScore = 0;
	let playerChoice = '';
	let computerChoice = '';
	const tag = document.querySelector('#tag'); //fetches reference to tag container

	pushScore(scoreboard,playerScore,computerScore); //pushes initial score (0-0) to scoreboard element


	const player_options = document.querySelectorAll('.option'); //fetches nodeList of option elements
	player_options.forEach((option) => option.addEventListener('click', 


	//each "option", on click, calls function playRound, which plays a round of RPS.

	function playRound (e) {
		if (round === 5) return; // logic piece that avoids playing beyond the 5-th round

		playerChoice = e.target.id; // fetches the string from the option's ID, which matches the input necessary for arbiter()
		computerChoice = computerPlay(); // fetches the random computer choice

		result = arbiter(playerChoice,computerChoice); // decides winner based on player and computer choices
		tag.innerHTML = `Player: ${playerChoice} <br> Computer: ${computerChoice}`; //displays choices in tag container

		if (result === 1) { // increases score according to the winner
			playerScore += 1;
		} else if (result === -1) {
			computerScore += 1;
		}
		round += 1; // advances the round being played

		pushScore(scoreboard,playerScore,computerScore);

		if (round === 5) { // decides global winner after exactly 5 rounds
			if (playerScore	=== computerScore) {
				tag.innerHTML = tag.innerHTML + '<br>The match is tied! Thanks for playing!';
			} else if (playerScore > computerScore) {
				tag.innerHTML = tag.innerHTML + '<br>The player has won the match! Thanks for playing!';
			} else {
				tag.innerHTML = tag.innerHTML + '<br>The computer has won the match! Thanks for playing!';
			}
			player_options.forEach((option) => option.removeEventListener('click',playRound)); // removes eventListeners so as to avoid playing beyond round 5
		}

	}));

}

function arbiter (playerSelection,computerSelection) {
	/*
	This function takes in two choices for the
	rock-paper-scissors game and decides a winner.
	*/

	if (playerSelection === computerSelection) {
		return 0;
	} else {
		switch (playerSelection) {
			case 'rock':
				if (computerSelection === 'scissors') {
					return 1;
				} else {
					return -1;
				}
			case 'paper':
				if (computerSelection === 'rock') {
					return 1;
				} else {
					return -1;
				}
			case 'scissors':
				if (computerSelection === 'paper') {
					return 1;
				} else {
					return -1;
				}				
		}
	}
}


function computerPlay () {
	/*
	This function chooses between three options:
	rock, paper or scissors by choosing a random
	integer 'z' between 0 and 2 (inclusive) and then
	returńing the z-th element of a tuple containing
	the options as entries.
	*/
	options = ['rock','paper','scissors'];
	z = Math.floor(Math.random() * 3);
	return options[z]
}

rockPaperScissors();
