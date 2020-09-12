import React from "react";
import { styles } from "./styles/styles-info";
import { Image, View, Text, ScrollView } from "react-native";
import { icons } from "../assets";

export default function Info() {
  return (
    <ScrollView>
      <View style={styles.content}>
        <View style={styles.head}>
          <Text style={styles.title}>Sobre o </Text>
          <Image style={styles.imgMinhaVan} source={icons.minhavan} />
        </View>
        <Text style={styles.paragrafo}>
          Este aplicativo foi desenvolvido no ano de 2020, no qual vivemos um
          período atípico, em que as pessoas deveriam evitar ao máximo estarem
          juntas em um mesmo ambiente. Por conta disso, esse App foi criado de
          forma totalmente remota, por mim, Maria Eduarda Kovalski, e pelo meu
          colega, Marcos Padilha.
        </Text>
        <Text style={styles.paragrafo}>
          O Minha Van nasceu durante o 4º ano do Curso Técnico em Informática,
          apresentado como Trabalho de Conclusão de Curso do IFSul Câmpus
          Sapiranga e tem como objetivo dar visibilidade às empresas de
          transporte e, ao mesmo tempo, oferecer mais opções de escolha aos
          usuários, em especial, alunos.
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
