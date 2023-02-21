const express = require('express');
const { registerUser, login, logedInUser_me, activateAcc_Code, 
    activateAcc_link, searchForgotPassUser, sendPassResetCode, 
    resetPassword, resetPasswordCodeMatch, resendAcc_Code, resetPasswordLinkVfy, updateUser, featuredUpdate  } = require('../controllers/userController');

// router init 
const router = express.Router();
const multer = require('multer');
const { tokenVerify } = require('../utility/token');
const createError = require('../utility/createError');

const checkLogedInAuth = async (req, res, next) => {

  try {
      const params = req.params;
      const token = req.headers.authorization 
      const getToken = token.split(' ')[1]

      const tokeCheck = tokenVerify(getToken)
      console.log(tokeCheck);

      if(!tokeCheck.login || !params.id ){
        return  next(createError(401, "Authorization Faild"))
      }
      if(tokeCheck.id !== params.id ){
        return  next(createError(401, "Authorization Faild"))
      }
      return next()

  } catch (error) {
      next(error);
  }

}

// multer configer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,  'api/public/featured' )
  },
  
  filename: function (req, file, cb) {
    cb(null,  Date.now() +'_'+ file.originalname)
  }
})

const upload = multer({ storage: storage }).array('sliderImg', 10)

// user auth route
router.post('/register', registerUser)
router.post('/login', login)
router.get('/me', logedInUser_me)
router.put('/profile-update/:id', updateUser)
router.post('/featured-update/:id', checkLogedInAuth, upload, featuredUpdate)

router.post('/activation-code', activateAcc_Code)
router.post('/resend-code', resendAcc_Code)
router.post('/search-forgot-user', searchForgotPassUser)
router.post('/forgot-password', sendPassResetCode)

router.post('/reset-code-match', resetPasswordCodeMatch)
router.post('/reset-link-vfy', resetPasswordLinkVfy)

router.post('/reset-password', resetPassword)

router.post('/reset-password/:token', resetPassword)
router.post('/link-activate/:token', activateAcc_link)




module.exports = router