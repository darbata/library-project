const library = document.querySelector(".library");
const formContainer = document.querySelector(".form-container");
const form = document.querySelector(".form")
const addBookButton = document.querySelector(".add-book");
const submitButton = document.querySelector(".submit");
const myLibrary = [];

// CONSTRUCTOR
function Book(title, author, publishDate) {
    this.title = title;
    this.author = author;
    this.publishDate = publishDate;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function createDomBook(book) {
    const newBook = document.createElement('div');
    newBook.classList.add('book');

    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = book.title;
    newBook.appendChild(title);

    const author = document.createElement('h3');
    author.classList.add('author');
    author.textContent = book.author;
    newBook.appendChild(author);

    const publishDate = document.createElement('h4');
    publishDate.classList.add('publish-date');
    publishDate.textContent=book.publishDate;
    newBook.appendChild(publishDate);

    library.appendChild(newBook);
}

let HpBook = new Book("HP", "Tolkien", 1999); 
addBookToLibrary(HpBook);

for (let i = 0; i < myLibrary.length; i++) {
    createDomBook(myLibrary[i])
}


// HIDE FORM
formContainer.style.display="none";

addBookButton.addEventListener("click", () => {
    formContainer.style.display="block";
});
// Prevents submit from refreshing page
form.addEventListener("submit", function(event) {
    event.preventDefault();
});

submitButton.addEventListener("click", () => {
    const inputs = form.querySelectorAll("input");
    const inputsArray = [...inputs];
    const newBook = new Book(inputsArray[0].value, inputsArray[1].value, inputsArray[2].value);
    addBookToLibrary(newBook)

    formContainer.style.display = "none";

    createDomBook(newBook);
});
