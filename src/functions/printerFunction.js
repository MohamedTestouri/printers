
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { render } = require("../../app");

const Printer = require("../models/printer");

exports.show = (req, res) => {
    Printer.find({}).then((printer) => {
        res.render('Printers', { printer: printer });
    }).catch((error) => {
        return res.status(500).json({ message: error.message });
    })
};
exports.newPrinter = (req, res) => {
    res.render('addPrinter');

};
exports.add = (req, res) => {
    const printer = new Printer({
        _id: new mongoose.Types.ObjectId(),
        type: req.body.type,
        models: req.body.models,
        marque: req.body.marque,
        paper: req.body.paper,
    });
    printer.save().then((result) => {
        res.redirect('/printer/show',{printers:printers});
    }).catch((error) => {
        return res.status(error.code).json({ error: error.message });
    });
};

exports.edit = (req, res) => {
    Printer.findByIdAndUpdate(req.body.id, {
        articleNumber: req.body.articNumber,
        type: req.body.type,
        colorType: req.body.colorType,
        pageSum: req.body.pageSum,
        percent: req.body.percent,
        message: req.body.message,
    }).then((result) => {
        return res.status(200).json(result);
    }).catch((error) => {
        return res.status(error.code).json({ error: error.message });
    });
};

exports.remove = (req, res) => {
    Printer.findByIdAndRemove(req.body.id).then((result) => {
        return res.status(200).json(result);
    }).catch((error) => {
        return res.status(error.code).json({ error: error.message });
    })
};