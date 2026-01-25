// import multer from "multer";


// const sotrage = multer.diskStorage({
//     destination: function(req, res, cb){
//         cb(null, "./public/temp")
//     },
//     filename: function(req, res, cb){
//         cb(null, file.originalname)
//     }
// })


// export const upload = multer({
//     sotrage,
// })

import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({ 
    storage, 
})