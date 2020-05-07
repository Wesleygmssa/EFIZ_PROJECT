const express = require('express');
const routes = express.Router(); 

// const members = require('./app/controllers/members') 


routes.get('/', function(req, res){
    return res.redirect('/index')
})

routes.get('/index', function(req, res){
    return res.render('index')
})



module.exports = routes