const express = require('express'),
fs = require('fs')


const Home = require('./Routers/HomeRoute')
const printer_routes = require('./Routers/PrinterRoutes')

const app = express();

const port = 3000;

//MiddleWares
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(Home)
app.use(printer_routes)



app.listen(port, () => {
    console.log(`server ${port} numaralı port üzerinden çalışmaya başladı`)
    //require('child_process').exec(`start http://localhost:${port}/merkez`)
})

