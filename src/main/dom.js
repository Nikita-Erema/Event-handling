let beforePosition = {
    column: 0,
    line: 0
}
let randomPosColumn;
let randomPosLine;
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
image.alt = 'goblin'
function random() {
    randomPosColumn = Math.floor(Math.random() * box.children[0].childElementCount);
    randomPosLine = Math.floor(Math.random() * box.childElementCount);
}
function move() {
    random()
    while ((beforePosition.column == randomPosColumn) &&(beforePosition.line == randomPosLine)) {
        random()
    }
    beforePosition.column = randomPosColumn;
    beforePosition.line = randomPosLine;
    document.querySelectorAll('.mini_box')[randomPosLine].children[randomPosColumn].append(image)
}
move();
setInterval(move, 1000)