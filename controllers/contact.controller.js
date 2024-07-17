const Contact = require("../models/contact");

const create = async (req, res) => {
    const contact = await Contact.create(req.body);
    res.send(contact);
};

const getAll = async (req, res) => {
    const contacts = await Contact.find();
    res.send(contacts);
};

const getById = async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (contact) {
        res.send(contact);
    } else {
        res.status(404).send("Contact not found");
    }
};

const updateById = async (req, res) => {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (contact) {
        res.send(contact);
    } else {
        res.status(404).send("Contact not found");
    }
};

const deleteById = async (req, res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (contact) {
        res.send(contact);
    } else {
        res.status(404).send("Contact not found");
    }
};

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteById 
};