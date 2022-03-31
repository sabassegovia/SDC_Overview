const router = require("express").Router()
const controller = require('./controller.js')


// router.get("/products", controller.products.get)

router.get("/reviews", controller.reviews.get)

// router.get("/qa/questions", controller.qa.get)

// router.post("/qa/questions", controller.qa.post)

// router.get('/test', controller.test.get)

router.get('/', controller.get)


// router.get("cart/")
// router.post("cart/")
// router.post("interactions/")


module.exports = router