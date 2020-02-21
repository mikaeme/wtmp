'use strict';
import { getJsonMenu } from './fetch-module';

let menu;

let coursesFi = [];
const coursesEn = [];

const getMenus = async () => {
    let response = await getJsonMenu('https://www.sodexo.fi/ruokalistat/output/daily_json/152/2020-02-21');
    menu = await response;
    parseMenus(menu);
    console.log('online ', menu);
};

const parseMenus = async (menu) => {

    for (let i in menu.courses) {
        coursesFi.push(menu.courses[i].title_fi);
        coursesEn.push(menu.courses[i].title_en);
    }
    coursesFi.sort();
    coursesEn.sort();
};

export { coursesEn, coursesFi, getMenus };