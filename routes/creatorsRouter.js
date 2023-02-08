const express = require('express');
const { saveCreators, getCreators } = require('../controllers/creatorsController');
const router = express.Router()
const checkAuth = require("../checkAuth/CheckAuth")

//Save creators creators
router.post('/creators', saveCreators)


// get creators 
router.get('/creators', checkAuth, getCreators)

module.exports = router