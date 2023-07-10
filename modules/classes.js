import { form, bookList } from './elements.js';

export default class Books {
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
      `,
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
