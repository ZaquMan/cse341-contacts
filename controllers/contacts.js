const mongodb = require("../database");
const objectID = require("mongodb").ObjectId;

const getAll = async (req, res) => {
	const result = await mongodb.getDatabase().db().collection("contacts").find();
	result.toArray().then((contacts) => {
		res.setHeader("Content-Type", "application/json");
		res.status(200).json(contacts);
	}).catch((err) => {
		throw new Error(err); 
	});
}

const getContact = async (req, res) => {
	const contactId = new objectID(req.params.id);
	const result = await mongodb.getDatabase().db().collection("contacts").find({_id: contactId});
	result.toArray().then((contact) => {
		res.setHeader("Content-Type", "application/json");
		res.status(200).json(contact[0]);
	}).catch((err) => {
		throw new Error(err); 
	});
}

module.exports = { getAll, getContact }