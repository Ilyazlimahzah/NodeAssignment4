const express = require('express');
const books = require('../db/books');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({message:'GET /books', data: books})
})
router.post('/', (req, res) => {
    res.send('POST /books')
})
router.put('/', (req, res) => {
    res.send('PUT /books')
})
router.patch('/', (req, res) => {
    res.send('PATCH /books')
})
router.delete('/', (req, res) => {
    res.send('DELETE /books') 
})


module.exports = router;

