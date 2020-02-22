import {coursesFi, coursesEn, fazerFi, fazerEn} from '../index';
import {finnish} from './language-module';

const RandomCourse = async () => {
    const allCourses = [...coursesFi, ...fazerFi];
    const allCoursesEn = [...coursesEn, ...fazerEn];
    const random =  Math.floor(Math.random() * allCourses.length);
    if (finnish) {
        alert(allCourses[random]);
    } else {
        alert(allCoursesEn[random]);
    }
};

export {RandomCourse};