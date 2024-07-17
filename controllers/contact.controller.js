const Contact = require("../models/contact");

const create = async (req, res) => {
    const contact = await Contact.create(req.body);
    res.send(contact);
};

const getAll = async (req, res) => {
    const contacts = await Contact.find();
    res.send(contacts);
};

module.exports = {
    create,
    getAll 
};