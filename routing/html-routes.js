require('dotenv').config();
const path = require("path");
const nodeMailer = require('nodemailer');

module.exports = function(app) {


	app.get("/", function(req, res) {

		res.sendFile(path.join(__dirname, "/../public/index.html"));

	});

	app.get("/portfolio", function(req, res) {
	console.log("portfolio route hit");
		res.sendFile(path.join(__dirname, "/../public/portfolio.html"));

	});

	app.get("/contact", function(req, res) {

		res.sendFile(path.join(__dirname, "/../public/contact.html"));

	});

	app.post("/send_form_email", function(req, res) {

		console.log(req.body);
			let transporter = nodeMailer.createTransport({
				host: 'smtp.gmail.com',
				port: 465,
				secure: true,
			  auth: {
			  		type: 'OAuth2',
			  		user: process.env.MY_EMAIL,
			      clientId: process.env.CLIENT_ID,
			      clientSecret: process.env.CLIENT_SECRET,
			      refreshToken: process.env.REFRESH_TOKEN
				}
			},
			{
				from: req.body.first_name + " " + req.body.last_name + " " + req.body.email
			}
			);

			let mailOptions = 
			  {
			  	from: req.body.first_name + " " + req.body.last_name + " " + req.body.email,
			    to: 'ajzamojski@gmail.com',
			    subject: 'Portfolio Contact',
			    text: req.body.comments
			    // html:'<p><ul><li>this a a simple test from Name:'+ req.body.name+'</li><li> Email:'+req.body.email+'</li><li>Message:'+req.body.message+'</li></ul>',
			  }
			  console.log(mailOptions);
			  transporter.sendMail(mailOptions, function (err, info)
			  {
			    if(err)
			    {
			      console.log(err);
			      res.redirect('/');
			    }else
			    {
			      console.log('Message send');
			      res.redirect('/');
			    }
			  });

	});


};