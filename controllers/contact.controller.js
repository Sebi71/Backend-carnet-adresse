const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");
const Contact = require("../models/contact");
const catchAsync = require("../helpers/catchAsync");

const create = catchAsync (async (req, res) => {
    const contact = await Contact.create(req.body);
    res.send(contact);
});

const getAll = catchAsync (async (req, res) => {
    const contacts = await Contact.find();
    res.send(contacts);
});

const getById = catchAsync (async (req, res) => {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
        console.log("Catch erreur conversion ObjectId");
        return res
            .status(StatusCodes.BAD_REQUEST)
            .send("Format de l'id incorrect");
    }

    try {
        const contact = await Contact.findById(id);
        if (contact) {
            res.send(contact);
        } else {
            res
                .status(StatusCodes.NOT_FOUND)
                .send("Contact non trouvé");
        }
    } catch (error) {
        console.log(error);
        res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .send("Erreur interne du serveur");
    }
});


const updateById = catchAsync (async (req, res) => {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (contact) {
        res.send(contact);
    } else {
        res
            .status(StatusCodes.NOT_FOUND)
            .send("Contact not found");
    }
});

const deleteById = catchAsync (async (req, res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (contact) {
        res.send(contact);
    } else {
        res
            .status(StatusCodes.NOT_FOUND)
            .send("Contact not found");
    }
});

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteById 
};