// import socketio from 'socket.io-client';

// //Conectar ao servidor como cliente
// const socket = socketio('http://10.0.0.106:3333', {
//   autoConnect: false
// });

// function inscreverNovosDevs(funcaoInscrever) {
//   socket.on('novo-dev', funcaoInscrever);
// }

// function connect(latitude, longitude, tecnologias) {
//   //Envia pro backend
//   socket.io.opts.query = {
//     latitude,
//     longitude,
//     tecnologias
//   };

//   socket.connect();

//   //socket.on('message', text => {
//   //console.log(text);
//   //})
// }

// function disconnect() {
//   if (socket.connected) {
//     socket.disconnect();
//   }
// }

// export {
//   connect,
//   disconnect,
//   inscreverNovosDevs
// };
