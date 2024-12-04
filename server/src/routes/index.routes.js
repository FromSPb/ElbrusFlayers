const router = require('express').Router()
const priceRoutes = require('./api.price.routes')
const animalsRouter = require('./animals.routes')

router.use('/animals',animalsRouter)
router.use('/price', priceRoutes)


module.exports = router