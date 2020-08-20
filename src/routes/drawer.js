import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerItems,
  drawerIcon,
} from "react-navigation-drawer";
import StackHome from "./stack-home";
import StackPerfil from "./stack-perfil";
import BottomDevs from "./bottom-devs";
import { icons } from "../assets";
import { MaterialIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  head: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "100%",
    height: 500,
    backgroundColor: "rgba(0, 0, 0, 0.99)",
    textAlign: "center",
    // paddingTop: 45,
  },
  divImg: {
    height: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  img: {
    width: 187.5,
    height: 248.5,
  },
  line: {
    width: "100%",
    height: 1.5,
    backgroundColor: "#FAD246",
  },
});

const CustomDrawer = (props) => {
  return (
    <View style={styles.head}>
      <View style={styles.divImg}>
        <Image style={styles.img} source={icons.logoBranco} />
      </View>
      <View>
        <View style={styles.line} />
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
    Home: {
      screen: StackHome,
      navigationOptions: {
        drawerIcon: <MaterialIcons name="home" size={25} color="#fff" />,
      },
    },
    Desenvolvedores: {
      screen: BottomDevs,
      navigationOptions: {
        drawerIcon: <MaterialIcons name="computer" size={25} color="#fff" />,
      },
    },
    Perfil: {
      screen: StackPerfil,
      navigationOptions: {
        drawerLabel: "Sobre",
        drawerIcon: <MaterialIcons name="help" size={25} color="#fff" />,
      },
    },
  },
  {
    initialRouteName: "Home",
    drawerBackgroundColor: "#FAD246",
    contentComponent: CustomDrawer,
  }
);

export default Drawer;
