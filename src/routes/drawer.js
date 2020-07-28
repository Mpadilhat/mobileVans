import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import StackHome from "./stack-home";
import StackPerfil from "./stack-perfil";
import BottomDevs from "./bottom-devs";
import { icons } from "../assets";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  head: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: 400,
    backgroundColor: "rgba(0, 0, 0, 0.99)",
    textAlign: "center",
    paddingTop: 45,
  },
  divImg: {
    height: 152,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  img: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 75,
  },
  divText: {
    marginTop: -25,
    borderWidth: 1,
    borderColor: "black",
    paddingLeft: 13.5,
  },
  desc: {
    color: "white",
  },
});

const CustomDrawer = (props) => {
  return (
    <View style={styles.head}>
      <View style={styles.divImg}>
        <Image style={styles.img} source={icons.logo} />
      </View>
      <View style={styles.divText}>
        <Text style={styles.desc}>Descrição</Text>
      </View>
      <View>
        <DrawerItems
          {...props}
          activeTintColor="#FAD246"
          inactiveTintColor="white"
        />
      </View>
    </View>
  );
};

//Rotas dentro do menu lateral
const Drawer = createDrawerNavigator(
  {
    Desenvolvedores: BottomDevs,
    Home: StackHome,
    Perfil: StackPerfil,
  },
  {
    initialRouteName: "Home",
    drawerBackgroundColor: "#FAD246",
    contentComponent: CustomDrawer,
  }
);

export default Drawer;
