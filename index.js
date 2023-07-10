const form = document.querySelector('form');
const bookList = document.getElementById('bookList');

class Abooks {
  constructor() {
    this.books = [];

    this.displayBooks = () => {
      const storedBooks = JSON.parse(localStorage.getItem('books'));
      if (storedBooks) {
        this.books = storedBooks;
        bookList.className = 'bookList';
        bookList.innerHTML = this.books
          .map(
            (book, index) => `
        <li class="lineBook">
          "${book.title.toUpperCase()}" by ${book.author}
          <button class="btn btn-remove box-shadow" data-index="${index}">Remove</button>
        </li>
      `
          )
          .join('');
      }
    };

    this.submitbtn = () => {
      const title = document.getElementById('bookTitle').value;
      const author = document.getElementById('authorName').value;
      this.books.push({ title, author });
      localStorage.setItem('books', JSON.stringify(this.books));
      form.reset();
      this.displayBooks();
    };

    this.removeBook = (index) => {
      this.books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(this.books));
      this.displayBooks();
    };
  }
}

const abooks = new Abooks();
abooks.displayBooks();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  abooks.submitbtn();
});

bookList.addEventListener('click', ({ target }) => {
  if (target.classList.contains('btn-remove')) {
    const { index } = target.dataset;
    abooks.removeBook(index);
  }
});

/* Navigation Bar Links */
const menuItems = Array.from(document.querySelectorAll('.menu-item'));
const contentItems = Array.from(document.querySelectorAll('.content'));

menuItems.forEach((item) => {
  const itemID = item.id;
  item.addEventListener('click', () => {
    contentItems.forEach((content) => {
      const contentId = content.id;
      if (contentId.includes(itemID)) {
        content.classList.remove('hide');
      } else {
        content.classList.add('hide');
      }
    });
  });
});
