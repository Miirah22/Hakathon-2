const express = require('express');
const router = express.Router();
const empControllers = require('../controllers/empControllers');

router.post('/empForm', empControllers.empForm);

module.exports = router;