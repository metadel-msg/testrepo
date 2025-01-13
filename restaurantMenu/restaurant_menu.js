const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const createMenuItemsHTML = (menu) => menu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');

document.getElementById('breakfastMenuItems').innerHTML = createMenuItemsHTML(breakfastMenu);
document.getElementById('maincourseMenuItems').innerHTML = createMenuItemsHTML(mainCourseMenu);
document.getElementById('dessertMenuItems').innerHTML = createMenuItemsHTML(dessertMenu);

document.getElementById('breakfastTotalItems').innerHTML = `Total items: ${breakfastMenu.length}`;
document.getElementById('maincourseTotalItems').innerHTML = `Total items: ${mainCourseMenu.length}`;
document.getElementById('dessertTotalItems').innerHTML = `Total items: ${dessertMenu.length}`;
