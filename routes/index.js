const router = require("express").Router();

router.use("/", require("./swagger.routes"));
router.use("/products", require("./product.routes"));

module.exports = router;
