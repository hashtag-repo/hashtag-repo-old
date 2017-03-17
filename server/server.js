const express = require('express')
const session = require('express-session')
/* * * MULTER FOR EXTRACTING IMAGE DATA * * */
const multer = require('multer')
/* * * AXIOS FOR PROMISES * * */
const axios = require('axios')


const { extractText } = require('./utilities.js')

const app = express()
const imgUpload = multer({dest: 'temp/'})


process.env.GOOGLE_APPLICATION_CREDENTIALS = './credentials/googleServiceAccountKeys.json'

app.use(express.static('../client/public'))

app.use(session({
  genid: function(req) {
    return genuuid()
  },
  secret: 'Split Session Secret',
  resave: false,
  saveUninitialized: true,
  cookie: {}
  }));

/* * * ON IMAGE UPLOAD * * */
app.post('/image', imgUpload.single('image'), (req, res) => {
  const { path } = req.file

  extractText(path)

  .then((text) => {
    let response = { text }
    res.status(200).json(response)
  })
})

app.listen(9000, () => {
  console.log('Ready and listening on port 9000')
})
