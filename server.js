const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./api/building');
const user = require('./api/user');

// const db = require('./db');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', api);
app.use('/api', user);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 