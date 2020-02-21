const express = require('express')
const routes = express.Router()

const products = require('./products')
const users = require('./users')

routes.get('/', function(req, res) {
	return res.render('layout')
})

routes.use('/products', products)
routes.use('/users', users)

// Alias
routes.get('/ads/create', function(req, res) {
	return res.redirect('/produts/create')
})

routes.get('/accounts', function(req, res) {
	return res.redirect('/users/register')
})

module.exports = routes
