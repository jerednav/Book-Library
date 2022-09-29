import './style.css';

//Create Library array
let myLibrary = [];

//Book constructor
class Book {
  constructor(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
  }
  getInfo(){
    return `${title} by ${author}, ${pages}pages, ${haveRead === true ? "read" : "not read"} `
  }
}

// Adds some starting books to work with
myLibrary.push(new Book('The Hobbit', 'J. R. R. Tolken', 200, true));
myLibrary.push(new Book('Harry Potter', 'J. K. Rowling', 200, true));
myLibrary.push(new Book('Models', 'Mark Mason', 200, true));
myLibrary.push(new Book('Greenlights', 'Matthew McConaughey', 200, false));
myLibrary.push(new Book('A Promised Land', 'Barack Obama', 200, false));
myLibrary.push(new Book('The Food Lab', 'J. Kenji Lopez-Alt', 200, false));

//DOM manipulation
const container = document.querySelector('#container')

//Display Card on DOM
function displayBook(arrayIndex){
  const newCard = document.createElement('div')

  //Creates text for describing the book
  const p = document.createElement('p')
  newCard.className = 'bookCard'
  newCard.setAttribute("data-index", `${arrayIndex}`)
  p.textContent = `${myLibrary[arrayIndex].title} by ${myLibrary[arrayIndex].author}, ${myLibrary[arrayIndex].pages} pages, ${myLibrary[arrayIndex].haveRead === true ? "Read" : "Not Read"}`;
  newCard.appendChild(p)

  //adds everything to the html
  container.appendChild(newCard)
}

for (let i = 0; i < myLibrary.length; i++){
  displayBook(i)
}

