'use strict';
const coursesEn = ["Hamburger, cream sauce and poiled potates",
    "Goan style fish curry and whole grain rice",
    "Vegan Chili sin carne and whole grain rice",
    "Broccoli puree soup, side salad with two napas",
    "Lunch baguette with BBQ-turkey filling",
    "Cheese / Chicken / Vege / Halloum burger and french fries"];
const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
    "Goalaista kalacurrya ja täysjyväriisiä",
    "vegaani Chili sin carne ja täysjyväriisi",
    "Parsakeittoa,lisäkesalaatti kahdella napaksella",
    "Lunch baguette with BBQ-turkey filling",
    "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];

const SortEn = coursesEn;
const menu = document.querySelector('.menu');
const langButton = document.querySelector('#lang');
const sortButton = document.querySelector('#sort');
let finnish = true;

coursesFi.sort();
coursesEn.sort();

coursesFi.forEach(annos => {
    menu.innerHTML += '<li class="course">' + annos + '</li>';
});

const changeLang = () => {
    if (finnish) {
        menu.innerHTML = '';
        coursesEn.forEach(course => {
            menu.innerHTML += '<li class="course">' + course + '</li>';
        });
        finnish = false;
    } else {
        menu.innerHTML = '';
        coursesFi.forEach(annos => {
            menu.innerHTML += '<li class="course">' + annos + '</li>';
        });
        finnish = true;
    };
};

const sortOrder = () => {
    if (finnish) {
        coursesFi.reverse();
        menu.innerHTML = '';
        coursesFi.forEach(annos => {
            menu.innerHTML += '<li class="course">' + annos + '</li>';
        });
    } else {
        coursesEn.reverse();
        menu.innerHTML = '';
        coursesEn.forEach(course => {
            menu.innerHTML += '<li class="course">' + course + '</li>';
        });
    };
};

    langButton.addEventListener('click', changeLang);
    sortButton.addEventListener('click', sortOrder);