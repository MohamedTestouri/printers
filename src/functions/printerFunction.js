
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { render } = require("../../app");

const Printer = require("../models/printer");

exports.show = (req, res) => {
    Printer.find({}).then((printers) => {
        res.render('Printers', { printers: printers });
    }).catch((error) => {
        return res.status(500).json({ message: error.message });
    })
};
exports.addForm = (req, res) => {
    res.render('addPrinter');

};
exports.editForm = (req, res) => {
    res.render('editPrinter', { id: req.params.id });

};
exports.add = (req, res) => {
    const printer = new Printer({
        _id: new mongoose.Types.ObjectId(),
        type: req.body.type,
        models: req.body.models,
        marque: req.body.marque,
        paper: req.body.paper,
    });
    printer.save().then((printers) => {
        res.redirect('/printer/show');
    }).catch((error) => {
        return res.status(error.code).json({ error: error.message });
    });
};

exports.edit = (req, res) => {
    Printer.findByIdAndUpdate(req.params.id, {
        type: req.body.type,
        models: req.body.models,
        marque: req.body.marque,
        paper: req.body.paper,
    }).then((result) => {
        res.redirect('/printer/show');
    }).catch((error) => {
        return res.status(error.code).json({ error: error.message });
    });
};

exports.remove = (req, res) => {
    Printer.findByIdAndRemove(req.params.id).then((result) => {
        res.redirect('/printer/show')
    }).catch((error) => {
        return res.status(error.code).json({ error: error.message });
    })
};