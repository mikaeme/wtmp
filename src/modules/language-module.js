import {menu,coursesFi,coursesEn} from '../index';

let finnish = true;

const ChangeLang = () => {
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

export {ChangeLang,finnish};