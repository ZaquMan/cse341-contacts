const { body, param, validationResult } = require("express-validator");

const validate = {};

/* ************************
 * Validation Rules for contactID
 * ************************/
validate.contactIDRules = () => {
	return [
		// id must be 24 alphanumeric chars
		param("id").isMongoId().withMessage("Invalid contact ID format.")];
};

validate.checkContactId = async (req, res, next) => {
	let errors = [];
	errors = validationResult(req);
	if (!errors.isEmpty()) {
		res.status(400).send({ "errors": errors });
		return;
	};
	next();
}

module.exports = validate;