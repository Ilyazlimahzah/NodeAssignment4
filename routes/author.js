const express = require('express');
const author = require('../db/authors');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({message:'GET /author', data: author})
})
router.post('/', (req, res) => {
    res.send('POST /author')
})
router.put('/', (req, res) => {
    res.send('PUT /author')
})
router.patch('/', (req, res) => {
    res.send('PATCH /author')
})
router.delete('/', (req, res) => {
    res.send('DELETE /author')
})

module.exports = router;


