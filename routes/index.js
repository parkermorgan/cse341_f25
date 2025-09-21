const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.familyFunction);
routes.get('/awesome', myController.friendFunction)

module.exports = routes;