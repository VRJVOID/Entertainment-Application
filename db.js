const mongoose = require("mongoose");
var MONGO_URI = `mongodb+srv://Viraj:qwertyuiop@cluster0.fzfl058.mongodb.net/entertainment`

mongoose.connect(MONGO_URI, {useUnifiedTopology : true , useNewUrlParser: true});
var connection = mongoose.connection

connection.on('error' , ()=>{
    console.log('MOngo Connection Failed.')
})

connection.on('connected', ()=>{
    console.log('Mongo Connection Successfulllll'); 
})


module.exports = mongoose