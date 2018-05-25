$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};
/*
	var trivia = {
		questions: ['How many buttons are on the Original NES Controlling?',
								'In what game series are Golden Rings used as Life-energy and Money?',
								'In what series were Dracula and The Grim Reaper recurring villians?',
								'What is known as the hardest game of all time?',
								'What part of an Xbox 360 causes the "Red Ring of Death?',
								'Who is the Elven Sword-Wielding, green clothed hero in the Legend of Zelda series?',
								'How many forms does the final boss of The Legend of Dragoon have?',
								'NES is short for...?',
								'What was the first home console?',
								'Who is the most famous video game character of all time?'],
		q1: ['A. 4',
				 'B. 5',
				 'C. 8',
				 'D. 10'],
		q2: ['A. Super Mario Bros',
				 'B. Sonic the Hedgehog',
				 'C. Soul Reaver',
				 'D. Harvest Moon'],
		q3: ['A. Soul Reaver',
				 'B. Castlevania',
				 'C. Doom',
				 'D. Wolfenstein'],
		q4: ['A. Ghost N Goblins',
				 'B. Assassins Creed',
				 'C. Ninja Gaiden',
				 'D. Contra'],
		q5: ['A. Graphics Card',
				 'B. Heat Sink',
				 'C. The Lights',
				 'D. Both A and B'],
		q6: ['A. Sheik',
				 'B. Link',
				 'C. Zelda',
				 'D. Ganon'],
		q7: ['A. 1',
				 'B. 2',
				 'C. 5',
				 'D. 7'],
		q8: ['A. Never Ending Simulation',
				 'B. New Enterprise System',
				 'C. Not Ever Still',
				 'D. Nintendo Entertainment System'],
		q9: ['A. NES',
				 'B. Sega Genisis',
				 'C. Oddessy',
				 'D. Atari 2600],
		q10: ['A. Pikachu',
				  'B. Link',
				  'C. Mario',
				  'D. Sonic']		 						
	}
*/
var correct = 0;
var wrong = 0;
var q1 = {
	question : 'How many buttons are on the original NES controller?',
	possibleAnswers : ['A. 4',
				 'B. 5',
				 'C. 8',
				 'D. 10'],
	flags : [false, false, true, false],
	answer : 'C. 8'
};

var q2 = {
	question: 'In what game series are Golden Rings used as Life-energy and Money?',
	possibleAnswers: ['A. Super Mario Bros',
				 'B. Sonic the Hedgehog',
				 'C. Soul Reaver',
				 'D. Harvest Moon'],
	flags : [false, true, false, false],
	answer : 'B. Sonic the Hedgehog'
};

var q3 = {
	question : 'In what series were Dracula and The Grim Reaper recurring villians?',
	possibleAnswers : ['A. Soul Reaver',
				 'B. Castlevania',
				 'C. Doom',
				 'D. Wolfenstein'],
	flags : [false, true, false, false],
	answer : 'B. Castlevania'
};

var q4 = {
	question : 'What is known as the hardest game of all time?',
	possibleAnswers : ['A. Ghost N Goblins',
				 'B. Assassins Creed',
				 'C. Ninja Gaiden',
				 'D. Contra'],
	flags : [true, false, false, false],
	answer : 'A. Ghost N Goblins'
};

var q5 = {
	question : 'What part of an Xbox 360 causes the "Red Ring of Death?',
	possibleAnswers : ['A. Graphics Card',
				 'B. Heat Sink',
				 'C. The Lights',
				 'D. Both A and B'],
	flags : [false, false, false, true],
	answer : 'D. Both A and B'
};

var q6 = {
	question : 'Who is the Elven Sword-Wielding, green clothed hero in the Legend of Zelda series?',
	possibleAnswers : ['A. Sheik',
				 'B. Link',
				 'C. Zelda',
				 'D. Ganon'],
	flags : [false, true, false, false],
	answer : 'B. Link'
};

var q7 = {
	question : 'How many forms does the final boss of The Legend of Dragoon have?',
	possibleAnswers : ['A. 1',
				 'B. 2',
				 'C. 5',
				 'D. 7'],
	flags : [false, false, false, true],
	answer : 'D. 7'
};

var q8 = {
	question : 'NES is short for...?',
	possibleAnswers : ['A. Never Ending Simulation',
				 'B. New Enterprise System',
				 'C. Not Ever Still',
				 'D. Nintendo Entertainment System'],
	flags : [false, false, false, true],
	answer : 'D. Nintendo Entertainment System'
};

var q9 = {
	question : 'What was the first home console?',
	possibleAnswers : ['A. NES',
				 'B. Sega Genisis',
				 'C. Oddessy',
				 'D. Atari 2600'],
	flags : [false, false, true, false],
	answer : 'C. Oddessy'
};

var q10 = {
	question : 'Who is the most famous video game character of all time?',
	possibleAnswers : ['A. Pikachu',
				  'B. Link',
				  'C. Mario',
				  'D. Sonic'],
	flags : [false, false, true, false],
	answer : 'C. Mario'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
//  getAnswer();  
//  nextQuestion(index);
}

//function nextQuestion() {
//	index = index++;
//	console.log(index);
//}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}
//		for (var i=0; i<questionArray.length; i++) {
//			$('.question').append('<p>'+questionArray[i].question+'</p>');
//			for (var j=0; j<questionArray[i].possibleAnswers.length; j++) {
//				$('.answers').append('<span><button id="possibleAnswer">' + questionArray[i].possibleAnswers[j]+ '</button></span>');
//			}
//			$('#possibleAnswers').on('click', function() {


//		console.log("click");
//		countdownTimer.start();
//		for (var i = 0; i < questionArray.length; i++) {
//			console.log(i);

//			$('.timer').html('<h3>'+countdownTimer.time + ' seconds remaining</h3>');
//			$('.question').html(questionArray[i].question);
//			while (countdownTimer != 0) {

//			}
		
//	});
//	$('#startButton').click(countdownTimer.start);

//}
setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


//	$('#start').click(countdownTimer.start);
});