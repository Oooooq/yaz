const express = require('express');
const router = express.Router();
const { makeRequest } = require('../config/proxy');

router.get('/proxy', async (req, res) => {
    try {
        const { url } = req.query;
        const data = await makeRequest(url);
        res.send(data);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

module.exports = router;
