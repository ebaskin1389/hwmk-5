console.log("connected");

// DECLARING GLOBAL VARIABLES
// Grabbing displays
var correct = document.getElementById("correct");
console.log(correct);

var incorrect = document.getElementById("incorrect");
console.log(incorrect);

var timeRemaining = document.getElementById("timeRemaining");


// THIS IS JUST A VARIABLE
var scoreCounter = 0;

//Questions array
	var questions=["What was Britney Spears' first single?", "Boasting a guest verse from Dr. Dre, what classic '90s R&B hit features Blackstreet singing, 'I like the way you work it'?", "What was the first TV show to use the term 'to google'?", "Who was the Beatles' manager for the majority of their career?"];

var answers1 =["Insane in the Membrane", "Hit Me Baby (One More Time)", "Layla", "Who Let the Dogs Out",];
//       "corrrect" : "b"

var answers2=["Hardly Any Diggity", "A Fair Amount of Diggity", "No Diggity", "An Overwhelming Surplus of Diggity"];
       //"corrrect" : "c"

var answers3=["Friends","Leave it to Beaver", "Buffy the Vampire Slayer","Ellen"];
//      "corrrect" : "c"

var answers4=["Ed Sullivan","Ronald Reagan","Brian Epstein","Jesus"];


// $.getJSON('js/questions1.json').done(function(data){
//         window.questionnaire = data;
//         console.log(window.questionnaire);
//         startGame();
//     });

// DECLARING MAIN CODE
function startGame() {
    correct.innerHTML = 0;
    incorrect.innerHTML = 0;
    unanswered.innerHTML =0;
    randomQuestion();
}

    //.innerHTML = randomQuestion;
    

startGame();
answers();

// var selectFruit = ["Apple", "Orange", "Banana", "Cherry"];
// var pickAFruit = function () {
// var todaysFruit = selectFruit[Math.floor(Math.random() * 4)];
// return todaysFruit;
// };

function randomQuestion(){
        document.getElementById("randomQuestion").innerHTML = questions[0];
}

function answers(){
  for (i = 0; i < 4; i++) {
    text += answers1[i];
document.getElementById("answers", "answers", "answers", "answers").innerHTML = text;
  }
}


//start timer
var count=30;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second


function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }

 document.getElementById("timer").innerHTML= "Time remaining: " + count + " secs"; // watch for spelling
}

//compare answer
// determine if Mathif match inxwewmwn SCORE AND GOOD JOB
// IF WRONG OR TIMEOUT ADD TO INCORRECT AND NICE TRY, TRY AGAIN
// new game button


//

// function comparativeFunction(){
// 	if (scoreCounter === parseInt(randomQuestion) { 
// 		console.log("I won");
// 		correct.innerHTML++;
// 		console.log(correct);
// 		reset();
// 	}
// 	else if (scoreCounter > parseInt(randomQuestion) {
// 		console.log("I lost");
// 		incorrect.innerHTML++;
// 		console.log(incorrect);
// 		reset();
// 	}
// }


// function reset() {
//     randomQuestion.innerHTML = (randomQuestion);
//     userScore.innerHTML = 0;
//     scoreCounter = 0;
// }



// // Click event listener
// $(".crystal").on("click", function(){
// 	// console.log(this);
// 	console.log(this.value);
// 	console.log(parseInt(this.value));
// 	scoreCounter = scoreCounter + parseInt(this.value);
// 	comparativeFunction();
// })

