const User = require("../models/users")
module.exports.user = function (req, res) {
    return res.send("<h1>This is user controller</h1>");
}

module.exports.login = function (req, res) {
    return res.render('login', {
        title: "Sign up"
    });
}

module.exports.signup = function (req, res) {
    return res.render('sign-up', {
        title: "Sign in"
    });
}

module.exports.create = function (req, res) {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            console.log(err);
        }
        if (!user) {
            User.create(req.body, function (err, user) {
                if (err) {
                    console.log(err);
                }
                console.log("user created");
                return res.redirect("/users/sign-in")
            })
        }
        else {
            return res.redirect("back")
        }
    })
}

module.exports.createSession = function (req, res) {
    User.findOne({ email: req.body.email, password: req.body.password }, function (err, user) {
        if (err) {
            console.log(err);
        }
        if (!user) {
            return res.redirect("back")
        }
        else {
            res.send(`Your mail ID is :${user.email}  and Your Password is : ${user.password} congrats you are logged in`)
        }
    })
}