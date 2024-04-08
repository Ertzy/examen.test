const mongo = "mongodb://127.0.0.1:27017/";
const mongoose = require("mongoose");
const people = require("../models/person")

function connectToDb(cb){
    mongoose.connect(mongo)
    .then((result) => {
        if(result){
            console.log('Connected to the database');
            // people.insertMany([
            //     {name: "John Michal", age: 2},
            //     ])
            //     .then(()=>{console.log('Data inserted')})
            //     .catch((err)=>console.error(err))
            if(typeof cb === 'function'){
                cb()
            }
        }
        else{
            console.log(`Error connecting to the database: ${result}`);

    
        }})
}

function perReg(cb){
    people.find().sort({_id: -1}).limit(5)
    .then((result)=>{
        cb(result)
    })
}

module.exports = {
    connectToDb,
    perReg
}