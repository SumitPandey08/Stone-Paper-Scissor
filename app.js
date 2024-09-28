let Inputs = ["stone" , "paper" , "scissor"]
inputRandom = Inputs[Math.round(Math.random()*(Inputs.length - 1))]


let stone = document.querySelector("#stone")

let computerChoice = document.querySelector("#computer-choice-display")

let result = document.querySelector("#result-display")

let playerChoice = document.querySelector(".player-choice")
let paper = document.querySelector("#paper")
let scissor = document.querySelector("#scissor")
let userChoice = ""

stone.addEventListener("click" , () => {
    userChoice = "stone"
    playerChoice.innerHTML = "stone"
    computerChoice.innerHTML = inputRandom
    checkResult() ;

})

paper.addEventListener("click" , () => {
    userChoice = "paper"
    playerChoice.innerHTML = "paper"
    computerChoice.innerHTML = inputRandom
    checkResult() ;

})
scissor.addEventListener("click" , () => {
    userChoice = "scissor"
    playerChoice.innerHTML = "scissor"
    computerChoice.innerHTML = inputRandom
   checkResult() ;

})


 function checkResult() {
    if (userChoice === "stone" && inputRandom === "scissor" || userChoice === "scissor" && inputRandom === "paper" || userChoice === "paper" && inputRandom === "stone") {
        result.innerHTML = "You Win" }
    
        else if(userChoice === inputRandom) {
            result.innerHTML = "It's a tie"
        }
        else if(userChoice === "paper" && inputRandom === "scissor" || userChoice === "stone" && inputRandom === "paper" || userChoice === "scissor" && inputRandom === "stone") {
            
            result.innerHTML = "You Lose"
        }
 }

    




