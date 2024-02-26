let x = () => {
    return Math.floor(Math.random() * 4);
}
let res = document.querySelector(".result")
let youSc = 0;
let compSc = 0;

function updateScores() {
    document.querySelector(".you").innerText = `${youSc} - Your Score`;
    document.querySelector(".comp").innerText = `${compSc} - Computer's Score`;
}

document.querySelector(".stone").addEventListener("click", () => {
    if (x() == 3) {
        res.innerText = "You Won!";
        youSc++;
    } else if (x() == 2) {
        res.innerText = "You Lose!";
        compSc++;
    } else res.innerText = "Draw!";
    updateScores();
})

document.querySelector(".paper").addEventListener("click", () => {
    if (x() == 1) {
        res.innerText = "You Won!";
        youSc++;
    } else if (x() == 3) {
        res.innerText = "You Lose!";
        compSc++;
    } else res.innerText = "Draw!";
    updateScores();
})

document.querySelector(".scissor").addEventListener("click", () => {
    if (x() == 2) {
        res.innerText = "You Won!";
        youSc++;
    } else if (x() == 1) {
        res.innerText = "You Lose!";
        compSc++;
    } else res.innerText = "Draw!";
    updateScores();
})