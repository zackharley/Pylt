const express = require('express');
const path = require('path');
const morgan = require('morgan');
const router = require('./router');

const app = express();
const port = 8000 || process.env.PORT;

app.use(express.static(path.join(__dirname, '../client/dist/public')));
app.use(morgan('combined'));

// app.use('/', router);

app.listen(port, () => {
	console.log(`Pylt listening on port ${port}`);
});