const express = require('express');
const mainController = require('../controllers/main');

const router = express.Router();

router.post('/', mainController.postForm);

router.post('/delete/:id', mainController.deleteUser);

router.get('/', mainController.getForm);

module.exports = router;
