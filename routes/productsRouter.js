const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Fetching data from database");
})

module.exports = router;