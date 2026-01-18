const mongodb = require("../database");
const objectID = require("mongodb").ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection("contacts").find();
    result
        .toArray()
        .then((contacts) => {
            res.setHeader("Content-Type", "application/json");
            res.status(200).json(contacts);
        })
        .catch((err) => {
            throw new Error(err);
        });
};

const getContact = async (req, res) => {
    const contactId = new objectID(req.params.id);
    const result = await mongodb.getDatabase().db().collection("contacts").find({ _id: contactId });
    result
        .toArray()
        .then((contact) => {
            res.setHeader("Content-Type", "application/json");
            res.status(200).json(contact[0]);
        })
        .catch((err) => {
            throw new Error(err);
        });
};

const create = async (req, res) => {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
    const result = await mongodb.getDatabase().db().collection("contacts").insertOne({
        firstName: firstName,
        lastName: lastName,
        email: email,
        favoriteColor: favoriteColor,
        birthday: birthday
    });
    res.status(501).send({ _id: result.insertedId });
};

const update = async (req, res) => {
    const id = new objectID(req.params.id);
    let docs = {};

    const contactFields = ["firstName", "lastName", "email", "favoriteColor", "birthday"];
    contactFields.forEach((field) => {
        if (field in req.body) {
            docs[field] = req.body[field];
        }
    });

    const result = await mongodb
        .getDatabase()
        .db()
        .collection("contacts")
        .updateOne({ _id: id }, { $set: docs });

    if (result.modifiedCount > 0) {
        res.status(200).send({ _id: id });
    } else if (result.matchedCount == 0) {
        res.status(500).send({ message: `Unable to find a contact with _id: ${id}` });
    } else {
        res.status(500).send({ message: `Unable to update contact with _id: ${id}` });
    }
};

module.exports = { getAll, getContact, create, update };
