
const buttons = document.querySelectorAll('buttons')
const screen = document.querySelector('.screen')

let pixel = '';
let gridSize = 50;

// 1

// const drawGrid = (screenSize) => {
//     for (i =0; i < screenSize ** 2; i++){
//         pixel = document.createElement('div');
//         pixel.classList.add('pixel');
//         pixel.style.border = '1px solid black';
//         pixel.style.backgroundColor = 'white';
//         screen.appendChild(pixel);
//         }
//     screen.style.gridTemplateColumns = `repeat(${screenSize}, auto) `;
//     screen.style.gridTemplateRows = `repeat(${screenSize}, auto) `;
// }

// drawGrid(gridSize)



// const clear = (request) => {

// }



//2
let clearbtn = document.querySelector('#clear')
clearbtn.onclick= clear

function clear (){
    screen.innerHTML="";
    draw(gridSize)
}

resize = document.querySelector('#resize')
resize.onclick = draw

function draw (screenSize) {
    // screenSize = parseFloat(prompt('enter size, max 100', ''))
    for (i =0; i < screenSize ** 2; i++){
        pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.border = '1px solid black';
        pixel.style.backgroundColor = 'white';
        screen.appendChild(pixel);
        }
    screen.style.gridTemplateColumns = `repeat(${screenSize}, auto) `;
    screen.style.gridTemplateRows = `repeat(${screenSize}, auto) `;
}
draw(50)


