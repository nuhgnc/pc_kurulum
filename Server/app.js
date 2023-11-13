const express = require('express')

const Home = require('./Routers/Home/homeRoute')
const page_routes = require('./Routers/PageRouters')

const app = express();

const port = 3000;

//MiddleWares
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(Home)
app.use(page_routes)


app.listen(port, () => {
    console.log(`server ${port} numaralı port üzerinden çalışmaya başladı`)
    require('child_process').exec(`start http://localhost:${port}/merkez`)
})

