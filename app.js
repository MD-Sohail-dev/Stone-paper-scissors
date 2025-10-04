let userScore = 0;
let compScore = 0;
let messege = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

let usrScore = document.querySelector("#user-score");
let computerScore = document.querySelector("#comp-score");
let usrCount=0 , comCount=0;

let yourChoice = document.querySelector("#your-choice");
let computerChoice = document.querySelector("#com-choice");
let seeMessege = document.querySelector(".see-move");

let resetBtn = document.querySelector("#rst-btn")

choices.forEach((choice) => {
  choice.addEventListener("click", () =>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
})


let playGame = (userChoice)=>{
     console.log("User chice : ",userChoice);
     // generate computer choice
   const comChoice =  genComChoice();
   
   yourChoice.innerHTML = `Your choice : ${userChoice}`;
   computerChoice.innerHTML = `Comp choice : ${comChoice}`;
   seeMessege.classList.remove("hide");


     console.log("Computer choice :",comChoice);
     if(userChoice==="rock" && comChoice==="paper" || userChoice==="paper" && comChoice==="scissors" ||userChoice==="scissors" && comChoice==="rock"){
        messege.innerHTML = "Computer win!";
        messege.style.backgroundColor = "red";
        comCount++;
        computerScore.innerHTML = comCount;

     }
     else if(userChoice==="rock" && comChoice==="scissors" || userChoice==="paper" && comChoice==="rock" || userChoice==="scissors" && comChoice==="paper"){
        messege.innerHTML = "You win!";
        messege.style.backgroundColor = "green";
        usrCount++;
        usrScore.innerHTML = usrCount;
     }
     else{
        messege.innerHTML = "Both are same choice !";
        messege.style.backgroundColor = "green";
        messege.style.backgroundColor="pink"
     }
}

const genComChoice = ()=>{
  const comChoice = ["rock","paper","scissors"];
  // Math.random() genearte random number between 0 to 1 in decimal points
  // if we multiply Math.random() * 3 then it generate random number between 0 to 3 in decimal points
  // if you want to remove decimal number then use Math.flooor(); see below
  const index = Math.floor(Math.random()*3);
  return comChoice[index];

}

resetBtn.addEventListener("click", ()=>{
  usrCount=0;
  comCount=0;
  usrScore.innerHTML=0;
  computerScore.innerHTML = 0;
  messege.innerHTML = "Play your move";
  messege.style.backgroundColor="rgb(27, 199, 193)";
  seeMessege.classList.add("hide");
})