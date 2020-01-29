import {menu,coursesFi,coursesEn} from '../index';
import {finnish} from './language-module';

const SortOrder = () => {
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

export {SortOrder};