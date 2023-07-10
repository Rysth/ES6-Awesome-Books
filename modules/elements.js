/* Form Items */
const form = document.querySelector('form');
const bookList = document.getElementById('bookList');

/* Navigation Bar Links */
const menuItems = Array.from(document.querySelectorAll('.menu-item'));
const contentItems = Array.from(document.querySelectorAll('.content'));

/* Date Items */
const todayDate = document.querySelector('#today-date');

export { form, bookList, menuItems, contentItems, todayDate };
