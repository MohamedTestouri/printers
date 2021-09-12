
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Client = require("../models/client");

/* Client functions */
exports.showClient = (req, res) => {
    Client.find({}).then((client) => {
        return res.status(200).json(client)
    }).catch((error) => {
        return res.status(500).json(error);
    });
};

exports.addClient = (req, res) => {
    const client = new Client({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        contractDate: req.body.contractDate,
        contractDuration: req.body.constDuration,
        costA4Black: req.body.costA4Black,
        costA4Color: req.body.costA4Color,
        costA3Black: req.body.costA3Black,
        costA3Color: req.body.costA3Color,
        min_billing: req.body.min_billing,
    });
    client.save().then((result) => {
        return res.status(200).json(result);
    }).catch((error) => {
        return res.status(error.code).json({ error: error.message });
    });
};

exports.editClient = (req, res) => {

    Client.findByIdAndUpdate(req.body._id, {
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        contractDate: req.body.contractDate,
        contractDuration: req.body.constDuration,
        costA4Black: req.body.costA4Black,
        costA4Color: req.body.costA4Color,
        costA3Black: req.body.costA3Black,
        costA3Color: req.body.costA3Color,
        min_billing: req.body.min_billing,
    }).then((result) => {
        return res.status(200).json(result);
    }).catch((error) => {
        return res.status(error.code).json(error);
    });


};

exports.removeClient = (req, res) => {
    Client.findByIdAndDelete(req.body.id).then((result) => {
        return res.status(200).json(result);
    }).catch((error) => {
        return res.status(error.code).json(error);
    });
};

/* Facture functions */
exports.showFacture = (req, res) => {

};

exports.addFacture = (req, res) => {
};

exports.editFacture = (req, res) => {
};

exports.removeFacture = (req, res) => {
};

/* Printer functions */
exports.showPrinter = (req, res) => {
};

exports.addPrinter = (req, res) => {
};

exports.editPrinter = (req, res) => {
};

exports.removePrinter = (req, res) => {
};

