function rockPaperScissors() {
	/* 
	This function plays a 5 round match of rock-paper-scissors!
	*/

	let round = 0;
	let playerScore = 0;
	let computerScore = 0;

	while (round < 5) {
		let playerChoice = prompt(`Round ${round +1}! Please choose between "rock", "paper" and "scissors"! :)`).trim().toLowerCase();
		if (['rock','paper','scissors'].indexOf(playerChoice) === -1 ) { 
			alert('Invalid choice. Please, try again.');
			continue;
		}
		
		let computerChoice = computerPlay();
		let result = arbiter(playerChoice,computerChoice);
		
		alert(result[0]);
		
		if (result[1] === 1) {
			playerScore += 1;
		} else if (result[1] === -1) {
			computerScore += 1;
		}
		round += 1;

		alert(`The score is: Player ${playerScore} - ${computerScore} Computer!`)
	}

	if (playerScore	=== computerScore) {
		alert('The match is tied! Thanks for playing!')
	} else if (playerScore > computerScore) {
		alert('The player has won the match! Thanks for playing!')
	} else {
		alert('The computer has won the match! Thanks for playing!')
	}
}

function arbiter (playerSelection,computerSelection) {
	/*
	This function takes in two choices for the
	rock-paper-scissors game and decides a winner.
	*/
	let playerWin = `The player chose ${playerSelection}, and the computer chose ${computerSelection}. The player wins!`;
	let playerLose = `The player chose ${playerSelection}, and the computer chose ${computerSelection}. The computer wins!`;
	let playerTie =  `The player chose ${playerSelection}, and the computer chose ${computerSelection}. The round is tied!`;

	if (playerSelection === computerSelection) {
		return [playerTie,0];
	} else {
		switch (playerSelection) {
			case 'rock':
				if (computerSelection === 'scissors') {
					return [playerWin,1];
				} else {
					return [playerLose,-1];
				}
			case 'paper':
				if (computerSelection === 'rock') {
					return [playerWin,1];
				} else {
					return [playerLose,-1];
				}
			case 'scissors':
				if (computerSelection === 'paper') {
					return [playerWin,1];
				} else {
					return [playerLose,-1];
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
