const user_details = require('../model/user');


module.exports.user_details = function(req, res) {
    //  console.log("welcome in quiz details");
    console.log(req.body);
    try {
        user_details.create({
            name: req.body.name,
            email: req.body.email

        }, function(err, usersdetails) {
            if (err) {
                console.log("error in add router");
                return;
            }
            console.log(usersdetails);
            return res.json(usersdetails);

        });
    } catch (error) {
        return res.send("error in creating in list");
    }



};