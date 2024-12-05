const router = require('express').Router()
const animalsRouter = require('./animals.routes')
const imagesRouter = require('./images.routes')
router.use('/animals',animalsRouter)
router.use('/images',imagesRouter)

module.exports = router