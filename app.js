const $startGameButton = document.querySelector(".start-quiz");
const $userName = document.getElementById("user");
const $userField = document.querySelector(".insert-name-user");
const $playersName = document.querySelector(".players-name");
const $questionContainer = document.querySelector(".questions-container");
const $answersContainer = document.querySelector(".answers-container");
const $questionText = document.querySelector(".question");
const $answers = document.querySelectorAll(".answer");
const $nextQuestionButton = document.querySelector(".next-question");

import { questions } from "./questions.js";

$startGameButton.addEventListener("click", startGame);
$nextQuestionButton.addEventListener("click", displayNextQuestion);


let currentQuestionIndex = 0;
let totalCorrect = 0;

function startGame(){


    if($userName.value.trim() === ""){
        alert('Preencha seu nome!');
    }
    else {
        const playUser = $userName.value;

        $userField.classList.add("hide");
        $startGameButton.classList.add("hide");
        $questionContainer.classList.remove("hide");
        $playersName.textContent = `Jogador: ${playUser.toUpperCase()}`

        displayNextQuestion()
    }

    
    
}

function displayNextQuestion() {

    while($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild);
    }


    document.body.removeAttribute("class");

    $nextQuestionButton.classList.add("hide");



    if(questions.length === currentQuestionIndex){
        return finishGame();
  
        //caso o número de perguntas chegue ao tamando da minha questions o programa irá se encerrar retornando para a função  finishGame;
      }

    $questionText.textContent = questions[currentQuestionIndex].question

    questions[currentQuestionIndex].answers.forEach(answer => {

        const newAnswer = document.createElement("button");
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.text;

        if(answer.correct){

            newAnswer.dataset.correct = answer.correct;

        }

        $answersContainer.appendChild(newAnswer);


        newAnswer.addEventListener("click", selectAnswer);


    });



function selectAnswer(event){


    const answerClicked = event.target;

    if(answerClicked.dataset.correct){
        document.body.classList.add("correct");
    }
    else{
        document.body.classList.add("incorrect");
    }


    document.querySelectorAll(".answer").forEach(button => {
        if(button.dataset.correct){
            button.classList.add("correct");
        }
        else{
            button.classList.add("incorrect");
        }

        button.disabled = true;
    })
    $nextQuestionButton.classList.remove("hide");
    currentQuestionIndex++;

}



function finishGame(){

    const totalQuestions = questions.length;

    const performance = Math.floor(totalCorrect * 100 / totalQuestions);

    let message = "";


    switch (true) {
      case (performance >= 90):
        message = "Excelente"
        break
      case (performance >= 70):
        message = "Muito bom"
        break
      case(performance >= 50):
        message = "Bom"
        break
      default:
        message = "Pode melhorar :("
    }

    $questionsContainer.innerHTML = 
    
    `
      <p class= "final-message">
        Você acertou ${totalCorrect} de ${totalQuestions} questões!
        <span>Resultado: ${message}</span>
      </p>

      <button onclick = window.location.reload() class = "button">

      Refazer teste

      </button>
    `
  }




}



// function checkNonNumeric(event) {
//     // Obtém o código do caractere digitado
//     var charCode = event.which ? event.which : event.keyCode;

//     // Permite apenas caracteres não numéricos
//     if (charCode >= 48 && charCode <= 57) {
//         // Se o caractere for numérico, retorna falso para impedir a entrada
//         return false;
//     }
//     // Se não for numérico, permite a entrada
//     return true; 
// }












// const questions = [
//   {
//     question: "Qual é o nome completo do personagem principal em Breaking Bad?",
//     answers: [
//       { text: "Walter White", correct: true },
//       { text: "Jesse Pinkman", correct: false },
//       { text: "Saul Goodman", correct: false },
//       { text: "Gustavo Fring", correct: false }
//     ]
//   },
//   {
//     question: "Qual é o apelido de Walter White quando ele começa a produzir metanfetamina?",
//     answers: [
//       { text: "Heisenberg", correct: true },
//       { text: "El Loco", correct: false },
//       { text: "The Chemist", correct: false },
//       { text: "Mr. Blue", correct: false }
//     ]
//   },
//   {
//     question: "Qual é o nome do laboratório móvel de Walter White e Jesse Pinkman?",
//     answers: [
//       { text: "RV", correct: true },
//       { text: "The Den", correct: false },
//       { text: "Crystal Palace", correct: false },
//       { text: "The Lab", correct: false }
//     ]
//   },
//   {
//     question: "Quem é o cozinheiro principal no laboratório de Gus Fring?",
//     answers: [
//       { text: "Gale Boetticher", correct: true },
//       { text: "Todd Alquist", correct: false },
//       { text: "Mike Ehrmantraut", correct: false },
//       { text: "Hank Schrader", correct: false }
//     ]
//   },
//   {
//     question: "Quem é o irmão de Walter White, que trabalha na Agência de Controle de Narcóticos?",
//     answers: [
//       { text: "Hank Schrader", correct: true },
//       { text: "Ted Beneke", correct: false },
//       { text: "Saul Goodman", correct: false },
//       { text: "Skyler White", correct: false }
//     ]
//   },
//   {
//     question: "Onde Walter White esconde sua fortuna ganha com a produção de metanfetamina?",
//     answers: [
//       { text: "No deserto", correct: false },
//       { text: "Em barris enterrados", correct: true },
//       { text: "No banco", correct: false },
//       { text: "Sob o assoalho de sua casa", correct: false }
//     ]
//   }
// ];











































































