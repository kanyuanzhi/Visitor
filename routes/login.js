let express = require("express");
let router = new express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("login", {title: "Express"});
});

module.exports = router;
