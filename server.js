const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./api/building');

// const db = require('./db');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', api);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 