const express = require('express')

const app = express()

app.use(express.static('../client/build'))

/* * * Use Port 9000 with Build System * * */

app.listen(9000, function () {
  console.log('Hello world, you rock! Listening on Port 9000.')
})
