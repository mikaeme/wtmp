'use strict';
let count;
let counter = 0;

const coords = document.createElement('p');
const area = document.createElement('article');
const hurry = document.createElement('p');
const realHurry = document.createElement('p');
document.body.appendChild(area);
document.body.appendChild(coords);
document.body.appendChild(hurry);
document.body.appendChild(realHurry);

setTimeout(() => hurry.innerHTML = 'Hopi hopi!', 15000);

let timer = setInterval(() => {
    counter++;
    if (counter > 4) {
        realHurry.innerHTML = 'Ei kun tosissaan, hopi hopi!';
    }
}, 15000);

document.addEventListener('keydown', event => {
    if (event.keyCode === 77) {
        count = 1;     
    } else if (event.keyCode === 65 && count === 1 ){
        count = 2;
    } else if (event.keyCode === 84 && count === 2 ){
        count = 3;
    } else if (event.keyCode === 84 && count === 3 ){
        count = 4;
    } else if (event.keyCode === 73 && count === 4 ){
        alert('Peltoniemi!');
        count = 0;
        realHurry.innerHTML = '';
    } else {
        count = 0;
    }
    counter = 0;
});

area.innerHTML = "Tule tänne...";

area.addEventListener('mouseover', event => {
    counter = 0;
    realHurry.innerHTML = '';
    if(event)
    console.log('Tervetuloa!');
});

document.addEventListener('dblclick', event => {
    const x = event.pageX;
    const y = event.pageY;
    coords.innerHTML = x + ', ' + y;
    counter = 0;
    realHurry.innerHTML = '';
});

document.addEventListener('mousemove', event => {
    counter = 0;
    realHurry.innerHTML = '';
});



