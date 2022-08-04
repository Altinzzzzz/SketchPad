var main = document.querySelector('.mainC');
var pStyle = document.querySelector('.stili');
var slider = document.querySelector('#slider');
var mainColor = 'black';

window.onload = () => {
  makeRows(16);
}

function makeRows(num){
  main.innerHTML = '';
  main.style.setProperty('--grid-rows', num);
  for(var i = 0; i < num * num; i++){
    let cell = document.createElement('div');
    cell.addEventListener('mouseover', coloring);
    main.appendChild(cell).className = "grid-item";
  }
}

function coloring(){
  if(mainColor === 'random'){
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else {
    this.style.backgroundColor = mainColor;
  }
}

function changeMode(color){
  mainColor = color;
}

function clearMode(){
  let cells = document.querySelectorAll('.grid-item');
  Array.from(cells).forEach((cell) => cell.style.backgroundColor = 'white');
}

pStyle.innerHTML = slider.value + ' X ' + slider.value;
slider.oninput = () => pStyle.innerHTML = slider.value + ' X ' + slider.value;
