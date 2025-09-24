import { click } from "./clickFunc";
let beforePosition = {
    column: 0,
    line: 0
}
let randomPosColumn;
let randomPosLine;
export const gameState = {
    readyGame: false
}
export let loseScore = document.querySelector('.lose')
export let score = document.querySelector('.score')
let box = document.createElement('div')
function paintMap(box, count, childrenCount) {
    for (let i = 0;i < count;i++) {
        box.append(document.createElement('div'))
        box.children[i].classList.add('mini_box')
        if (childrenCount) {
            for (let q = 0;q < childrenCount;q++) {
                box.children[i].append(document.createElement('div'))
            }
        }
    }
}
paintMap(box, 4, 4) //ставим значение count - сколько строк; childrenCount - количество столбцов
console.log(box)
document.body.append(box)
const image = document.createElement('img')
image.src = "./images/goblin.png";
image.addEventListener('click', click)
image.alt = 'goblin'
function random() {
    randomPosColumn = Math.floor(Math.random() * box.children[0].childElementCount);
    randomPosLine = Math.floor(Math.random() * box.childElementCount);
}
export function move() {
    random()
    while ((beforePosition.column == randomPosColumn) &&(beforePosition.line == randomPosLine)) {
        random()
    }
    beforePosition.column = randomPosColumn;
    beforePosition.line = randomPosLine;
    document.querySelectorAll('.mini_box')[randomPosLine].children[randomPosColumn].append(image)
    if (loseScore.textContent == 5) {
        alert("Вы проиграли Лучший счет: " + score.textContent)
        gameState.readyGame = false
        score.textContent = '0'
        loseScore.textContent = '0'
    }
}
move()
export let stopInterval = [setInterval(move, 1000)]