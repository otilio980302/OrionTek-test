const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const mongoose = require('mongoose')


//Coneccting to db

mongoose.connect("mongodb://localhost:27017/OrionTek", {useNewUrlParser: true, useUnifiedTopology: true})
.then(db => console.log('Db connected'))
.catch(err => console.log(err))

//importing routes

const IndexRoutes = require('./routes/index.js')

// settings
app.set('port',process.env.port || 3000)
app.set('views',path.join(__dirname, 'views'))
app.set('view engine','ejs')

//middlewares

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))

//routes

app.use('/',IndexRoutes)

//starting the server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`)
})

