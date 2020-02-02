let express = require("express");
let app = express();

app.get("/", function (request, response) {
	response.send("Hello, Node.js!");
})

app.get("/page", function(req, res){
	let x = req.query.foo;
	res.send({foo: 2 * x});
})

app.listen(591);