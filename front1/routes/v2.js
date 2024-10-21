const express = require('express');

const { verifyToken, apiLimiter } = require('../middlewares');
const { createToken, tokenTest } = require('../controllers/v2');

const router = express.Router();

// POST /v2/token
router.post('/token', apiLimiter, createToken);

// POST /v2/test
router.get('/test', apiLimiter, verifyToken, tokenTest);


module.exports = router;