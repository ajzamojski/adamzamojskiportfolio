const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true})); 

app.use(express.static(path.join(__dirname, 'public')));
require("./routing/html-routes.js")(app);

app.listen(PORT, function () {
	console.log("listening on port " + PORT);
});
