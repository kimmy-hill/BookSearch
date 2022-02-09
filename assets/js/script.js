var apiKeyGoogle = "AIzaSyA_MCwdAKgVfrMu2ysTeBzeeRi4OkuAo9c"
var apiKeyGoodreads = "1680e01c37msh7d95652a9fba73dp15927cjsnf2dbb215392e"

document.getElementById("search-books").addEventListener("click", function() {
    alert("List Available Books");
})

//calls GoogleBooks API
function bookSearch(Title) {
    var search = Title;
  
    var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + search;
  
    $.ajax({
      url: queryURL,
      dataType: "json",
      type: "GET",
      success: function (response) {
        renderBooks(response);
      },
      error: function (response) {
        console.log(response);
      },
    });
  }

fetch("https://goodreadsraygorodskijv1.p.rapidapi.com/addBookToShelf", {
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-host": "GoodreadsraygorodskijV1.p.rapidapi.com",
		"x-rapidapi-key": "1680e01c37msh7d95652a9fba73dp15927cjsnf2dbb215392e"
	},
	"body": {
		"shelfName": "<REQUIRED>",
		"apiSecret": "<REQUIRED>",
		"accessTokenSecret": "<REQUIRED>",
		"apiKey": "<REQUIRED>",
		"accessToken": "<REQUIRED>",
		"bookId": "<REQUIRED>"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});