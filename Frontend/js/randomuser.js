function randomuser(){
    fetch("https://randomuser.me/api/")
    .then(function(result){
        return result.json();
    })
    .then(function(data){
        // Do something with the random user data
        var user = data.results[0];
        var fullName = user.name.title + " " + user.name.first + " " + user.name.last;

        document.getElementById("user-image").src = user.picture.large;
        document.getElementById("user-name").textContent = fullName;
        document.getElementById("user-gender").textContent = user.gender;

    })
    .catch(function(error){
        console.log("Error fetching random user data:", error);
    })
}