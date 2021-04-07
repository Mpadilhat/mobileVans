import socketio from "socket.io-client";

//Conectar ao servidor como cliente
//http://10.0.0.106:3333 - SE FOR RODAR LOCAL
const socket = socketio(
  "https://us-central1-minha-van-web.cloudfunctions.net/app",
  {
    autoConnect: false,
  }
);

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
