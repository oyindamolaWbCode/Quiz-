

const userDetails = [{
    matricNumber: `H4LOHDGOAD1`,
    image: '../img/João Cancelo.jpeg'
  },
  {
    matricNumber: `OKBONKJFKBD`,
    image: '../img/Kevin De Bruyne.jpeg'
  },
  {
    matricNumber: `1B4OON2A3FL`,
    image: '../img/Kyle Walker.jpg'
  },
  {
    matricNumber: `C13KEN12CJ4`,
    image: '../img/Raheem Sterling.jpg'
  },
  {
    matricNumber: `LBE1EI1F21A`,
    image: '../img/Riyad Mahrez.jpg'
  },
]

const rands = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "1",
  "2",
  "3",
  "4",
  "5",
];

let rand = ''

for (let i = 0; i < 11; i++) {
  const randUser = Math.floor(Math.random() * rands.length);
  rand += rands[randUser];
  console.log(rand)
}