const express = require("express");
const app = express(); //in const app is a variable
const port = process.env.PORT || 6700; // port variable take any port or pick 6700
//to tell app where html css js are stored 
app.use(express.static("Frontend"));
//listening on the port - after listen is succesfull we know that the port is running succefully
app.listen(port , function(){
    console.log("App is running on https://localhost:"+ port);
});

