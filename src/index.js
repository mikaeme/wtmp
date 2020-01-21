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
const menuFi = document.querySelector('.menu-fi');
const menuEn = document.querySelector('.menu-en');
const langButton = document.querySelector('#lang');
const sortButton = document.querySelector('#sort');
let finnish = true;

coursesFi.sort();
coursesEn.sort();

coursesFi.forEach(annos => {
    menuFi.innerHTML += '<li class="course">' + annos +'</li>';
});

coursesEn.forEach(course => {
    menuEn.innerHTML += '<li class="course">' + course +'</li>';
});

const changeLang = () => {
    if(finnish) {
        menuEn.style.display = 'block';
        menuFi.style.display = 'none';
        finnish = false;
    } else {
        menuEn.style.display = 'none';
        menuFi.style.display = 'block';
        finnish = true;
    }
};

const sortOrder = () => {
    coursesFi.reverse();
    menuFi.innerHTML = '';
    coursesFi.forEach(annos => {
        menuFi.innerHTML += '<li class="course">' + annos +'</li>';
    });

    coursesEn.reverse();
    menuEn.innerHTML = '';
    coursesEn.forEach(course => {
        menuEn.innerHTML += '<li class="course">' + course +'</li>';
    });
};

langButton.addEventListener('click', changeLang);
sortButton.addEventListener('click', sortOrder);