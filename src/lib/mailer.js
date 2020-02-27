const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
	host: 'smtp.mailtrap.io',
	port: 2525,
	auth: {
		user: '64669a26e4908e',
		pass: 'e34c0a31957374'
	}
})
