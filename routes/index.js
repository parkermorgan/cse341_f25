const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAllContacts);

router.use('/contacts', require('./contacts'));

module.exports = router;