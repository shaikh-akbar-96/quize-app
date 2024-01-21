const quizData = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEle = document.querySelectorAll(".answer");
const questionEle = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadquiz();
function loadquiz() {
  deselectAnswer();
  const currentquizeData = quizData[currentQuiz];
  questionEle.innerText = currentquizeData.question;
  a_text.innerText = currentquizeData.a;
  b_text.innerText = currentquizeData.b;
  c_text.innerText = currentquizeData.c;
  d_text.innerText = currentquizeData.d;
}

function getSelected() {
  let answer = undefined;

  answerEle.forEach((answerEle) => {
    console.log(answerEle.checked);
    if (answerEle.checked) {
      answer = answerEle.id;
    }
  });
  return answer;
  console.log(answer);
}

function deselectAnswer() {
  answerEle.forEach((ele) => {
    ele.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadquiz();
    } else {
      quiz.innerHTML = `<h2>You Answered correctly at ${score}/${quizData.length} question.</h2>
        <button onclick="location.reload()">Reload</button>`;
    }
  }
});
