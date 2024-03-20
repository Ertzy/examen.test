const express = require('express');
const app = express();
const mongoose = require('mongoose')
const mongo = "mongodb://127.0.0.1:27017/folkeReg";
const Router = require("./routers/router")
const dbHandler = require("./handlers/dbHandler")


app.use(Router)


app.listen(3000, ()=>{
    dbHandler.connectToDb()

    console.log("Server is running on port 300")
})







     
// const insertTestDocument = async () => {
//     try {
//         await mongoose.connect(mongo);
//         console.log('Connected to MongoDB server!');
          
//         const testSchema = new mongoose.Schema({ name: String, value: Number });
//         const Test = mongoose.model('Test', testSchema);
          
//         const testDoc = new Test({ name: 'test', value: 1 });
//         const result = await testDoc.save();
//         console.log('Inserted test document:', result);
          

// };

// insertTestDocument();