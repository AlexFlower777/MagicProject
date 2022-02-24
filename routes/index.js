const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/new", (req, res) => {
  res.render("create");
});

router.post("/newImg", async (req, res) => {
  console.log(req.body);
  
});

module.exports = router;
