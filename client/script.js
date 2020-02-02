$("#request").on("click", function () {
	let request = $.get("http://localhost:591/");
	request.done(function(data){
		console.log(data);
	});
	request.fail(function(jqXHR, text, error){
		console.log(text, error);
	});
})