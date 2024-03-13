const questions = [
  {
    question: "Qual é o nome completo do personagem principal em Breaking Bad?",
    answers: [
      { text: "Walter White", correct: true },
      { text: "Jesse Pinkman", correct: false },
      { text: "Saul Goodman", correct: false },
      { text: "Gustavo Fring", correct: false }
    ]
  },
  {
    question: "Qual é o apelido de Walter White quando ele começa a produzir metanfetamina?",
    answers: [
      { text: "Heisenberg", correct: true },
      { text: "El Loco", correct: false },
      { text: "The Chemist", correct: false },
      { text: "Mr. Blue", correct: false }
    ]
  },
  {
    question: "Qual é o nome do laboratório móvel de Walter White e Jesse Pinkman?",
    answers: [
      { text: "RV", correct: true },
      { text: "The Den", correct: false },
      { text: "Crystal Palace", correct: false },
      { text: "The Lab", correct: false }
    ]
  },
  {
    question: "Quem é o cozinheiro principal no laboratório de Gus Fring?",
    answers: [
      { text: "Gale Boetticher", correct: true },
      { text: "Todd Alquist", correct: false },
      { text: "Mike Ehrmantraut", correct: false },
      { text: "Hank Schrader", correct: false }
    ]
  },
  {
    question: "Quem é o cunhado de Walter White, que trabalha na Agência de Controle de Narcóticos?",
    answers: [
      { text: "Hank Schrader", correct: true },
      { text: "Ted Beneke", correct: false },
      { text: "Saul Goodman", correct: false },
      { text: "Skyler White", correct: false }
    ]
  },
  {
    question: "Onde Walter White esconde sua fortuna ganha com a produção de metanfetamina?",
    answers: [
      { text: "No deserto", correct: false },
      { text: "Em barris enterrados", correct: true },
      { text: "No banco", correct: false },
      { text: "Sob o assoalho de sua casa", correct: false }
    ]
  }
];

export { questions };