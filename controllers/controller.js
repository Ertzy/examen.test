//const { perReg } = require("../handlers/dbHandler")

const inex = (req, res, next)=>{ 
    res.render("index.ejs")
}


module.exports = {
    inex
}