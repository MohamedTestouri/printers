const mongoose = require('mongoose');

const consommableSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    articleNumber: {type: String},
    type : {type: String},
    colorType: {type:String},
    pageSum: {type: Number},
    percent: {type: String},
    message: {type: String},
});

module.exports = mongoose.model('Consommable', consommableSchema);