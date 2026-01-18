const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contacts");

router.get("/", contactController.getAll);
router.post("/", contactController.createContact);

router.get("/:id", contactController.getContact);
router.put("/:id", contactController.updateContact);
router.delete("/:id", contactController.deleteContact);

module.exports = router;
