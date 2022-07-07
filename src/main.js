let express = require("express");
require("dotenv").config();
let bodyparser = require("body-parser");
let PORT = process.env.PORT || 8000;

let app = new express();
app.use(bodyparser.json())

let todoRoutes = require("./routers/todosRouters")
let userRoutes = require("./routers/userRouters")
app.use(todoRoutes);
app.use(userRoutes);

app.listen(PORT, function(){
    console.log("Application started on port", PORT);
})

// He wants us to add The REGISTRATION, THE LOGIN, AND THE TOKENS to a project we already did.