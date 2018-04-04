const path = require("path");
// const exec = require("child_process").exec;


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

	// app.post("/send_form_email", function(req, res) {
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
	// });


};