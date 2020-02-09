let field = document.getElementById('field');
let chat = document.getElementById('chat');

let ws = new WebSocket("ws://192.168.10.124:591/");

ws.onmessage = function (massage) {
	chat.value = massage.data + "\n" + chat.value;
};

ws.onopen = function(){
	field.addEventListener("keydown", function(event){
		console.log("tap")
		if (event.which == 13){
			ws.send(field.value);
			field.value = "";
		}
	})
}