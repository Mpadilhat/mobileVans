import React from "react";
import { styles } from "./styles/styles-profile";
import { Image, View, Text, ScrollView, Linking, WebView } from "react-native";
import { icons } from "../assets";

export default function Profile({ navigation }) {
  const dados = navigation.getParam("dados");

  return (
    <ScrollView>
      <View style={styles.content}>
        <Image style={styles.img} source={{ uri: dados.foto }} />
        <Text style={styles.title}>{dados.empresa}</Text>
        <Text style={styles.paragrafo}>
          <Text style={styles.subtitle}>CNPJ: </Text>
          {dados.cnpj}
        </Text>
        <Text style={styles.paragrafo}>
          <Text style={styles.subtitle}>Data de fundação: </Text>
          {dados.dataFundacao}
        </Text>

        <View style={styles.divLine}>
          <View style={styles.divColumn}>
            <Text style={styles.italic}>Como posso entrar em contato?</Text>
            <Text style={styles.paragrafo}>
              <Text style={styles.subtitle}>Contato: </Text>
              {dados.contato}
            </Text>
            <Text style={styles.paragrafo}>
              <Text style={styles.subtitle}>E-mail: </Text>
              {dados.email}
            </Text>
            <Text
              style={{ ...styles.paragrafo, color: "blue" }}
              onPress={() => {
                //Navegação para outra página
                navigation.navigate("RedeSocial", {
                  url: dados.redeSocial,
                });
              }}
            >
              <Text style={styles.subtitle}>Rede social: </Text>
              {dados.redeSocial}
            </Text>

            <View style={styles.divLine}>
              <View style={styles.divColumn}>
                <Text style={styles.italic}>Quanto custa e onde atua?</Text>
                <Text style={styles.paragrafo}>
                  <Text style={styles.subtitle}>Faixa de preço: </Text>
                  R${dados.faixaPreco[0]} - {dados.faixaPreco[1]}
                </Text>
                <Text style={styles.paragrafo}>
                  <Text style={styles.subtitle}>Zonas de atuação: </Text>
                  {dados.zonasAtuacao}
                </Text>
              </View>
            </View>

            <View style={styles.divLine}>
              <View style={styles.divColumn}>
                <Text style={styles.italic}>Tem opções de veículos?</Text>
                <Text style={styles.paragrafo}>
                  <Text style={styles.subtitle}>Total de vans: </Text>
                  {dados.vans.length}
                </Text>
                {dados.vans.length !== 0 && (
                  <Text style={styles.subtitle}>
                    Vans:{" "}
                    {dados.vans.map((van, i) => (
                      <Text style={styles.paragrafo} key={i}>
                        {van}
                        {i < dados.vans.length - 1 && ", "}
                      </Text>
                    ))}
                  </Text>
                )}
                <Text style={styles.paragrafo}>
                  <Text style={styles.subtitle}>Total de ônibus: </Text>
                  {dados.onibus.length}
                </Text>
                {dados.onibus.length !== 0 && (
                  <Text style={styles.subtitle}>
                    Ônibus:{" "}
                    {dados.onibus.map((van, i) => (
                      <Text style={styles.paragrafo} key={i}>
                        {van}
                        {i < dados.onibus.length - 1 && ", "}
                      </Text>
                    ))}
                  </Text>
                )}
              </View>
            </View>

            <View style={styles.divLine}>
              <View style={styles.divColumn}>
                <Text style={styles.italic}>Outras informações:</Text>

                <Text style={styles.paragrafo}>
                  <Text style={styles.subtitle}>Endereço: </Text>
                  {dados.endereco[0]}, {dados.endereco[1]} - {dados.endereco[2]}
                  , {dados.endereco[3]} / {dados.endereco[4]}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
