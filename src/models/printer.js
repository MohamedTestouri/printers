const mongoose = require('mongoose');

const printerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: {type: String},
    models : {type: String},
    marque: {type:String},
    paper: {type: String},
});

module.exports = mongoose.model('Printer', printerSchema);