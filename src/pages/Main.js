import React, { useEffect, useState } from "react";
import { styles } from "./styles/styles-main";
import MapView, { Marker, Callout } from "react-native-maps";
import { Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";
import { icons } from "../assets";

import { buscaEmpresasProximas, buscaEmpresasPorNome } from "../services/api";
// import { connect, disconnect, inscreverNovosDevs } from "../services/socket";

export default function Main({ navigation }) {
  const [empresas, setEmpresas] = useState([]);
  const [regiaoAtual, setRegiaoAtual] = useState(null);
  const [nomeEmpresa, setNomeEmpresa] = useState("");

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
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        });
      }
    }

    carregarPosicaoInicial();
  }, []);

  //Carregar empresas sem filtro no input
  function carregaEmpresasProximas() {
    const { latitude, longitude } = regiaoAtual;

    buscaEmpresasProximas(latitude, longitude)
      .then((resp) => setEmpresas(resp))
      .catch((e) => console.log("ERRO: ", e));

    //configWebsocket();
  }

  function filtroPorNome() {
    if (nomeEmpresa !== "") {
      const { latitude, longitude } = regiaoAtual;

      buscaEmpresasPorNome(latitude, longitude, nomeEmpresa.trim())
        .then((resp) => setEmpresas(resp))
        .catch((e) => {
          console.log("ERRO: ", e);
        });

      //configWebsocket();
    }
  }

  useEffect(() => {
    if (regiaoAtual !== null) {
      if (nomeEmpresa === "" && regiaoAtual.latitude && regiaoAtual.longitude) {
        carregaEmpresasProximas();
      }
    }
  }, [regiaoAtual, nomeEmpresa]);

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
          value={nomeEmpresa}
          onChangeText={(text) => setNomeEmpresa(text)}
        />

        <TouchableOpacity
          style={styles.botaoPesquisa}
          onPress={() => filtroPorNome()}
        >
          <MaterialIcons name="my-location" size={25} color="#FAD246" />
        </TouchableOpacity>
      </View>

      <MapView
        onRegionChangeComplete={mudaRegiao}
        initialRegion={regiaoAtual}
        style={styles.mapa}
      >
        {empresas &&
          Array.isArray(empresas) &&
          empresas.length !== 0 &&
          empresas.map((emp) => (
            <Marker
              key={emp._id}
              coordinate={{
                longitude: emp.localizacao.coordinates[0],
                latitude: emp.localizacao.coordinates[1],
              }}
            >
              <Image
                style={styles.avatar}
                source={emp.foto ? { uri: emp.foto } : icons.logo}
              />
              <Callout
                onPress={() => {
                  //Navegação para outra página
                  navigation.navigate("Profile", {
                    dados: emp,
                  });
                }}
              >
                <View style={styles.callout}>
                  <Text style={styles.name}>{emp.empresa}</Text>
                  <Text style={styles.bio}>Contato: {emp.contato}</Text>
                  <Text style={styles.faixaPreco}>
                    Faixa de preço: R${emp.faixaPreco[0]} - {emp.faixaPreco[1]}
                  </Text>
                </View>
              </Callout>
            </Marker>
          ))}
      </MapView>
    </>
  );
}
