import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Marcos, Maria } from "../pages";
import { icons } from "../assets";
import { Image } from "react-native";
import React from "react";

const StackMarcos = createStackNavigator(
  {
    Marcos: {
      screen: Marcos,
      navigationOptions: {
        title: "Marcos",
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#FAD246",
      },
    },
  }
);

const StackMaria = createStackNavigator(
  {
    Maria: {
      screen: Maria,
      navigationOptions: {
        title: "Maria",
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#FAD246",
      },
    },
  }
);

//Cria as rotas dos devs
const BottomDevs = createBottomTabNavigator({
  Marcos: {
    screen: StackMarcos,
    navigationOptions: {
      tabBarLabel: "Marcos",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={icons.menino}
          resizeMode="contain"
          style={{ width: 20, height: 20 }}
        />
      ),
    },
  },
  Maria: {
    screen: StackMaria,
    navigationOptions: {
      tabBarLabel: "Maria",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={icons.menina}
          resizeMode="contain"
          style={{ width: 20, height: 20 }}
        />
      ),
    },
  },
});

export default BottomDevs;
