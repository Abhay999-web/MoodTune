const {Router} = require("express");
const { registerUser,loginUser ,authUser } = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware")
const authController = require("../controllers/auth.controller")




const router = Router();

/* Route =>>>>register  */

router.post("/register" , authController.registerUser);

/* Route =>>>>> login */

router.post("/login" , authController.loginUser)

/* Route =>>> Get-me */
router.get("/get-me", authMiddleware.authUser, authController.getMe)

/* Route =>>> Logout user */
router.get("/logout", authController.logoutUser)


module.exports = router