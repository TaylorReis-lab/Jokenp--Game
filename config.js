const result = document.querySelector(".result")
const myScore = document.querySelector(".your-score")
const cpuScore = document.querySelector(".cpu-score")
const empScore = document.querySelector(".emp-score")

let empScores = 0
let humanScoreNumber = 0
let cpuScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playCpu())
}

const playCpu = () => {
    const choices = ["stone-e", "paper-e", "scissors-e"]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, cpu) => {

    if (human === cpu) {
        empScores++
        empScore.innerHTML = empScores
        result.innerHTML = "Empate!"
    } else if (
        (human === "paper-e" && cpu === "stone-e") ||
        (human === "stone-e" && cpu === "scissors-e") ||
        (human === "scissors-e" && cpu === "paper-e")
    ) {
        humanScoreNumber++
        myScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou"
    } else {
        cpuScoreNumber++
        cpuScore.innerHTML = cpuScoreNumber
        result.innerHTML = "Você perdeu para a Alexa"
    }
}