const GOOGLE_BOOKS_URL = "https://www.googleapis.com/books/v1/volumes?q=";

const getBooks = async (searchTerm = "", maxResults = 10) => {
    const response = await fetch(`${GOOGLE_BOOKS_URL}${searchTerm}&maxResults=${maxResults}`);
    const data = await response.json();
    return data.items;
}

const getBooksButton = document.getElementById("getBooks");
const booksList = document.getElementById("books")
const searchBar = document.getElementById("search")
const maxResults = document.getElementById("maxResults")

getBooksButton.addEventListener("click", async () => {
    booksList.innerHTML = "";
    const books = await getBooks(searchBar.value);
    const listItems = books.map(book => {
        const element = document.createElement("li");
        const bookText = document.createTextNode(`${book.volumeInfo.title} by ${book.volumeInfo.authors}`);
        element.appendChild(bookText);
        return element;
    })

    const append = (parent, child) => {
        parent.appendChild(child)
    }
    listItems.forEach(listItem => {
        append(booksList, listItem)
    })
})

console.log(getBooks("apple"))