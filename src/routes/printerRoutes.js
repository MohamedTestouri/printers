const express = require('express');
const router = express.Router();

const { add, edit, remove, show, newPrinter } = require('../functions/printerFunction');

router.get('/show', show);
router.post('/add', add);
router.get('/new', newPrinter);
router.patch('/edit', edit);
router.delete('/remove', remove);

module.exports = router;