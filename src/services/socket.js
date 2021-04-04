import socketio from "socket.io-client";

//Conectar ao servidor como cliente
const socket = socketio("http://10.0.0.106:3333", {
  autoConnect: false,
});

function inscreverNovasEmpresas(funcaoInscrever) {
  socket.on("novaEmpresa", funcaoInscrever);
}

function connect(latitude, longitude, nomeEmpresa) {
  //Envia pro backend
  socket.io.opts.query = {
    latitude,
    longitude,
    nomeEmpresa,
  };

  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { connect, disconnect, inscreverNovasEmpresas };
