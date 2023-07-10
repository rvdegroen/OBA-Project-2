const express = require('express');
const router = express.Router();
const frontendController = require('../controllers/frontendController');

// different pages get a route
router.route('/').get(frontendController.index);
// /details/someid
router.route('/details/:id(*)').get(frontendController.details);

// favorite pages to /favorieten
router.route('/favorieten').get(frontendController.favorite);

module.exports = router;
