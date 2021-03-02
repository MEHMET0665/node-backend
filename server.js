const express = require('express')
const router=require('./app/routers/db.routes')
const app = express()
const port = 3001
const cors=require('cors')
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
require('./config/db.config')
app.use('/api/customers', router);
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`mustafa hoca persembe`))