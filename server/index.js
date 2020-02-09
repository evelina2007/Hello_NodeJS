let wss = require("ws").Server;

let server = new wss({port: 591});
let clients = new Set();

server.on("connection", function(socket) {
    clients.add(socket);

    socket.on("message", function(massage){
   for (let client of clients){
   	client.send(massage);
   }
    });

    socket.on("close",function(){
        clients.delete(socket);
    });
});
