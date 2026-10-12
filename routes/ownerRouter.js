const express = require('express');
const ownerModel = require('../models/owner-model');
const router = express.Router();


router.post('/create', async function (req, res) {
    let owner = await ownerModel.find();
    if (owner.length > 0) {
        return res.status(503).send("You don't have permission to create a new owner");//you can create only one owner not more than that
    }
    const { fullname, email, password } = req.body;
    let createdOwner = await ownerModel.create({
        fullname,
        email,
        password
    });
    res.send(createdOwner);
});

module.exports = router;