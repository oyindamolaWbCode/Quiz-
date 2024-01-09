let inputMatric = document.querySelector('#input');
let loginUser = document.getElementById('login')


const userDetails = [
  {
    name: 'favour George',
    matricNumber: `H4LOHDGOAD1`,
    image: '../img/João Cancelo.jpeg'
  },
  {
    name: 'Kunle Kennedy',
    matricNumber: `OKBONKJFKBD`,
    image: '../img/Kevin De Bruyne.jpeg'
  },
  {
    name: 'Timilehin Nwachuckwu',
    matricNumber: `1B4OON2A3FL`,
    image: '../img/Kyle Walker.jpg'
  },
  {
    name: 'Taiwo kenny',
    matricNumber: `C13KEN12CJ4`,
    image: '../img/Raheem Sterling.jpg'
  },
  {
    name: 'Kemisola MaryVivian',
    matricNumber: `LBE1EI1F21A`,
    image: '../img/Riyad Mahrez.jpg'
  },
]

console.log(userDetails)

loginUser.addEventListener('click', (e) =>{
  e.preventDefault()
  let matric = inputMatric.value;

  if(!matric){
    alert('Input Required')

  }else{
    
    let userFound = userDetails.find(user => user.matricNumber === matric)

     if(userFound){
    localStorage.setItem('userDetails', JSON.stringify(userFound))
  window.location.href = '../Quiz/quiz.html';
  }else{
    alert('Matric Number not found')
  }
  } 
})
  
 


// const rands = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
// ];

// let rand = ''

// for (let i = 0; i < 11; i++) {
//   const randUser = Math.floor(Math.random() * rands.length);
//   rand += rands[randUser];
//   console.log(rand)
// }