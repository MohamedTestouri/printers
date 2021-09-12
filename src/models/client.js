const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String},
    contractDate : {type: Date},
    contractDuration : {type: String},
    costA4Black: {type:String},
    costA4Color: {type: String},
    costA3Black: {type:String},
    costA3Color: {type: String},
    min_billing: {type: String},
    facture: [{
        _id: mongoose.Schema.Types.ObjectId,
        date:{type: Date},
        total: {type: Number},
        file: {type: String},
    }],
    printer:[{
        _id: mongoose.Schema.Types.ObjectId,
        idPrinter: {type: String},
        serialNumber: {type: String},
        articleNumber: {type: String},
        ip: {type: String},
        location: {type: String},
        state: {type: String, default: "Working"},
        installationDate: {type: Date},
        paperSum: {type: Number},
    }],
});

module.exports = mongoose.model('Client', clientSchema);