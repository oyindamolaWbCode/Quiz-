let modal = document.getElementById("modal");
let btn = document.getElementById("subBtn");
let span = document.getElementsByClassName("close")[0];
let score = document.getElementById("score");
let start = document.getElementById("start");
let userImage = document.getElementById("userImage");
let btnQuest = document.querySelectorAll("#btn");
let timer = document.querySelector("#timer");
let question = document.getElementById("question");
let input = document.querySelector("input");
let a_ans = document.getElementById("a_ans");
let b_ans = document.getElementById("b_ans");
let c_ans = document.getElementById("c_ans");
let d_ans = document.getElementById("d_ans");
let radioA = document.getElementById("A");
let radioB = document.getElementById("B");
let radioC = document.getElementById("C");
let radioD = document.getElementById("D");
let before = document.getElementById("before");
let next = document.getElementById("next");
let username = document.getElementById("username");

const answerArray = Array(20).fill(-1);

span.addEventListener("click", () => {
  modal.style.display = "none";
  window.location.href = "../login/login.html";
});

const questionsCatelogue = [
  {},
  {
    question: "What is the capital of France?",
    A: "London",
    B: "Paris",
    C: "Berlin",
    D: "Madrid",
    answer: "Paris",
  },
  {
    question: "Which planet is closest to the sun?",
    A: "Mars",
    B: "Earth",
    C: "Mercury",
    D: "Venus",
    answer: "Mercury",
  },
  {
    question: "Who painted the Mona Lisa?",
    A: "Leonardo da Vinci",
    B: "Vincent van Gogh",
    C: "Pablo Picasso",
    D: "Michelangelo",
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the largest mammal?",
    A: "Elephant",
    B: "Blue whale",
    C: "Giraffe",
    D: "Hippopotamus",
    answer: "Blue whale",
  },
  {
    question: "What year did the Titanic sink?",
    A: "1912",
    B: "1920",
    C: "1901",
    D: "1933",
    answer: "1912",
  },
  {
    question: "What is the powerhouse of the cell?",
    A: "Nucleus",
    B: "Cytoplasm",
    C: "Mitochondria",
    D: "Endoplasmic reticulum",
    answer: "Mitochondria",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    A: "Charles Dickens",
    B: "William Shakespeare",
    C: "Jane Austen",
    D: "Mark Twain",
    answer: "William Shakespeare",
  },
  {
    question: "What is the largest ocean in the world?",
    A: "Atlantic Ocean",
    B: "Arctic Ocean",
    C: "Indian Ocean",
    D: "Pacific Ocean",
    answer: "Pacific Ocean",
  },
  {
    question: "What is the tallest mountain in the world?",
    A: "K2",
    B: "Mount Kilimanjaro",
    C: "Mount Everest",
    D: "Matterhorn",
    answer: "Mount Everest",
  },
  {
    question: "Who discovered penicillin?",
    A: "Alexander Fleming",
    B: "Marie Curie",
    C: "Albert Einstein",
    D: "Isaac Newton",
    answer: "Alexander Fleming",
  },
  {
    question: "What is the capital of France?",
    A: "London",
    B: "Paris",
    C: "Berlin",
    D: "Madrid",
    answer: "Paris",
  },
  {
    question: "Which planet is closest to the sun?",
    A: "Mars",
    B: "Earth",
    C: "Mercury",
    D: "Venus",
    answer: "Mercury",
  },
  {
    question: "Who wrote '1984'?",
    A: "George Orwell",
    B: "F. Scott Fitzgerald",
    C: "Ernest Hemingway",
    D: "Charles Dickens",
    answer: "George Orwell",
  },
  {
    question: "What is the largest desert in the world?",
    A: "Gobi Desert",
    B: "Sahara Desert",
    C: "Arabian Desert",
    D: "Kalahari Desert",
    answer: "Sahara Desert",
  },
  {
    question: "What is the smallest country in the world?",
    A: "Monaco",
    B: "San Marino",
    C: "Vatican City",
    D: "Liechtenstein",
    answer: "Vatican City",
  },
  {
    question: "Who painted the 'Starry Night'?",
    A: "Pablo Picasso",
    B: "Vincent van Gogh",
    C: "Claude Monet",
    D: "Leonardo da Vinci",
    answer: "Vincent van Gogh",
  },
  {
    question: "What is the currency of Japan?",
    A: "Yuan",
    B: "Euro",
    C: "Dollar",
    D: "Yen",
    answer: "Yen",
  },
  {
    question: "Which is the largest organ in the human body?",
    A: "Heart",
    B: "Skin",
    C: "Liver",
    D: "Lungs",
    answer: "Skin",
  },
  {
    question: "What is the chemical symbol for gold?",
    A: "Go",
    B: "Gd",
    C: "Au",
    D: "Ag",
    answer: "Au",
  },
  {
    question: "Who is known as the 'Father of Computer Science'?",
    A: "Alan Turing",
    B: "Steve Jobs",
    C: "Bill Gates",
    D: "Tim Berners-Lee",
    answer: "Alan Turing",
  },
];

