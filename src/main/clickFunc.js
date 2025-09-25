import { loseScore, score, gameState, move } from "./dom";
export let stopInterval = [setInterval(() => {
        move();
        loseGoblin();
    }, 1000)]
function loseGoblin() {
    if (gameState.readyGame) {
        loseScore.textContent = Number(loseScore.textContent) + 1
    }
}
export function click() {
    gameState.readyGame = true
    score.textContent = Number(score.textContent) + 1
    clearInterval(stopInterval[0])
    stopInterval[0] = setInterval(() => {
        move();
        loseGoblin();
    }, 1000)
    move();
}