var users = [
    {"name" : "John Doe",
     "gender" : "Male",
     "image" : "/images/john.png",
    },
    {
     "name" : "Jane Doe",
     "gender" : "Female",
     "image" : "/images/jane.png",
    }
]
var currId = 0;
function toggle(){
    // toggle curr id from 0 -> 1 and 1 ->0
    currId  = (currId+1)% users.length;
    //toggle the rendered users
    var user = users[currId];
    document.getElementById("user-img").src = user.image;
    document.getElementById("user-name").innerText = user.name;
    document.getElementById("user-gender").innerText = user.gender;
}