import * as Elements from './elements.js';
import books from './objects.js';

Elements.form.addEventListener('submit', (e) => {
  e.preventDefault();
  books.submitbtn();
});

Elements.bookList.addEventListener('click', ({ target }) => {
  if (target.classList.contains('btn-remove')) {
    const { index } = target.dataset;
    books.removeBook(index);
  }
});

Elements.menuItems.forEach((item) => {
  const itemID = item.id;
  item.addEventListener('click', () => {
    Elements.contentItems.forEach((content) => {
      const contentId = content.id;
      if (contentId.includes(itemID)) {
        content.classList.remove('hide');
      } else {
        content.classList.add('hide');
      }
    });
  });
});
