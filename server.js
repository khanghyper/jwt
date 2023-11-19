const express = require('express');
const configViewEngine = require('./src/config/viewEngine.js');
require('dotenv').config();
const path = require('path');
const { fileURLToPath } = require('url');
const webRoutes = require('./src/routes/web.js');
const  cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./src/config/connectDB.js');


const app = express();
const port = 8081;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

configViewEngine(app);

// test connect db
connection();


// khai báo route
app.use('/', webRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})