import LunchMenu from '../assets/sodexo.json';

const coursesFi = [];
const coursesEn = [];

for (let i in LunchMenu.courses) {
    coursesFi.push(LunchMenu.courses[i].title_fi);
    coursesEn.push(LunchMenu.courses[i].title_en);
};
coursesFi.sort();
coursesEn.sort();

export {coursesEn, coursesFi};