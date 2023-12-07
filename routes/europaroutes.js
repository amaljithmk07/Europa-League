const express = require('express')
const europaroutes = express.Router()
const multer = require('multer')
const europa = require('../models/europaschema')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/upload/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    },

});
const upload = multer({ storage: storage });




//Adding

europaroutes.post('/add', upload.single('image'), (req, res) => {
    const Data = new europa({
        name_of_the_club: req.body.name_of_the_club,
        coach_name: req.body.coach_name,
        nationality: req.body.nationality,
        image: req.file.filename
    })
    Data.save()
        .then((data) => {
            res.redirect('/api/europa/view')
            // res.send(data)
        })
        .catch((err) => {
            res.send('err')
        })


})

//edit


europaroutes.get('/edit/:id', (req, res) => {
    europa.findOne({
        _id: req.params.id
    })
        .then((data) => {
            res.render('update', { data })
        })
        .catch((err) => {
            res.send(err)
        })
})



//View


europaroutes.get('/view', (req, res) => {
    europa.find()
        .then((data) => {
            res.render('teams', { details: data })

            // res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
})

// view one

europaroutes.get('/view/:id', (req, res) => {
    europa.findOne({
        _id: req.params.id
    })
        .then((data) => {
            res.render('viewone', { data })

            // res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
})




// delete

europaroutes.get('/delete/:id', (req, res) => {
    europa.deleteOne({
        _id: req.params.id
    })
        .then((data) => {
            // res.send(data)
            res.redirect('/api/europa/view')
        })
        .catch((err) => {
            res.send(err)
        })

})

//update

europaroutes.post('/update/:id', upload.single('image'), (req, res) => {
    europa.findOne({
        _id: req.params.id
    })
        .then((data) => {
            data.name_of_the_club = req.body.name_of_the_club,
                data.coach_name = req.body.coach_name,
                data.nationality = req.body.nationality,
                data.image = req.file.filename
            data.save()
                .then((data) => {
                    // res.send(data)
                    res.redirect('/api/europa/view')
                })

        })
        .catch((err) => {
            res.send(err)
        })
})




module.exports = europaroutes