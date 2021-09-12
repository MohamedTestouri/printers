
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Consommable = require("../models/consommable");

exports.show = (req, res) => {
    Consommable.find({}).then((result)=>{
        return res.status(200).json(result);
    }).catch((error)=>{
        return res.status(500).json({message:error.message});
    })
};

exports.add = (req, res) => {
    const consommable = new Consommable({
    _id: new mongoose.Types.ObjectId(),
    articleNumber: req.body.articNumber,
    type : req.body.type,
    colorType:req.body.colorType,
    pageSum: req.body.pageSum,
    percent: req.body.percent,
    message: req.body.message,
});
consommable.save().then((result)=>{
    return res.status(200).json(result);
}).catch((error)=>{
   return res.status(error.code).json({error:error.message});
});
};

exports.edit = (req, res) => {
    Consommable.findByIdAndUpdate(req.body.id,{
    articleNumber: req.body.articNumber,
    type : req.body.type,
    colorType:req.body.colorType,
    pageSum: req.body.pageSum,
    percent: req.body.percent,
    message: req.body.message,
}).then((result)=>{
    return res.status(200).json(result);
}).catch((error)=>{
    return res.status(error.code).json({error:error.message});
});

};

exports.remove = (req, res) => {
    Consommable.findByIdAndRemove(req.body.id).then((result)=>{
        return res.status(200).json(result);
    }).catch((error)=>{
        return res.status(error.code).json({error:error.message});
    })
};