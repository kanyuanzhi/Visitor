let express = require("express");
let router = new express.Router();

router.get("/", function (req, res, next) {
    res.render("register", {title: "Express"});
});

module.exports = router;
