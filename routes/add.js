const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("addCard", {
    title: "Add card",
  });
});

router.post('/', (req, res) => {
    
})

module.exports = router;