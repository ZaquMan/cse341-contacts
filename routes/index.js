const express = require("express");
const router = express.Router();
const contactRoutes = require("./contacts");

router.get("/", (req, res) => {
    res.send("Hello World");
});

router.use("/contacts", contactRoutes);

module.exports = router;
