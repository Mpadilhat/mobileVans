import axios from "axios";

//Chama a api
const api = axios.create({
  //IP do celular usado - porta do PC usada no backend
  baseURL: "http://10.0.0.106:3333",
});

const buscaEmpresasProximas = (latitude, longitude) => {
  return new Promise((resolve, reject) => {
    api
      .get("/search-near", {
        params: {
          latitude,
          longitude,
        },
      })
      .then((resp) => resolve(resp.data.Emps))
      .catch((e) => reject(e));
  });
};

const buscaEmpresasPorNome = (latitude, longitude, empresa) => {
  return new Promise((resolve, reject) => {
    api
      .get("/search", {
        params: {
          latitude,
          longitude,
          empresa,
        },
      })
      .then((resp) => resolve(resp.data))
      .catch((e) => reject(e));
  });
};

export { buscaEmpresasProximas, buscaEmpresasPorNome };
