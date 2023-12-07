const express = require('express')
const demoroutes = express.Router()
const demo = require('../models/demoschema')



demoroutes.post('/add', (req, res) => {
    const Data = new demo({
        name: req.body.name,
        place: req.body.place,
        pin: req.body.pin
    })
    Data.save()
        .then((data) => {
            res.status(200).json({
                success: true,
                error: false,
                message: data
            })
        })
        .catch((err) => {
            res.send(err)
        })
})


demoroutes.get('/view', (req, res) => {
    demo.find()
        .then((data) => {
            res.status(200).json({
                success: true,
                error: false,
                message: data
            })
        })
        .catch((err) => {
            res.send(err)
        })

})


demoroutes.put('/update/:id', (req, res) => {
    demo.findOne({
        _id: req.params.id,
    })
        .then((data) => {
            data.name = req.body.name,
                data.place = req.body.place,
                data.pin = req.body.pin

            data.save()
                .then((data) => {
                    res.send(data)
                })
                .catch((err) => {
                    res.send(err)
                })
        })


        .catch((err) => {
            res.send(err)
        })
})

demoroutes.delete('/delete/:id', (req, res) => {
    demo.deleteOne({
        _id: req.params.id
    })
        .then((data) => {
            res.send("deleted successfully")
        })
        .catch((err) => {
            res.send(err)
        })
})


module.exports = demoroutes