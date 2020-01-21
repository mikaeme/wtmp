'use strict';

import LunchMenu from './assets/sodexo.json';

const menu = document.querySelector('.menu');
const langButton = document.querySelector('#lang');
const sortButton = document.querySelector('#sort');
const randomButton = document.querySelector('#random');
const coursesFi = [];
const coursesEn = [];
let finnish = true;

for (let i in LunchMenu.courses) {
    coursesFi.push(LunchMenu.courses[i].title_fi);
    coursesEn.push(LunchMenu.courses[i].title_en);
};
coursesFi.sort();
coursesEn.sort();

menu.innerHTML = '';
coursesFi.forEach(annos => {
    menu.innerHTML += '<li class="course">' + annos + '</li>';
});


const changeLang = () => {
    menu.innerHTML = '';
    if (finnish) {
        coursesEn.forEach(annos => {
            menu.innerHTML += '<li class="course">' + annos + '</li>';
        });
        finnish = false;
    } else {
        coursesFi.forEach(annos => {
            menu.innerHTML += '<li class="course">' + annos + '</li>';
        });
        finnish = true;
    };
};

const sortOrder = () => {
    menu.innerHTML = '';
    if (finnish) {
        coursesFi.reverse();
        coursesFi.forEach(annos => {
            menu.innerHTML += '<li class="course">' + annos + '</li>';
        });
    } else {
        coursesEn.reverse();
        coursesEn.forEach(course => {
            menu.innerHTML += '<li class="course">' + course + '</li>';
        });
    };
};

const randomCourse = () => {
    const random = Math.floor(Math.random() * coursesFi.length);
    if (finnish) {
        alert(coursesFi[random]);
    } else {
        alert(coursesEn[random]);
    }
};

langButton.addEventListener('click', changeLang);
sortButton.addEventListener('click', sortOrder);
randomButton.addEventListener('click', randomCourse);