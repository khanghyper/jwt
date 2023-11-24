const express = require('express');
const {getTestPage, createUser} = require('../controllers/homeController')


const router = express.Router();


router.get('/user', getTestPage);
router.post('/user/register', createUser);

module.exports = router;