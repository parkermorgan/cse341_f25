const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAllContacts);

router.use('/contacts', require('./contacts'));
router.use('/', require('./swagger'));

module.exports = router;