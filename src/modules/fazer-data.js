import LunchMenu from '../assets/fazer_fi.json';
import LunchMenuEn from '../assets/fazer_en.json';

const menus = LunchMenu.LunchMenus[0].SetMenus;
const menusEn = LunchMenuEn.LunchMenus[0].SetMenus;
const fazerFi = [];
const fazerEn = [];
let course = [];
let courseEn = [];

for (let i in menus) {
    for (let j in menus[i].Meals) {    
            course.push(menus[i].Meals[j].Name);
            courseEn.push(menusEn[i].Meals[j].Name);        
    };
    fazerFi.push(course.toString());
    fazerEn.push(courseEn.toString());
    course = [];
    courseEn = [];
};

fazerFi.sort();
fazerEn.sort();
export {fazerFi, fazerEn};