let express = require("express");
let cors = require("cors");
let app = express();

app.use(cors())
app.get("/", function (request, response) {
	response.send("Hello, Node.js!");
})

app.get("/page", function(req, res){
	let x = req.query.foo;
	res.send({foo: 2 * x});
})

app.listen(591);