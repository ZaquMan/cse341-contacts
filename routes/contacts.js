const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contacts");
const validate = require("../contact-validation");

const errorHandler = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

router.get("/", errorHandler(contactController.getAll));
router.post("/", errorHandler(contactController.createContact));

router.get("/:id", validate.contactIDRules(),
	validate.checkContactId,
	errorHandler(contactController.getContact));
router.put("/:id", errorHandler(contactController.updateContact));
router.delete("/:id", errorHandler(contactController.deleteContact));

module.exports = router;
