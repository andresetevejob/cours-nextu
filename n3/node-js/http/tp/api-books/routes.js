import express from 'express';
import { BOOKS } from './data.js';
const router = express.Router();
// GET ALL ARTICLES
router.get('/books', function(req, res, next) {
    res.send(BOOKS)
});


// ADD A BOOK
router.post('/book', function(req, res, next) {
    console.log(req.body);
    res.send(req.body);
});

// UPDATE BOOK
router.put('/book/:id', (req, res) => {
    const id = req.params.id;
    const book = req.body;
    res.send(book);
});

// GET A BOOK
router.get('/book/:id', (req, res) => {
    const id = req.params.id;
    res.send(id);
    
});

// DELETE A BOOK
router.delete('/book/:id', (req, res) => {
    const id = req.params.id;
    res.send(BOOKS.filter((book) => book.id !=id));
});
export default router;
