$(document).ready(function() {
    $.getJSON("https://www.googleapis.com/books/v1/volumes?q=" + bookTitle,
        function (data){
            var book = '';

            $.each(data, function (key, value){
                book += '<tr>';
                book += '<td>' + 
                    value.volumeInfo-imageLinks-thumbnail + '</td>';
            })
            $('#card').append(book);
        })
})