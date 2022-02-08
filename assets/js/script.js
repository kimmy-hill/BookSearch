
// Petfinder API Key
var apiKey = "F8eoQK4mZpkwWlXMC5vtv8gwwDmE646s7n1uhT7WDlU6NOAZjg"

// Request Structure
curl -H == "Authorization: Bearer" + apiKey 

// Test to fetch info from api
    fetch("https://api.petfinder.com/v2/animals/?type=dog&page=5")
    .then(res => console.log(res))
