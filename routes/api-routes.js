var router = require('express').Router();
let db = require('../models');

router.post("/api/burgers", (req, res)=>{
    console.log(req.body);
    db.Burger.create(req.body).then(response => {
        res.send("Burger Created");
    })
})

module.exports = router;