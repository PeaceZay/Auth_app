let db = require("../model/db");

let listItems = function(req, res){
    console.log("listItems");

// get the header info
// verify that the token is good
// if so, then doo the rest


    let sql = "select id, task, is_done from todos";

    db.query(sql, function(err, results){
        if(err){
            console.log("couldn not get todoitems", err)
            res.sendStatus(500);
        } else{
            res.json(results);
        }
    })
};

module.exports = {
    listItems

}