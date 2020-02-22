'use strict';
import {coursesFi, coursesEn, getMenus} from './modules/sodexo-data';
import {ChangeLang, finnish} from './modules/language-module';
import {SortOrder} from './modules/sort-module';
import {RandomCourse} from './modules/random-module';
import {fazerFi, fazerEn, getFazerMenus} from './modules/fazer-data';
import {search} from './modules/search-module';

const menu = document.querySelector('.menu');
const menuFazer = document.querySelector('.menuF');
const langButton = document.querySelector('#lang');
const sortButton = document.querySelector('#sort');
const randomButton = document.querySelector('#random');
const searchButton = document.querySelector('#search-image');
const searchField = document.querySelector('#search-field');

const sodexo = async () => {
    const resp = await getMenus();
menu.innerHTML = '';
coursesFi.forEach(annos => {
    menu.innerHTML += '<li class="course">' + annos + '</li>';
});
};
sodexo();

const fazer = async () => {
    const resp = await getFazerMenus();
menuFazer.innerHTML = '';
fazerFi.forEach(annos => {
    menuFazer.innerHTML += '<li class="course">' + annos + '</li>';
});
};
fazer();

langButton.addEventListener('click', ChangeLang);
sortButton.addEventListener('click', SortOrder);
randomButton.addEventListener('click', RandomCourse);
searchButton.addEventListener('click', search);
searchField.addEventListener('submit', async (evt) => {
    evt.preventDefault;
    search();
});

export {menu, coursesFi, coursesEn, menuFazer, fazerFi, fazerEn};