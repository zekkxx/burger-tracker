const db = require('../models');
var router = require('express').Router();

let unpack = (data) => JSON.parse(JSON.stringify(data));

router.get("/", (req, res)=>{
    db.Burger.findAll().then(response => {
        res.render("index", { burgers: unpack(response) })
    })
})

module.exports = router;