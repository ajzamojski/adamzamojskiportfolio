require('dotenv').config();
const path = require("path");
const nodeMailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

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
		const oauth2Client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, "https://developers.google.com/oauthplayground");

		oauth2Client.setCredentials({
			     refresh_token: process.env.REFRESH_TOKEN
			});

		const accessToken = oauth2Client.getAccessToken();

			let transporter = nodeMailer.createTransport({
				service: "gmail",
			  auth: {
			  		type: 'OAuth2',
			  		user: "ajzamojski2@gmail.com",
			      clientId: process.env.CLIENT_ID,
			      clientSecret: process.env.CLIENT_SECRET,
			      refreshToken: process.env.REFRESH_TOKEN,
          	accessToken: accessToken
				},
				tls: {
				  rejectUnauthorized: false
				}
			},
			{
				from: req.body.first_name + " " + req.body.last_name + " " + req.body.email
			}
			);
			console.log("setting mail options");
			let mailOptions = 
			  {
			  	from: req.body.first_name + " " + req.body.last_name + " " + req.body.email,
			    to: 'ajzamojski2@gmail.com',
			    subject: 'Portfolio Contact',
			    auth: {
			    		user: process.env.MY_EMAIL,
			    		refreshToken: process.env.REFRESH_TOKEN,
			      	accessToken: process.env.ACCESS_TOKEN
			    },
			    html:'<p><ul><li>Portfolio contact from: '+ req.body.first_name + " " + req.body.last_name + '</li><li> Email: ' + req.body.email+ '</li><li>Message: ' + req.body.comments + '</li></ul>'
			  }
			  transporter.sendMail(mailOptions, function (err, info)
			  {
			    if(err)
			    {
			      console.log(err);
			      res.json(err);
			    }else
			    {
			      console.log('Message send');
			      res.json(info);
			    }
			  });

	});


};