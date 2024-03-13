const $startGameButton = document.querySelector(".start-quiz");
const $userName = document.getElementById("user");
const $userField = document.querySelector(".insert-name-user");
const $playersName = document.querySelector(".players-name");
const $questionContainer = document.querySelector(".questions-container");
const $answersContainer = document.querySelector(".answers-container");
const $questionText = document.querySelector(".question");
const $nextQuestionButton = document.querySelector(".next-question");
let $inputField = document.getElementById("user");


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
        totalCorrect++;
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

    $questionContainer.innerHTML = 
    
    `
      <p class= "final-message">
        Você acertou ${totalCorrect} de ${totalQuestions} questões!
        <span>Resultado: ${message}</span>
      </p>

      <button onclick = window.location.reload() class = "refaz button">

      Refazer teste

      </button>
    `
  }

}


function checkNonNumeric(event) {
    // Obtém o código do caractere digitado
    var charCode = event.which ? event.which : event.keyCode;

    // Permite apenas caracteres não numéricos
    if (charCode >= 48 && charCode <= 57) {
        // Se o caractere for numérico, retorna falso para impedir a entrada
        return false;
    }
    // Se não for numérico, permite a entrada
    return true; 
}

// Adiciona um ouvinte de evento para o evento keydown
$inputField.addEventListener("keydown", function(event) {
  // Chama a função checkNonNumeric e passa o evento
  if (!checkNonNumeric(event)) {
      // Se a função retornar false, cancela o evento padrão (entrada do caractere)
      event.preventDefault();
  }
});








































































