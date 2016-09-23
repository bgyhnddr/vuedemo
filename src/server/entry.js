var express = require('express');
var session = require('express-session')


const userInfo = {
    name: "test",
    role: "user"
}


module.exports = (app) => {
    app.use(session({ secret: '1234567890QWERTY' }))
    app.use('/login', function (req, res, next) {
        req.session.userInfo = userInfo
        res.send(req.session.userInfo)
    })
    app.use('/logout', function (req, res, next) {
        req.session.userInfo = undefined
        res.send()
    })
    app.use('/getUser', function (req, res, next) {
        res.send(req.session.userInfo)
    })
}