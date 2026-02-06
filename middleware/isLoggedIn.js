const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');

module.exports = (req, res, next) => {
    if(!req.cookies.token) {
        req.flash("error", "you need to login first");
        return res.redirect('/');
    }
    try {
        const decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY)
        let user = userModel.findOne({email: decoded.email})
        .select("-password");
        
        req.user = user;
        next();
        
    } catch (err) {
        req.flash("error", "Verification failed: " + err.message);
        res.redirect("/");
    }
}