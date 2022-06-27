const express = require("express");
const router = express.Router();
const Mongo = require('../model/Mongo')
router.get("/", (req, res) => {
  res.render("addCard", {
    title: "Add card",
  });
});

router.post('/p', async (req, res) => {
  // const {
  //   name,
  //   img,
  //   price,
  //   discount,
  //   star,
  //   brand,
  //   country,
  //   type,
  //   catalog,
  //   weight
  // } = req.body
    const product = new Mongo({
      name: req.body.name,
      img: req.body.img,
      price: req.body.price,
      discount: req.body.discount,
      star: req.body.star,
      brand: req.body.brand,
      country: req.body.country,
      type: req.body.type,
      catalog: req.body.catalog,
      weight: req.body.weight
    })

    await product.save()
    res.redirect('/')

})

module.exports = router;