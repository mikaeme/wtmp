'use strict';

const menu = [
    {name: 'Lingonberry jam', price: 4.00},
    {name: 'Mushroom and bean casserole', price: 5.50},
    {name: 'Chili-flavoured wheat', price: 3.00},
    {name: 'Vegetarian soup', price: 4.80},
    {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00}
  ];

  menu.forEach(course=> {
      const pattern = /^[A-Z]{1}[a-zA-Z0-9()\/,-\s]{4,64}$/;
      const test = pattern.test(course.name);
      if(!test) {
          console.log(course.name + ' is not a valid title!');
      } else {
          console.log('All entries are valid!');
      }

  });

  let sorted = menu.sort((a, b) => {
    return b.price - a.price;
  });
  console.log(sorted);