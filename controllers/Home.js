
module.exports.home = function name(req, res) {
    return res.render('home', {
        title: "SocialNet"
    });
}
