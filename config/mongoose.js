 // require the library
 const mongoose = require('mongoose');

 // connect to the database
 //localhost : mongodb://localhost/todo-list-db
 //mongodb+srv://to-do-list-yash:Test123@cluster0.vhc8o.mongodb.net/
 mongoose.connect('mongodb+srv://to-do-list-yash:Test123@cluster0.vhc8o.mongodb.net/todo-list-db');

 // acquire the connection (to check if it is successful)
 const db = mongoose.connection;

 // error
 db.on('error', console.error.bind(console, "Error connecting to database."));

 // up and running, then print the message
 db.once('open', function(){
     console.log("Successfully connected to the database.");
 });