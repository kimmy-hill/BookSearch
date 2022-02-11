// vars
var bookTitle = $("#book-search")
var bookAuth = $("#book-author")
var bookDescription = $("#book-description")
var bookPoster = $("#book-image")

// api calls and endpoints
var apiUrlFirst = "https://www.googleapis.com/books/v1/volumes?q="
var apiKey = "&key=AIzaSyCkVrQHfJ5Npv5EYn671if30ePZ_8IC1g0"

var formSubmitHandler = function(event) {    
    event.preventDefault();

    var book = bookTitle.value.trim();

    if (book) {
        getBookTitles(book);

        // clears old content
        bookTitle.textContent = "";
        bookAuth.textContent = "";
        bookDescription = "";
        bookPoster = "";
    } else {
        alert("Please enter a valid book title or author.");
    }
};

// fetch function
function fetchBookInfo() {
    /* if(bookTitle.length === 0) {
        bookTitle.textContent = "No titles found.";
        return;
    } */

    fetch(apiUrlFirst + bookTitle)
    .then(function (res) {
        if(res.ok){
            res.json().then(function(data){
                console.log(data)
                //renderPoster(data, book)
                

            })
        }
    })
    console.log(bookTitle)
}

function renderPoster(data){
    console.log(data)
    // bookPoster.attr("src", data.items.imageLinks.thumbnail)
    bookTitle.text(data.volumeInfo.title)
    bookDescription.text(data.volumeInfo.description)
    bookAuth.text(data.volumeInfo.author)

}

// event listener on cick
document.getElementById("search-btn").addEventListener("click", fetchBookInfo())