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

let book = {
    fetchBook: function(searchTerm) {
        fetch("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm)
    }
}

// fetch function
function fetchBookInfo() {
    if(bookTitle.length === 0) {
        bookTitle.textContent = "No titles found.";
        return;
    }

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

function fetchBooks(searchTerm) {
    // will fetch book titles relateded to search terms
    fetch("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm)
      .then(function (result) {
        return result.json();
      })
      .then(function (result) {
        // retrieves random 3 books from response and calls displayBook to output to viewport
        for (i = 0; i < 3; i++) {
          let a = Math.floor(Math.random() * 10);
          let book = result.items[a].volumeInfo;
  
          // to check for duplicates
          if (booksToDisplay.includes(book)) {
            i--
          }
          else {
            booksToDisplay.push(book);
            displayBook(book, i);
          };
        };
      }).catch(function (error) {
        // logs error if a problem occurs
        console.log(error);
      });
};

// functions for printing content to screen
function displayBook(bookInfo, i) {
    let bookEl = $("#suggestion-" + i);
    let bookLink = $("<a>");
    bookLink.attr("href", bookInfo.infoLink);
    bookLink.attr("target", "_blank");
    let bookImg = $("<img>");
    bookImg.attr("alt", bookInfo.title + " image preview");
    bookImg.attr("src", bookInfo.imageLinks.thumbnail);
    bookImg.attr("class", "offset-s1, z-depth-3"); // add class/style
  
    bookLink.append(bookImg);
    bookEl.append(bookLink);
  };

// event listener on cick
document.getElementById("search-btn").addEventListener("click", fetchBookInfo())