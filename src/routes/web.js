const express = require('express');
const {getTestPage, createUser, getUsers, deleteUser, userDetail, updateUser} = require('../controllers/homeController')

const router = express.Router();

router.get('/', getTestPage);

router.get('/user', getUsers);

router.post('/create-user', createUser);

router.get('/detail-user/:id', userDetail);

router.get('/delete-user/:id', deleteUser);

router.post('/update-user/:id', updateUser);

module.exports = router;