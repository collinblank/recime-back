const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { User } = db


router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

router.post('/', async (req, res) => {
    let {password} = req.body;
    const user = User.create({
         password_digest: await bcrypt.hash(password, 10)
    })
    res.json(user)
})





module.exports = router