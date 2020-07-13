import React, { useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";

// import api from "../services/api";
// import { connect, disconnect, inscreverNovosDevs } from "../services/socket";

export default function Main({ navigation }) {
  const [devs, setDevs] = useState([]);
  const [regiaoAtual, setRegiaoAtual] = useState(null);
  const [tecnologias, setTecnologias] = useState("");

  //Executa algo assim que o componente é montado na tela
  useEffect(() => {
    async function carregarPosicaoInicial() {
      const { granted } = await requestPermissionsAsync();

      //Se aceitar a permissão de localização, pega a posição do usuário
      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          //Usar o GPS do celular pra localização ser mais precisa
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setRegiaoAtual({
          latitude,
          longitude,
          //Ajustam o zoom no mapa
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      }
    }

    carregarPosicaoInicial();
  }, []);

  //Toda vez que o devs for alterado, atualiza em tempo real
  // useEffect(() => {
  //   inscreverNovosDevs((dev) => setDevs([...devs, dev]));
  // }, [devs]);

  //Configurar acesso ao servidor
  // function configWebsocket() {
  //   disconnect();

  //   const { latitude, longitude } = regiaoAtual;
  //   connect(latitude, longitude, tecnologias);
  // }

  //Carregar devs
  // async function carregaDevs() {
  //   const { latitude, longitude } = regiaoAtual;
  //   //AWAIT!!!!!!!!
  //   const response = await api.get("/search", {
  //     params: {
  //       latitude,
  //       longitude,
  //       tecnologias,
  //     },
  //   });

  //Tem que ter o 'devs' após o 'data' pq os dados vem dentro de um array com o objeto 'devs' na api
  // setDevs(response.data.devs);

  // configWebsocket();
  // }

  //Muda localização se mexer no mapa - pega o region do 'onRegionChangeComplete' do MapView

  function mudaRegiao(region) {
    setRegiaoAtual(region);
  }

  //Não mostrar nada na tela se não houver localização inicial
  if (!regiaoAtual) {
    return null;
  }

  return (
    <>
      <View style={styles.menuForm}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.menu}
        >
          <MaterialIcons name="list" size={30} color="#000" />
        </TouchableOpacity>

        <TextInput
          style={styles.inputPesquisa}
          placeholder="Buscar vans..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={tecnologias}
          onChangeText={(text) => setTecnologias(text)}
        />

        {/* onPress={carregaDevs} */}
        <TouchableOpacity style={styles.botaoPesquisa}>
          <MaterialIcons name="my-location" size={25} color="#000" />
        </TouchableOpacity>
      </View>

      <MapView
        onRegionChangeComplete={mudaRegiao}
        initialRegion={regiaoAtual}
        style={styles.mapa}
      >
        {/* {devs.map((dev) => (
          <Marker
            key={dev._id}
            coordinate={{
              longitude: dev.localizacao.coordinates[0],
              latitude: dev.localizacao.coordinates[1],
            }}
          >
            <Image style={styles.avatar} source={{ uri: dev.avatar_url }} />

            <Callout
              onPress={() => {
                //Navegação para outra página
                navigation.navigate("Profile", {
                  github_username: dev.github_username,
                });
              }}
            >
              <View style={styles.callout}>
                <Text style={styles.name}>{dev.nome}</Text>
                <Text style={styles.bio}>{dev.bio}</Text>
                <Text style={styles.tecnologias}>
                  {dev.tecnologias.join(", ")}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))} */}
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  mapa: {
    flex: 1,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: "rgb(2, 0, 30)",
  },
  callout: {
    width: 260,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  bio: {
    color: "#666",
    marginTop: 5,
  },
  tecnologias: {
    marginTop: 5,
  },
  menuForm: {
    position: "absolute",
    margin: 10,
    //evita bug de não abir o teclado ao clicar no input
    zIndex: 7,
    backgroundColor: "white",
    elevation: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1.0,
    shadowRadius: 5,
    elevation: 8,
    padding: 7,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  inputPesquisa: {
    flex: 1,
    color: "#333",
    paddingHorizontal: 20,
    fontSize: 15,
    borderColor: "rgba(0, 0, 0, 0.03)",
    borderWidth: 1,
    borderRadius: 5,
  },
  menu: {
    marginLeft: 8,
    marginRight: 7,
  },
  botaoPesquisa: {
    marginLeft: 7,
    marginRight: 8,
  },
});
