const express = require('express');
const router = express.Router();

const { addClient, editClient, removeClient, showClient, addForm, editForm } = require('../functions/clientFunction');
const { addFacture, editFacture, removeFacture, showFacture, addFactureForm, editFactureForm } = require('../functions/clientFunction');
const { addPrinter, editPrinter, removePrinter, showPrinter } = require('../functions/clientFunction');

/* Client CRUD */
router.get('/show', showClient);
router.get('/new', addForm);
router.get('/edit/:id', editForm);
router.post('/add', addClient);
router.patch('/edit/:id', editClient);
router.delete('/remove/:id', removeClient);

/* Facture CRUD */
router.get('/facture/show/:id', showFacture);
router.post('/facture/add/:id', addFacture);
router.get('/facture/add/:id', addFactureForm);
router.patch('/facture/edit/:id/:facture_id', editFacture);
router.get('/facture/edit/:id/:facture_id', editFactureForm);
router.delete('/facture/remove/:id/:facture_id', removeFacture);

/* Printer CRUD */
router.get('/printer/show/:id', showPrinter);
router.post('/printer/add', addPrinter);
router.patch('/printer/edit', editPrinter);
router.delete('/printer/remove', removePrinter);

module.exports = router;