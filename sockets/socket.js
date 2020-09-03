
const { io } = require('../index');


// mensajes sockets
io.on('connection', client=>{
    // client.on('event', data=>)
    console.log('Cliente conectado');
    client.on('disconnect', ()=>{
        console.log('cliente desconectado');
    });
    client.on('sms', (data)=>{
        console.log(data["name"]);
        io.emit("resp", {admin: "nuevo mensaje"});
    });
});