const express = require('express');
const router = express.Router();

const { add, edit, remove, show, addForm, editForm } = require('../functions/printerFunction');

router.get('/show', show);
router.post('/add', add);
router.get('/new', addForm);
router.get('/edit/:id', editForm);
router.patch('/edit/:id', edit);
router.delete('/remove/:id', remove);

module.exports = router;