// vars
var bookTitle = $("#book-search")
var bookAuth = $("#book-author")
var bookDescription = $("#book-description")
var bookPoster = $("#book-image")



// api calls and endpoints
const apiUrlFirst = "https://www.googleapis.com/books/v1/volumes?q="


const apiKey = "&key=AIzaSyCkVrQHfJ5Npv5EYn671if30ePZ_8IC1g0"




// fetch function
function fetchBookInfo() {
    console.log(bookTitle)
    fetch(apiUrlFirst + bookTitle)
    .then(function (res) {
        if(res.ok){
            res.json().then(function(data){
                console.log(data)
                renderPoster(data)
                

            })
        }
    })
}



// event listener on cick
document.getElementById("search-btn").addEventListener("click", fetchBookInfo())
