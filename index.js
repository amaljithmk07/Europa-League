const express = require('express')
const server = express()
const mongoose = require('mongoose')
const europaroutes = require('./routes/europaroutes')
// const demoroutes = require('./routes/demoroutes')

mongoose.connect('mongodb+srv://amaljithmk123:123654789@cluster0.xqfcm0w.mongodb.net/europa', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database Connected')
}).catch((error) => {
    console.log(error)
})



server.use(express.json())
server.use(express.urlencoded({ extended: true }))



server.set('view engine', 'ejs')


server.use(express.static('./public'));

server.use('/api/europa', europaroutes);

// server.use('/api/dem', demoroutes)

server.get('/home', (req, res) => {
    res.render('home')
})
server.get('/club', (req, res) => {
    res.render('club')
})
server.get('/teams', (req, res) => {
    res.render('teams')
})







const port = 2222;
server.listen(port, () => {
    console.log(`started on port ${port}`)
})