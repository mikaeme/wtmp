//import LunchMenu from '../assets/fazer_fi.json';
import { getJsonMenu } from './fetch-module';
import LunchMenuEn from '../assets/fazer_en.json';
import { dd, mm, yyyy } from './date';

const menusEn = LunchMenuEn.LunchMenus[0].SetMenus;
const fazerFi = [];
const fazerEn = [];
let course = [];
let courseEn = [];
const today = yyyy + '-' + mm + '-' + dd;

const getFazerMenus = async () => {
    const response = await getJsonMenu('https://www.fazerfoodco.fi/modules/json/json/Index?costNumber=3104&language=fi');
    const menu = await response;
    parseMenus(menu);
};

const parseMenus = async (menu) => {
    for (let i in menu.MenusForDays[0].SetMenus) {
        for (let j in menu.MenusForDays[0].SetMenus[i].Components) {
            course.push(menu.MenusForDays[0].SetMenus[i].Components[j]);
            // courseEn.push(menusEn[i].Meals[j].Name);
        };
        fazerFi.push(course.toString());
        // // fazerEn.push(courseEn.toString());
        course = [];
        // courseEn = [];
    };
};


fazerFi.sort();
fazerEn.sort();
export { fazerFi, fazerEn, getFazerMenus };