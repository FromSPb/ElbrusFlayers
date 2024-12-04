const router = require('express').Router()
const priceRoutes = require('./api.price.routes')

router.use('/price', priceRoutes)

module.exports = router