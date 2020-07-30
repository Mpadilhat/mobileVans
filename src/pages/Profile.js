import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { icons } from "../assets";

// import { WebView } from "react-native-webview";

export default function Profile({ navigation }) {
  // const github_username = navigation.getParam('github_username');
  // const github_username = "Mpadilhat";

  return (
    // <WebView
    //   style={{ flex: 1 }}
    //   source={{ uri: `https://github.com/${github_username}` }}
    // />
    <View style={styles.content}>
      <View style={styles.head}>
        <Text style={styles.title}>Sobre o </Text>
        <Image style={styles.imgMinhaVan} source={icons.minhavan} />
      </View>
      <Text style={styles.paragrafo}>
        Este aplicativo foi desenvolvido no ano de 2020, no qual vivemos um
        período atípico, em que as pessoas deveriam evitar ao máximo estarem
        juntas em um mesmo ambiente.{" "}
      </Text>
      <Text style={styles.paragrafo}>
        Por conta disso, esse App foi criado de forma totalmente remota, por
        mim, Maria Eduarda Kovalski, e pelo meu colega, Marcos Padilha. O Minha
        Van nasceu durante o 4º ano do Curso Técnico em Informática, apresentado
        como Trabalho de Conclusão de Curso do IFSul Câmpus Sapiranga e tem como
        objetivo dar visibilidade às empresas de transporte e, ao mesmo tempo,
        oferecer mais opções de escolha aos usuários, em especial, alunos.
      </Text>
      <Text style={styles.paragrafo}>
        Esperamos que o Minha Van seja útil para você!
      </Text>
      <View style={styles.viewImg}>
        <Image style={styles.imgMenina} source={icons.menina} />
        <Image style={styles.imgMenino} source={icons.menino} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
    height: "100%",
  },
  head: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    fontSize: 50,

    fontWeight: "bold",
  },
  imgMinhaVan: {
    height: 50,
    width: 250,
  },
  paragrafo: {
    fontSize: 18,
    textAlign: "justify",
  },
  viewImg: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imgMenino: {
    height: 200,
    width: 200,
  },
  imgMenina: {
    height: 250,
    width: 250,
  },
});
