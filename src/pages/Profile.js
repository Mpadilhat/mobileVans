import React from "react";
import { StyleSheet, Image, View, Text, ScrollView } from "react-native";
import { icons } from "../assets";

// import { WebView } from "react-native-webview";

export default function Profile({ navigation }) {
  // const github_username = navigation.getParam('github_username')..;
  const github_username = "Mpadilhat";

  return (
    // <WebView
    //   style={{ flex: 1 }}
    //   source={{ uri: `https://github.com/${github_username}` }}
    // />
    <ScrollView>
      <View style={styles.content}>
        <View style={styles.head}>
          <Text style={styles.title}>Sobre o </Text>
          <Image style={styles.imgMinhaVan} source={icons.minhavan} />
        </View>
        <Text style={styles.paragrafo}>Teste</Text>
        <Text style={styles.paragrafo}>Teste</Text>
        <Text style={styles.center}>
          Esperamos que o Minha Van seja útil para você!
        </Text>

        <View style={styles.viewImg}>
          <Image style={styles.imgMenina} source={icons.menina} />
          <Image style={styles.imgMenino} source={icons.menino} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    height: "100%",
  },
  head: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 0,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  imgMinhaVan: {
    height: 30,
    width: 150,
  },
  paragrafo: {
    fontSize: 20,
    textAlign: "justify",
  },
  center: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
  viewImg: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imgMenino: {
    height: 120,
    width: 120,
  },
  imgMenina: {
    height: 150,
    width: 150,
  },
});
