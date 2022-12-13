const express = require('express');
const { registerUser, login, logedInUser_me, activateAcc_Code, 
    activateAcc_link, searchForgotPassUser, sendPassResetCode, 
    resetPassword, resetPasswordCodeMatch, resendAcc_Code, resetPasswordLinkVfy  } = require('../controllers/userController');


// router init 
const router = express.Router();

// user auth route
router.post('/register', registerUser)
router.post('/login', login)
router.get('/me', logedInUser_me)
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