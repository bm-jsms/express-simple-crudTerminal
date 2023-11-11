import Express from 'express';
import morgan from 'morgan';

const app = Express();
const port = 3000;
let products = [
	{
		id: 1,
		name: 'Product 1',
		price: 100,
	},
];

app.use(morgan('dev'));
app.use(Express.json());

app.get('/products', (req, res) => {
	res.json(products);
});

app.post('/products', (req, res) => {
	const newProduct = {
		...req.body,
		id: products.length + 1,
	};
	products.push(newProduct);
	res.send(newProduct);
});

app.put('/products/:id', (req, res) => {
	const newData = req.body;

	const profuctFound = products.find(
		product => product.id === parseInt(req.params.id),
	);

	if (!profuctFound) return res.status(404).send('Product not found');

	products = products.map(p =>
		p.id === parseInt(req.params.id) ? { ...p, ...newData } : p,
	);

	res.send('Put products');
});

app.delete('/products/:id', (req, res) => {
	const profuctFound = products.find(
		product => product.id === parseInt(req.params.id),
	);
	if (!profuctFound) return res.status(404).send('Product not found');

	const newProducts = products.filter(
		product => product.id !== parseInt(req.params.id),
	);

	res.sendStatus(204);
});

app.get('/products/:id', (req, res) => {
	console.log(req.params.id);
	const profuctFound = products.find(
		product => product.id === parseInt(req.params.id),
	);
	if (!profuctFound) return res.status(404).send('Product not found');
	console.log(profuctFound);
	res.json(profuctFound);
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
