const   express = require('express'),
        cors = require('cors')



const   page_routes = require('./Routers/PageRouters');


const   app = express();


//MiddleWares
app.use(cors())
app.options('*', cors()) // include before other routes
app.set('view engine', 'ejs')
app.use(page_routes)



app.listen(3000,()=>{
    console.log('server başladı')
})

