import React, { useEffect, useState } from "react";
import { styles } from "./styles/styles-main";
import MapView, { Marker, Callout } from "react-native-maps";
import { Image, View, Text, TextInput, TouchableOpacity } from "react-native";
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

  //const { latitude, longitude } = regiaoAtual;
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
          <MaterialIcons name="list" size={33} color="#FAD246" />
        </TouchableOpacity>

        <TextInput
          style={styles.inputPesquisa}
          placeholder="Buscar empresa por nome..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={tecnologias}
          onChangeText={(text) => setTecnologias(text)}
        />

        {/* onPress={carregaDevs} */}
        <TouchableOpacity style={styles.botaoPesquisa}>
          <MaterialIcons name="my-location" size={25} color="#FAD246" />
        </TouchableOpacity>
      </View>

      <MapView
        onRegionChangeComplete={mudaRegiao}
        initialRegion={regiaoAtual}
        style={styles.mapa}
      >
        {/* {devs.map((dev) => ( */}
        <Marker
          // key={dev._id}
          coordinate={{
            // longitude: dev.localizacao.coordinates[0],
            // latitude: dev.localizacao.coordinates[1],
            latitude: regiaoAtual.latitude,
            longitude: regiaoAtual.longitude,
          }}
        >
          {/* <Image style={styles.avatar} source={{ uri: dev.avatar_url }} /> */}

          <Callout
            onPress={() => {
              //Navegação para outra página
              navigation.navigate("Profile", {
                //idEmpresa: empresa._id,
              });
            }}
          >
            <View style={styles.callout}>
              <Text style={styles.name}>nome</Text>
              <Text style={styles.bio}>bio</Text>
              <Text style={styles.tecnologias}>tecnologias</Text>
              {/* <Text style={styles.name}>{dev.nome}</Text>
              <Text style={styles.bio}>{dev.bio}</Text>
              <Text style={styles.tecnologias}>
                {dev.tecnologias.join(", ")}
              </Text> */}
            </View>
          </Callout>
        </Marker>
        {/* ))} */}
      </MapView>
    </>
  );
}
