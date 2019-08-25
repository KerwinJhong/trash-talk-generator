import path from 'path'
import bodyParser from 'body-parser'
import { router } from './router'

const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = process.env.port || 3000

app.use(express.static('public'))

app.engine(
  'handlebars',
  exphbs({
    extname: '.handlebars',
    defaultLayout: 'main',
    layoutsDir: ('views', path.join(__dirname, '../views', '/layout'))
  })
)
app.set('view engine', 'handlebars')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', router)

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
)
