var apiKeyGoogle = "AIzaSyA_MCwdAKgVfrMu2ysTeBzeeRi4OkuAo9c"
var apiKeyGoodreads = "1680e01c37msh7d95652a9fba73dp15927cjsnf2dbb215392e"

//https://www.youtube.com/watch?v=uaMMkaa-P_A

$(document).ready(function() {
    var item, title, author, publisher, bookLink, booksImg
    var outputList = document.getElementById("list-output");
    var bookUrl = "https://www.googleapis.com/books/v1/volumes?q=";
    var placeHldr = "<img src='https://via.placeholder.com/150'>";
    var searchData;
   
    // listener for search button
    $("#search").click(function() {
        //debugger;
        preventDefault();
        outputList.innerHTML = ""; // empty html output
        document.body.style.backgroundImage = "url('')";
            searchData = $("#search-bar").val();
            // handling empty search input field
            if(searchData === "" || searchData === null) {
                displayError();
            } else {
                // console.log(searchData);
                // $.get("https://www.googleapis.com/books/v1/volumes?q=" + searchData, getBookData());
                $.ajax({
                    url: bookUrl + searchData,
                    dataType: "json",
                    success: function(response) {
                        console.log(response)
                        if(response.totalItem === 0) {
                            alert("No results available. Try a different search.");
                        } else {
                            $("title").anitem({'margin-top': '5px'}, 1000); //search box animation
                            $(".book-list").css('visibility: visible');
                            displayResults(response);
                    }
                },
                error: function() {
                    alert("Something went wrong.")
                }
            });
        }
        $("#search-bar").val(""); //clears search box
    });
    // function to display results in html
    function displayResults(response) {
        for(var i = 0; i < response.items.length; i+=2) {}
    };
    
});