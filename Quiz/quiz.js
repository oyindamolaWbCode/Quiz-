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
let before = document.getElementById("before");
let next = document.getElementById("next");
let username = document.getElementById("username")

btn.addEventListener("click", () => {
  modal.style.display = "block";
});

span.addEventListener("click", () => {
  modal.style.display = "none";
});

const questionsCatelogue = [
  {
    question: "What is the capital of France?",
    A: "London",
    B: "Paris",
    C: "Berlin",
    D: "Madrid",
    answer: "B",
  },
  {
    question: "Which planet is closest to the sun?",
    A: "Mars",
    B: "Earth",
    C: "Mercury",
    D: "Venus",
    answer: "C",
  },
  {
    question: "Who painted the Mona Lisa?",
    A: "Leonardo da Vinci",
    B: "Vincent van Gogh",
    C: "Pablo Picasso",
    D: "Michelangelo",
    answer: "A",
  },
  {
    question: "What is the largest mammal?",
    A: "Elephant",
    B: "Blue whale",
    C: "Giraffe",
    D: "Hippopotamus",
    answer: "B",
  },
  {
    question: "What year did the Titanic sink?",
    A: "1912",
    B: "1920",
    C: "1901",
    D: "1933",
    answer: "A",
  },
  {
    question: "What is the powerhouse of the cell?",
    A: "Nucleus",
    B: "Cytoplasm",
    C: "Mitochondria",
    D: "Endoplasmic reticulum",
    answer: "C",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    A: "Charles Dickens",
    B: "William Shakespeare",
    C: "Jane Austen",
    D: "Mark Twain",
    answer: "B",
  },
  {
    question: "What is the largest ocean in the world?",
    A: "Atlantic Ocean",
    B: "Arctic Ocean",
    C: "Indian Ocean",
    D: "Pacific Ocean",
    answer: "D",
  },
  {
    question: "What is the tallest mountain in the world?",
    A: "K2",
    B: "Mount Kilimanjaro",
    C: "Mount Everest",
    D: "Matterhorn",
    answer: "C",
  },
  {
    question: "Who discovered penicillin?",
    A: "Alexander Fleming",
    B: "Marie Curie",
    C: "Albert Einstein",
    D: "Isaac Newton",
    answer: "A",
  },
  {
    question: "What is the capital of France?",
    A: "London",
    B: "Paris",
    C: "Berlin",
    D: "Madrid",
    answer: "B",
  },
  {
    question: "Which planet is closest to the sun?",
    A: "Mars",
    B: "Earth",
    C: "Mercury",
    D: "Venus",
    answer: "C",
  },
  {
    question: "Who wrote '1984'?",
    A: "George Orwell",
    B: "F. Scott Fitzgerald",
    C: "Ernest Hemingway",
    D: "Charles Dickens",
    answer: "A",
  },
  {
    question: "What is the largest desert in the world?",
    A: "Gobi Desert",
    B: "Sahara Desert",
    C: "Arabian Desert",
    D: "Kalahari Desert",
    answer: "B",
  },
  {
    question: "What is the smallest country in the world?",
    A: "Monaco",
    B: "San Marino",
    C: "Vatican City",
    D: "Liechtenstein",
    answer: "C",
  },
  {
    question: "Who painted the 'Starry Night'?",
    A: "Pablo Picasso",
    B: "Vincent van Gogh",
    C: "Claude Monet",
    D: "Leonardo da Vinci",
    answer: "B",
  },
  {
    question: "What is the currency of Japan?",
    A: "Yuan",
    B: "Euro",
    C: "Dollar",
    D: "Yen",
    answer: "D",
  },
  {
    question: "Which is the largest organ in the human body?",
    A: "Heart",
    B: "Skin",
    C: "Liver",
    D: "Lungs",
    answer: "B",
  },
  {
    question: "What is the chemical symbol for gold?",
    A: "Go",
    B: "Gd",
    C: "Au",
    D: "Ag",
    answer: "C",
  },
  {
    question: "Who is known as the 'Father of Computer Science'?",
    A: "Alan Turing",
    B: "Steve Jobs",
    C: "Bill Gates",
    D: "Tim Berners-Lee",
    answer: "A",
  },
];

const loadTest = () => {

  let userDetails = JSON.parse(localStorage.getItem("userDetails"));

  userImage.src = userDetails.image;
  username.textContent = userDetails.name;
console.log(userDetails)
  
};

loadTest();

for(let i = 1; i < questionsCatelogue.length; i++){
   document.querySelector('.buttons').innerHTML +=  `<button id="btn">`+ i + `</button>`
}

let index = 0;

const loadQuestion = () =>{
  question.textContent = questionsCatelogue[index].question
  a_ans.textContent = questionsCatelogue[index].A
  b_ans.textContent = questionsCatelogue[index].B
  c_ans.textContent = questionsCatelogue[index].C
  d_ans.textContent = questionsCatelogue[index].D
}
loadQuestion();

before.addEventListener('click', () =>{
  if(index == 0){
    before.setAttribute('disabled', true)
  }else{
    index-=1
    question.textContent = questionsCatelogue[index].question
    a_ans.textContent = questionsCatelogue[index].A
    b_ans.textContent = questionsCatelogue[index].B
    c_ans.textContent = questionsCatelogue[index].C
    d_ans.textContent = questionsCatelogue[index].D
  }
})

next.addEventListener('click', () =>{
  index+=1
    question.textContent = questionsCatelogue[index].question
    a_ans.textContent = questionsCatelogue[index].A
    b_ans.textContent = questionsCatelogue[index].B
    c_ans.textContent = questionsCatelogue[index].C
    d_ans.textContent = questionsCatelogue[index].D
})