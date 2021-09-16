const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const consommable = require("../models/consommable");

const Consommable = require("../models/consommable");

exports.show = (req, res) => {
    Consommable.find({}).then((consommables) => {
        res.render("consommable/Consommable", { consommables: consommables });
    }).catch((error) => {
        return res.status(500).json({ message: error.message });
    })
};
exports.addForm = (req, res) => {
    res.render("consommable/addConsommable");
}
exports.editForm = (req, res) => {
    Consommable.findById(req.params.id).then((consommable) => {
        res.render("consommable/editConsommable", { consommable });
    }).catch(error => {
        res.status(500).json(error);
    })

}
exports.add = (req, res) => {
    const consommable = new Consommable({
        _id: new mongoose.Types.ObjectId(),
        articleNumber: req.body.articleNumber,
        type: req.body.type,
        colorType: req.body.colorType,
        pageSum: Number(req.body.pageSum),
        percent: req.body.percent,
        message: req.body.message,
    });
    consommable.save().then((result) => {
        res.redirect('/consommable/show');
    }).catch((error) => {
        return res.status(500).json({ error: error.message });
    });
};

exports.edit = (req, res) => {
    Consommable.findByIdAndUpdate(req.params.id, {
        articleNumber: req.body.articleNumber,
        type: req.body.type,
        colorType: req.body.colorType,
        pageSum: req.body.pageSum,
        percent: req.body.percent,
        message: req.body.message,
    }).then((result) => {
        res.redirect('/consommable/show');
    }).catch((error) => {
        return res.status(error.code).json({ error: error.message });
    });

};

exports.remove = (req, res) => {
    Consommable.findByIdAndRemove(req.params.id).then((result) => {
        res.redirect('/consommable/show');
    }).catch((error) => {
        return res.status(error.code).json({ error: error.message });
    })
};