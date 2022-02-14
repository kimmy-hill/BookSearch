// vars
var bookTitle = $("#book-search")
var bookTitle = $("#book-search")
var bookAuth = $("#book-author")
var bookDescription = $("#book-description")
var bookPoster = $("#book-image")

const apiUrlFirst = "https://www.googleapis.com/books/v1/volumes?q="

const apiKey = "&key=AIzaSyCkVrQHfJ5Npv5EYn671if30ePZ_8IC1g0"

//Adding new variables for test code
var searchFormEl = document.querySelector("#search-form");
var formInputEl = document.querySelector("#title-author");
var bookContainerEl = document.querySelector("#book-card");
var bookInformation = document.querySelector("#book-information");

var formSubmitHandler = function(event) {
    event.preventDefault();

    var title = formInputEl.value.trim();

    if (title) {
        getBooks(title);
        formInputEl.value = "";
    } else {
        alert("Please enter a Book Title or Author")
    }
    console.log(event);
};

var getBooks = function(title) {
    var apiUrl = "https://www.googleapis.com/books/v1/volumes?q=" + title + "&key=AIzaSyCkVrQHfJ5Npv5EYn671if30ePZ_8IC1g0";

    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            displayBooks(data, title);
        })
    });
}

searchFormEl.addEventListener("submit", formSubmitHandler)

var displayBooks = function(title, searchTerm) {

    // clear old content
    bookContainerEl.textContent = "";
    bookInformation.textContent = searchTerm;

    for (var i = 0; i < title.length; i++) {
        //format book name
        var titleText = response.items[0].volumeInfo + "," + response.items[0].volumeInfo.authors;

        //create container for book
        var bookEl = document.createElement("div");
        bookEl.classList = "content columns custom-boxes-container";

        //create element for book name
        var titleEl = document.createElement("span");
        titleEl.textContent = titleText;

        //append to container
        bookEl.appendChild(titleEl);

        //append container to the dom
        bookContainerEl.appendChild(bookEl);
    }

    console.log(title);
    console.log(searchTerm);
    console.log(titleText);
}


/* ADDING TEST CODE

function fetchBookInfo() {
    console.log(bookTitle)
    fetch(apiUrlFirst + bookTitle)
    .then(function (res) {
        if(res.ok){
            res.json().then(function(data){
                console.log(data)
                // renderPoster(data)
                

            })
        }
    })
}

var displayBooks = function(title, bookTitle) {
    console.log(title);
    console.log(bookTitle);
}

// fetchBookInfo()

function renderPoster(data){
    console.log(data)
    // bookPoster.attr("src", data.items.imageLinks.thumbnail)
    bookTitle.text(data.volumeInfo.title)
    bookDescription.text(data.volumeInfo.description)
    bookAuth.text(data.volumeInfo.author)

}

document.getElementById("search-btn").addEventListener("click", fetchBookInfo())

ADDING TEST CODE*/