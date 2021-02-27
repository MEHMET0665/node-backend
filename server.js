const express = require('express')
const router=require('./app/routers/db.routes')
const app = express()
const port = 3001
const cors=require('cors')
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
require('./config/db.config')
app.use('/api/customers', router);
let corsOptions = {
  origin: 'http://localhost:3000',   //This is for frontend
  optionsSuccessStatus: 200 // For legacy browser support
};
app.use(cors(corsOptions));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`mustafa hoca persembe`))