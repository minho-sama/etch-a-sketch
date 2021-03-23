
const buttons = document.querySelectorAll('buttons')
const screen = document.querySelector('.screen')
let textbox = document.querySelector('#textbox')

let pixel = '';
let gridSize = 50;

// indian

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


//my
let clearbtn = document.querySelector('#clear')
clearbtn.onclick= clearAndDraw

let drawBtn = document.querySelector('#letsDraw')
drawBtn.onclick = clearAndDraw

function clearAndDraw (){
    screen.innerHTML="";
    draw()
}

function draw () {
    screenSize = textbox.value
    for (i =0; i < screenSize ** 2; i++){
        pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.border = '1px solid black';
        pixel.style.backgroundColor = 'white';
        screen.appendChild(pixel);
        }
    screen.style.gridTemplateColumns = `repeat(${screenSize}, auto) `;
    screen.style.gridTemplateRows = `repeat(${screenSize}, auto) `;
    
    const pixels = document.querySelectorAll('.pixel')
    pixels.forEach(pxl => {pxl.addEventListener('mouseenter', function(){
        pxl.style.backgroundColor = radnomColor();
    })}
        )
}

function radnomColor (){
    let color = "rgba("
    for (i = 0; i < 3 ; i++){
        color += Math.floor(Math.random()*255) + ','
    }
    return color + '1'
}

