'use strict';

import LunchMenu from './assets/sodexo.json';

const menu = document.querySelector('.menu');
const langButton = document.querySelector('#lang');
const sortButton = document.querySelector('#sort');
let finnish = true;

LunchMenu.courses.sort();

for (let i in LunchMenu.courses) {
    menu.innerHTML += '<li class="course">' + LunchMenu.courses[i].title_fi + '</li>';
};

const changeLang = () => {
    menu.innerHTML = '';
    if (finnish) {
        for (let i in LunchMenu.courses) {
            menu.innerHTML += '<li class="course">' + LunchMenu.courses[i].title_en + '</li>';
        };
        finnish = false;
    } else {
        for (let i in LunchMenu.courses) {
            menu.innerHTML += '<li class="course">' + LunchMenu.courses[i].title_fi + '</li>';
        };
        finnish = true;
    };
};
//         coursesEn.forEach(course => {
//             menu.innerHTML += '<li class="course">' + course + '</li>';
//         });
//         finnish = false;
//     } else {
//         menu.innerHTML = '';
//         coursesFi.forEach(annos => {
//             menu.innerHTML += '<li class="course">' + annos + '</li>';
//         });
//         finnish = true;
//     };
// };

//const sortOrder = () => {
//     if (finnish) {
//         coursesFi.reverse();
//         menu.innerHTML = '';
//         coursesFi.forEach(annos => {
//             menu.innerHTML += '<li class="course">' + annos + '</li>';
//         });
//     } else {
//         coursesEn.reverse();
//         menu.innerHTML = '';
//         coursesEn.forEach(course => {
//             menu.innerHTML += '<li class="course">' + course + '</li>';
//         });
//     };
// };

langButton.addEventListener('click', changeLang);
sortButton.addEventListener('click', sortOrder);