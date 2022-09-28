import './style.css';

//Book Constructor
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

let myLibrary = [];
let newBook;

//Creates book from constructor, adds to library
function addBookToLibrary(){
  event.preventDefault()

  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook) //pushes book to array

}

//Creates visual in the browser
function render(){
  const display = document.getElementById('Library-container')
}


