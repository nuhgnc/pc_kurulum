const express = require('express'),
    cors = require('cors')

const services_status = require('./Process/Services')

const Home = require('./Routers/Home/homeRoute')
const page_routes = require('./Routers/PageRouters')

const app = express();

const port = 3000;

//MiddleWares
app.use(cors())
app.options('*', cors()) // include before other routes
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(Home)
app.use(page_routes)


app.listen(port, () => {
    console.log('server başladı')
})

