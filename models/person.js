const mongoose = require("mongoose");
const { Schema } = mongoose;

// Create the User schema
const personSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true }  
});

const person = mongoose.model('Person', personSchema);

module.exports = person
