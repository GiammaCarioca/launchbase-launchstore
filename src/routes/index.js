const express = require('express')
const routes = express.Router()

const HomeController = require('../app/controllers/HomeController')
const SearchController = require('../app/controllers/SearchController')

const products = require('./products')
const users = require('./users')

// Home
routes.get('/', HomeController.index)

// Search
routes.get('/products/search', SearchController.index)

routes.use('/products', products)
routes.use('/users', users)

// Aliases
routes.get('/ads/create', function(req, res) {
	return res.redirect('/produts/create')
})

routes.get('/accounts', function(req, res) {
	return res.redirect('/users/login')
})

module.exports = routes
