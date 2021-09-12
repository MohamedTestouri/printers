const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {type: String, require: true, unique: true, lowercase: true},
    password: {type: String, require: true},
    login: { type: String, require: false},
    role: { type: String, default: "admin"},
});

module.exports = mongoose.model('User', userSchema);