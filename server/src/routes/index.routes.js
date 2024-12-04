const router = require('express').Router()
const animalsRouter = require('./animals.routes')
router.use('/animals',animalsRouter)

module.exports = router