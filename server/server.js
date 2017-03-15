const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./router');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '../client/dist/public')));
app.use(morgan('combined'));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/test');

app.use('/api', router);

app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err);
});

app.listen(port, () => {
	console.log(`Pylt listening on port ${port}`);
});
