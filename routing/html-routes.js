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
	// 	console.log("server route hit");
	// 	app.use(path.join(__dirname, "/../public/send_form_email.php"));
	// });
	// app.post('/send_form_email', function(req, res){
	// 	console.log("send_form_email route hit");
	// 	exec("php -S /public/send_form_email.php", function (error, stdout, stderr) {
	// 		console.log("file read php");
	// 		console.log(stdout);
	// 		res.send(stdout);
	// 	});

		console.log(req.body);
			let transporter = nodeMailer.createTransport({
				host: 'smtp.gmail.com',
			  port: 465,
			  secure: true,
			  auth : {
			  	type: 'OAuth2',
			    user: "ajzamojski@gmail.com",
			    clientId: "832250632334-9orhrsu3j2ors7a2s4mrsn4rfccqlh0v.apps.googleusercontent.com",
			    clientSecret: "FlsHetg3NaophIAkTvCHKOEM",
			    refreshToken: "ya29.GluTBaWc0dkxGa8l4uG9jvbvWgU-tYtzk5IakI9-D35ZpoZWs7YCTYGRnUqcqdxLmOTMzgwhDdwXWlVvOnwD2m07OoHZmPAh_64DrEg25gnApljRVmPtUMU_7QLW",
			    accessToken: 'ya29.GluTBaWc0dkxGa8l4uG9jvbvWgU-tYtzk5IakI9-D35ZpoZWs7YCTYGRnUqcqdxLmOTMzgwhDdwXWlVvOnwD2m07OoHZmPAh_64DrEg25gnApljRVmPtUMU_7QLW'
	      }
			});

			let mailOptions = 
			  {
			    from: req.body.first_name + " " + req.body.last_name + " <" + req.body.email +">",
			    to: 'ajzamojski@gmail.com',
			    subject: 'Sending Email using Node.js',
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