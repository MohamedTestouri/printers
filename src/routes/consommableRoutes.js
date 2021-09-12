const express = require('express');
const router = express.Router();

const {add, edit, remove, show } = require('../functions/consommableFunction');

router.get('/show', show);
router.post('/add', add);
router.patch('/edit', edit);
router.delete('/remove', remove);

module.exports = router;