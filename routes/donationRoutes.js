
const express = require('express')
const { saveDonation, getDonation } = require('../controllers/donatonControllers')
const router = express.Router()
const checkAuth = require("../checkAuth/CheckAuth")

// save donation
router.post('/donation', saveDonation)


// get donations
router.get('/donation', checkAuth, getDonation)



module.exports = router