'use strict';
import { coursesFi, coursesEn, fazerFi, fazerEn } from '../index';
let searchTerm;


const searchFor = (result) => {
    if (result.toLowerCase().includes(searchTerm.toLowerCase()))
        return result;
};

const search = async (text) => {
    searchTerm = text;
    alert(coursesFi.filter(searchFor));
};

const submitSearch = async (evt) => {
    evt.preventDefault();
    const text = document.querySelector('#search-field').value;
        search(text);
    };

export { submitSearch };
