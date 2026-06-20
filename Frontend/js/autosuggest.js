var API_URL = 'https://autosuggest-backend.onrender.com/api/autosuggest';

var searchBar = document.getElementById('search-bar');
var searchSuggestions = document.getElementById('search-suggestions');
//this function will be called every time the user types something in the search bar
searchBar.addEventListener("input", function() {
    // get data that the user entered in the search bar
    //use user typed data to make API request
    // API call
    //append all the search suggestions to div tag in UI

    var query = searchBar.value.trim();
    fetchSuggestions(query);
    //console.log("query",query);

});

function fetchSuggestions(query) {
    var fullapi = API_URL + '?q=' + query + "&weighted=true&algorithm=trie&limit=8";
    fetch(fullapi)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        //console.log("data",data);
        showSuggestions(data);
       // return;
    })
    .catch(function(error){
        console.log("error",error);
    })
}

function showSuggestions(data){
    var suggestionsList = data.results;
    if(data.count ==0){
        searchSuggestions.innerHTML = "<div>No matching results found</div>";
    }
    else{
        for(var i =0;i<suggestionsList.length;i++){
            var suggestion = suggestionsList[i];
            searchSuggestions.innerHTML += "<div class='suggestion'>" + suggestion.text +"<span class='weight'>" + suggestion.weight + "</span></div>";
        }
    }
}