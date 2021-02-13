var router = require('express').Router();
let db = require('../models');

router.post("/burgers", (req, res)=>{
    db.Burger.create(req.body).then(response => {
        res.send("Burger Created");
    })
})

router.put("/burgers/:id", (req, res)=>{
    db.Burger.update({devoured: true}, {
        where: {
            id: req.params.id
        }
    }).then(function(response){
        res.send("Burger Eaten");
    })
})

router.delete("/burgers/:id", (req, res)=>{
    db.Burger.destroy({where:{id:req.params.id}})
    .then(function(response){
        res.send("Burger Digested");
    })
})

module.exports = router;