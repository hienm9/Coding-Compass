const router = require("express").Router();
router.get("/",(req, res)=>{
    res.render("homepage")
});
router.get("/account",(req, res)=>{
    res.render("account")
});
router.get("/results",(req, res)=>{
    res.render("results")
});
router.get("/single-bootcamp",(req, res)=>{
    res.render("single-bootcamp")
});

module.exports = router;