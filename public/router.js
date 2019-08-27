const express = require('express')
const generateComment = require('../generate')
export const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/', (req, res) => {
    const options = req.body
    const comment = generateComment(req.body)
    if (Object.keys(options).length > 1) {
        res.render('index', { comment })
    } else {
        res.render('index', { comment, options })
    }
})