const express = require('express');
const morgan = require('morgan');

const authorRouter = require('./routes/author');
const bookRouter = require('./routes/books');

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.get('/', (req, res) => {
	res.send('GET /');
});
app.use('/authors', authorRouter);
app.use('/books', bookRouter);

app.listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
});
