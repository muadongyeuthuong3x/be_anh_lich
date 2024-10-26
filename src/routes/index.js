const express = require('express')

const router = express.Router()

const userSignUpController = require("../controller/user/userSignUp")
const testController = require("../controller/user/testcontroller")
const userSignInController = require('../controller/user/userSignIn')
const userDetailsController = require('../controller/user/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/user/userLogout')
const allUsers = require('../controller/user/allUsers')
const updateUser = require('../controller/user/updateUser')
const  sliderControlelr = require("../controller/slider/slider.controller")
const getSliderController = require("../controller/slider/getSlider.controller")
const categoryController = require("../controller/category/createCategory"); 
const contactController  = require("../controller/contact/contact")

const productController  = require("../controller/product/product.controller")

router.get("/test",testController)

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)

//admin panel 
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)


// sliderf 
router.post("/sliders",authToken,sliderControlelr)
router.get("/sliders", getSliderController)

// contact 
router.post("/contact",contactController.createContact)
router.get("/contact",contactController.getContact)
router.delete("/contact/:id",authToken,contactController.deleteContact)

// category

router.post("/category",authToken,categoryController.createCategory)
router.get("/category",categoryController.getCategory)
router.delete("/category/:id",authToken,categoryController.deleteCategory)

//product

router.post("/upload-product",authToken,productController.createProduct)
router.get("/product/:id",productController.getProduct)
router.post("/product-details",productController.getProductDetail)


router.put("/product/:id",authToken,productController.noActiveProduct)
router.put("/update-product/:id",authToken,productController.updateProduct)

module.exports = router