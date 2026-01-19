const express = require("express");
const router = express.Router();
const contactRoutes = require("./contacts");

router.use("/", require("./swagger"));

router.get("/", (req, res) => {
    //#swagger.tags=["Hello World"]
    res.send("Hello World");
});

router.use("/contacts", contactRoutes);

module.exports = router;
