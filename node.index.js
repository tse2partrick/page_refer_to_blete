var express = require('express')
var compression = require('compression')

var port = 3000

var app = express()

var apiRoutes = express.Router()

apiRoutes.get('/', function (req, res) {
  res.sendFile('/js_code/page_refer_to_blete-master/index.html')
})

app.use('/', apiRoutes)

app.use(compression())

app.use(express.static('../page_refer_to_blete-master'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})