let minute = 1;
let time = minute * 60;
let T;

const timing = () => {
  let minS = Math.floor(time / 60);
  let secS = time % 60;

  timer.textContent = `${minS} : ${secS}`;

  if (minS === 0 && secS === 0) {
    clearInterval(T);
    scoreSum();
  } else {
    time--;
  }
};

// Assuming btn and modal are properly defined somewhere in your code
btn.addEventListener("click", () => {
  clearInterval(T);
  modal.style.display = "block";
});

start.addEventListener("click", () => {
  loadTest();
  // timing()
  loadQuestion();
  T = setInterval(timing, 1000);
});

const loadTest = () => {
  let userDetails = JSON.parse(localStorage.getItem("userDetails"));
  userImage.src = userDetails.image;
  username.textContent = userDetails.name;
  console.log(userDetails);
};

// loadTest();

let index = 1;

const pagination = () => {
  document.querySelector(".buttons").innerHTML = "";
  for (let i = 1; i < questionsCatelogue.length; i++) {
    let btnCreate = document.createElement("button");
    btnCreate.setAttribute("id", "btn");
    btnCreate.textContent = i;
    document.querySelector(".buttons").append(btnCreate);
    if (i == index) {
      btnCreate.style.backgroundColor = "blue";
      document.querySelector(".buttons").append(btnCreate);
    }
  }
};

pagination();

const loadQuestion = () => {
  showQuestion();
};

function showQuestion() {
  question.textContent = questionsCatelogue[index].question;
  a_ans.textContent = questionsCatelogue[index].A;
  b_ans.textContent = questionsCatelogue[index].B;
  c_ans.textContent = questionsCatelogue[index].C;
  d_ans.textContent = questionsCatelogue[index].D;
  radioA.value = questionsCatelogue[index].A;
  radioB.value = questionsCatelogue[index].B;
  radioC.value = questionsCatelogue[index].C;
  radioD.value = questionsCatelogue[index].D;
}

function setIndexTo(newIndex) {
  index = newIndex;
  showQuestion();
  pagination();
}

before.addEventListener("click", () => {
  if (index == 1) {
    before.setAttribute("disabled", true);
  } else {
    setIndexTo(index - 1);
  }
});

next.addEventListener("click", () => {
  if (index == questionsCatelogue.length - 1) {
    next.setAttribute("disabled", true);
  } else {
    setIndexTo(index + 1);
  }
});

const scores = [];

radioA.addEventListener("click", (e) => {
  console.log(radioA.value);
  console.log(questionsCatelogue[index].answer);
  if (radioA.value === questionsCatelogue[index].answer) {
    // let newScore = new Set(scores.map(score => score.index))
    let score = { index: index, score: 1 };
    let repeatedQuest = new Set(scores.map((score) => score.index));
    if (!repeatedQuest.has(score.index)) {
      scores.push(score);
    }
  } else {
    // scores.push({index: index, score: 0})
  }
});

radioB.addEventListener("click", (e) => {
  console.log(radioB.value);
  console.log(questionsCatelogue[index].answer);
  if (radioB.value === questionsCatelogue[index].answer) {
    // let newScore = new Set(scores.map(score => score.index))
    let score = { index: index, score: 1 };
    let repeatedQuest = new Set(scores.map((score) => score.index));
    if (!repeatedQuest.has(score.index)) {
      scores.push(score);
    }
  } else {
    // scores.push({index: index, score: 0})
  }
});

radioC.addEventListener("click", (e) => {
  console.log(radioC.value);
  console.log(questionsCatelogue[index].answer);
  if (radioC.value === questionsCatelogue[index].answer) {
    // let newScore = new Set(scores.map(score => score.index))
    let score = { index: index, score: 1 };
    let repeatedQuest = new Set(scores.map((score) => score.index));
    if (!repeatedQuest.has(score.index)) {
      scores.push(score);
    }
  } else {
    // scores.push({index: index, score: 0})
  }
  console.log(scores);
});

radioD.addEventListener("click", (e) => {
  console.log(radioD.value);
  console.log(questionsCatelogue[index].answer);
  if (radioD.value === questionsCatelogue[index].answer) {
    // let newScore = new Set(scores.map(score => score.index))
    let score = { index: index, score: 1 };
    let repeatedQuest = new Set(scores.map((score) => score.index));
    if (!repeatedQuest.has(score.index)) {
      scores.push(score);
    }
  } else {
    // scores.push({index: index, score: 0})
  }
  console.log(scores);
});

const scoreSum = () => {
  clearInterval(T);
  let totalScore = scores
    .map((score) => score.score)
    .reduce((a, b) => a + b, 0);
  console.log(totalScore);
  score.textContent = `${totalScore} / ${questionsCatelogue.length - 1}`;
  modal.style.display = "block";
};
