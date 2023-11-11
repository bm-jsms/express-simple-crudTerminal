import Express from 'express';
import morgan from 'morgan';
const app = Express();
const port = 3000;

app.use(morgan('dev'));

app.get('/products', (req, res) => {
	res.send('Get products');
});

app.post('/products', (req, res) => {
	res.send('Post products');
});

app.put('/products', (req, res) => {
	res.send('Put products');
});

app.delete('/products', (req, res) => {
	res.send('Delete products');
});

app.get('/products/:id', (req, res) => {
	res.send(`Get product with id: ${req.params.id}`);
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
