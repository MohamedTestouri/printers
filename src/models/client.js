const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String},
    contractDate: {type: Date},
    contractDuration: {type: String},
    costA4Black: {type: String},
    costA4Color: {type: String},
    costA3Black: {type: String},
    costA3Color: {type: String},
    min_billing: {type: String},
    facture: [{
        _id: mongoose.Schema.Types.ObjectId,
        date: {type: Date},
        total: {type: Number},
        file: {type: String},
    }],
    printer: [{
        _id: mongoose.Schema.Types.ObjectId,
        idPrinter: {type: String},
        serialNumber: {type: String},
        articleNumber: {type: String},
        ip: {type: String},
        location: {type: String},
        state: {type: String, default: "Working"},
        installationDate: {type: Date},
        paperSum: {type: Number},
        currentA4Black: {type: String},
        currentA4Color: {type: String},
        currentA3Black: {type: String},
        currentA3Color: {type: String},
        creationDate: {type: Date},
        percBlack: {type: String},
        percCyan: {type: String},
        percMagenta: {type: String},
        percYellow: {type: String},
        percBlackDrum: {type: String},
        percCyanDrum: {type: String},
        percYellowDrum: {type: String},
        percMagentaDrum: {type: String},
        consommable: [{
            _id: mongoose.Schema.Types.ObjectId,
            articleNumber: {type: String},
            type: {type: String},
            colorType: {type: String},
            pageSum: {type: Number},
            percent: {type: String},
            message: {type: String},
        }]
    }],
});

module.exports = mongoose.model('Client', clientSchema);