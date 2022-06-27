const express = require("express");
const router = express.Router();
const Mongo = require('../model/Mongo')

router.get("/", async (req, res) => {
    const product = await Mongo.find()
    res.render('home.hbs',{
        title: 'Home page',
        product
    })
});

module.exports = router;
