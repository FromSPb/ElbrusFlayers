const router = require('express').Router()
const multerMiddleware = require('../middleware/multer')

router.post('/upload',multerMiddleware.single('avatar'),(req,res)=>{
  try {
    console.log(req.body);

    console.log(req.file);
    
    
    if(req.file){
      // req.file.path 
      res.json(req.file)
    }
  } catch (error) {
    console.log(error);
    
  }
})

module.exports = router