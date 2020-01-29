'use strict';
import {coursesFi, coursesEn} from './modules/sodexo-data';
import {ChangeLang, finnish} from './modules/language-module';
import {SortOrder} from './modules/sort-module';
import {RandomCourse} from './modules/random-module';
import {fazerFi, fazerEn} from './modules/fazer-data';

console.log(fazerFi);
console.log(fazerEn);
const menu = document.querySelector('.menu');
const menuFazer = document.querySelector('.menuF');
const langButton = document.querySelector('#lang');
const sortButton = document.querySelector('#sort');
const randomButton = document.querySelector('#random');

menu.innerHTML = '';
coursesFi.forEach(annos => {
    menu.innerHTML += '<li class="course">' + annos + '</li>';
});

menuFazer.innerHTML = '';
fazerFi.forEach(annos => {
    menuFazer.innerHTML += '<li class="course">' + annos + '</li>';
});

langButton.addEventListener('click', ChangeLang);
sortButton.addEventListener('click', SortOrder);
randomButton.addEventListener('click', RandomCourse);

export {menu, coursesFi, coursesEn};