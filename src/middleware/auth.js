let jwt = require("jsonwebtoken");


let verifyJWT = (req, res, next) => {

    let header = req.get("Authorization");
    let signedToken;
    if(header){
        let parts = header.split(" ");
        signedToken = parts[1];
    }

    
    // if you have a signed token... this is how you do it without a call back
    if(signedToken){
        try{
         let token = jwt.verify(signedToken, process.env.JWT_Secret);
         next();
        }catch(err){
            res.sendStatus(400);
        }
    } else {
        res.sendStatus(400);
    }
    
}
   
   
   module.exports = {
    verifyJWT
   }
   
   
   
   // this is how to verify a token with a call back.
    // if(signedToken){
    //     jwt.verify(signedToken, process.env.JWT_Secret, function(err, token){
    //         if(err){
    //             res.sendStatus(400)
    //         } else {
    //             next();
    //         }

    //     });
    // }

    // get the token from the header
    // verify that the token is good
   
    // if the token is bad, then return a status 404
   
    // if the token is good, then do the regular controller stuff
