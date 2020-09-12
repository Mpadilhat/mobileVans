import React from "react";
import { styles } from "./styles/styles-profile";
import { Image, View, Text, ScrollView } from "react-native";
import { icons } from "../assets";

export default function Profile({ navigation }) {
  const dados = navigation.getParam("dados");

  return (
    <ScrollView>
      <View style={styles.content}>
        <View style={styles.head}>
          <Text style={styles.title}>{dados.empresa}</Text>
          <Image style={styles.imgMinhaVan} source={icons.minhavan} />
        </View>
        <Text style={styles.paragrafo}>{dados.email}</Text>
        <Text style={styles.paragrafo}>
          {dados.endereco[0]}, {dados.endereco[1]} - {dados.endereco[2]}
        </Text>
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
