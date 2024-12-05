const router = require('express').Router()
const multerMiddleware = require('../middleware/multer')

router.post('/upload',multerMiddleware.single('avatar'),(req,res)=>{
  try {
    if(req.file){
      // req.file.path 
      res.json(req.file)
    }
  } catch (error) {
    console.log(error);
    
  }
})

module.exports = router