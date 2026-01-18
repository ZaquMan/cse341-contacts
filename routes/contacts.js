const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contacts");

router.get("/", contactController.getAll);
router.post("/", contactController.create);

router.get("/:id", contactController.getContact);
router.put("/:id", contactController.update);

module.exports = router;
