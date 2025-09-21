const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.getPerson);

module.exports = routes;