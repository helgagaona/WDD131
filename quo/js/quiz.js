import { quotesData } from './quoteData.js';

const questions = [
  {
    question: "How are you feeling today?",
    image: "images/Emojis/Q1.png",
    answers: [
      { text: "Amazing, on top of the world!", score: 1 },
      { text: "Just getting by",               score: 2 },
      { text: "Really struggling today",        score: 3 }
    ]
  },
  {
    question: "What do you need most right now?",
    image: "images/Emojis/Q2.png",
    answers: [
      { text: "Nothing, I feel complete",       score: 1 },
      { text: "A little motivation",            score: 2 },
      { text: "Hope and comfort",               score: 3 }
    ]
  },
  {
    question: "Which word resonates with you today?",
    image: "images/Emojis/Q3.png",
    answers: [
      { text: "Joy",                            score: 1 },
      { text: "Strength",                       score: 2 },
      { text: "Healing",                        score: 3 }
    ]
  }
];

let currentQuestionIndex = 0;
let totalScore = 0;

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  document.getElementById('image-quiz').src       = currentQuestion.image;
  document.getElementById('question').textContent = currentQuestion.question;

  const allAnswerBtns = document.querySelectorAll('.answer');

  allAnswerBtns[0].textContent = currentQuestion.answers[0].text;
  allAnswerBtns[1].textContent = currentQuestion.answers[1].text;
  allAnswerBtns[2].textContent = currentQuestion.answers[2].text;

  allAnswerBtns[0].onclick = function() { handleAnswer(currentQuestion.answers[0].score); };
  allAnswerBtns[1].onclick = function() { handleAnswer(currentQuestion.answers[1].score); };
  allAnswerBtns[2].onclick = function() { handleAnswer(currentQuestion.answers[2].score); };
}

function handleAnswer(score) {
  totalScore = totalScore + score;
  currentQuestionIndex = currentQuestionIndex + 1;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  let resultTitle = '';
  let resultImage = '';

  if (totalScore === 3) {
    resultTitle = "You're feeling great!";
    resultImage = "images/Faces/happy_face.png";

  } else if (totalScore >= 4 && totalScore <= 6) {
    resultTitle = "You're feeling neutral";
    resultImage = "images/Faces/normal_face.png";

  } else if (totalScore >= 7 && totalScore <= 9) {
    resultTitle = "You're feeling down today";
    resultImage = "images/Faces/sad_face.png";
  }

  // Find matching quotes
  let matchingQuotes = [];

  for (let i = 0; i < quotesData.length; i++) {
    const quote = quotesData[i];

    if (totalScore === 3 && quote.score === 3) {
      matchingQuotes.push(quote);

    } else if (totalScore >= 4 && totalScore <= 6 && quote.score >= 4 && quote.score <= 6) {
      matchingQuotes.push(quote);

    } else if (totalScore >= 7 && totalScore <= 9 && quote.score >= 7 && quote.score <= 9) {
      matchingQuotes.push(quote);
    }
  }

  const randomIndex = Math.floor(Math.random() * matchingQuotes.length);
  const randomQuote = matchingQuotes[randomIndex];

  // Update result section
  document.getElementById('result-title').textContent  = resultTitle;
  document.getElementById('result-image').src          = resultImage;
  document.getElementById('result-quote').textContent  = '"' + randomQuote.quote + '"';
  document.getElementById('result-author').textContent = '— ' + randomQuote.author;

  // Hide quiz, show result — targeting the divs that match your HTML
  document.querySelector('#quiz-container .quiz').classList.add('hide');
  document.querySelector('#result-container .results').classList.remove('hide');
}

function resetQuiz() {
  currentQuestionIndex = 0;
  totalScore           = 0;

  // Show quiz, hide result
  document.querySelector('#quiz-container .quiz').classList.remove('hide');
  document.querySelector('#result-container .results').classList.add('hide');

  loadQuestion();
}

document.addEventListener('DOMContentLoaded', function() {
  loadQuestion();

  const retakeBtn = document.querySelector('#result-container .button-a');
  if (retakeBtn) {
    retakeBtn.addEventListener('click', function() {
      resetQuiz();
    });
  }
});