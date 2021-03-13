const express = require('express')
const Listings = require('./controller')
const router = express.Router()					//router routes the api-s to the respective functions

router.post('/', Listings.getJobs)
router.post('/users', Listings.putUser)


module.exports = router
