// Just like srcServer serve for the src folder, dist Server will serve for the dist folder
// It will serve static file for dist directory

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
	// Assume this is for real production API
	res.json([
		{"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
		{"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
		{"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
	]);
});

app.listen(port, err => {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
