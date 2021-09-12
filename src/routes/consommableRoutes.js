const express = require('express');
const router = express.Router();

const { add, edit, remove, show, addForm, editForm } = require('../functions/consommableFunction');

router.get('/show', show);
router.post('/add', add);
router.patch('/edit/:id', edit);
router.delete('/remove/:id', remove);
router.get('/new', addForm);
router.get('/edit/:id', editForm);

module.exports = router;