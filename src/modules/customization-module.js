'use strict';
import { body } from '../index';

const prop = document.documentElement.style;
const DarkTheme = () => {
    prop.setProperty('--background', '#000');
    prop.setProperty('--text', '#fff');
    prop.setProperty('--main-color', '#777');
    prop.setProperty('--restaurant-background', '#222');
    prop.setProperty('--link-color', '#aaa');
};

const LightTheme = () => {
    prop.setProperty('--background', null);
    prop.setProperty('--text', null);
    prop.setProperty('--main-color', null);
    prop.setProperty('--restaurant-background', null);
    prop.setProperty('--link-color', null);
};

console.log(localStorage.getItem('themeChoice'));
let theme = localStorage.getItem('themeChoice');
if(theme === 'dark'){
    DarkTheme();
} else {
    theme = 'light';
};

const ChangeColor = () => {
    if (theme === 'light') {
        DarkTheme();
        theme = 'dark';
    } else {
        LightTheme();
        theme = 'light';
    }
    localStorage.setItem('themeChoice', theme);
    console.log(localStorage.getItem('themeChoice'));
};

export { ChangeColor };