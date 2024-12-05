const router = require('express').Router()
const priceRoutes = require('./api.price.routes')
const animalsRouter = require('./animals.routes')
const imagesRouter = require('./images.routes')
router.use('/animals',animalsRouter)
router.use('/images',imagesRouter)
router.use('/price', priceRoutes)



module.exports = router