const {hash} = require("bcrypt");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/user");

exports.login = (req, res) => {
};

exports.register = (req, res) => {
};