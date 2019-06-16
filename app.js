// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const helpers = require('./handlebarsHelpers')
const trashTalkGenerate = require('./trashTalkGenerate')
const app = express()
const port = 3000

//setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
//setting body-Parser
app.use(bodyParser.urlencoded({ extended: true }))
//setting routes
app.get('/', (req, res) => {
  res.render('index')
})
app.post('/', (req, res) => {
  const career = req.body.career
  const result = trashTalkGenerate(career)
  res.render('index', { result: result, helpers: { career: career } })
})
//starts the express server and listening for connections
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})
