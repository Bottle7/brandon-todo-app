const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
  res.status(404).send("404 Not Found: Uh oh! There is no available endpoint here.")
})

module.exports = router;
