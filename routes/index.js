var router = require('express').Router();

router.use("/api", require("./api-routes"));
router.use(require('./html-routes'));

module.exports = router;