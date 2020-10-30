const express = require('express');
const BookController = require('../controllers/BookController');
const router = express.Router();

router.get('/', BookController.Index);
router.post('/', BookController.Add);
router.get('/:id', BookController.Get);
router.put('/:id', BookController.Update);
router.delete('/:id', BookController.Delete);

module.exports = router;