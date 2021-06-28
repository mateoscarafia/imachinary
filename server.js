const express = require('express')
const db = require('./src/models')
const app = express()
const port = 3000

app.use((req, res, next) => {
  req.db = db
  next()
})

app.use('/api', require('./src/routers/Movie'));
app.use('/api', require('./src/routers/Person'));

app.use((err, req, res, next) => {
  console.log('Handle Error')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})