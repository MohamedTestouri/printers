const express = require('express');
const router = express.Router();

const {addClient, editClient, removeClient, showClient } = require('../functions/clientFunction');
const {addFacture, editFacture, removeFacture, showFacture } = require('../functions/clientFunction');
const {addPrinter, editPrinter, removePrinter, showPrinter } = require('../functions/clientFunction');

/* Client CRUD */
router.get('/show', showClient);
router.post('/add', addClient);
router.patch('/edit', editClient);
router.delete('/remove', removeClient);

/* Facture CRUD */
router.get('/facture/show', showFacture);
router.post('/facture/add', addFacture);
router.patch('/facture/edit', editFacture);
router.delete('/facture/remove', removeFacture);

/* Printer CRUD */
router.get('/printer/show', showPrinter);
router.post('/printer/add', addPrinter);
router.patch('/printer/edit', editPrinter);
router.delete('/printer/remove', removePrinter);

module.exports = router;