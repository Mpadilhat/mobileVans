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
const BottomDevs = createBottomTabNavigator(
  {
    Marcos: {
      screen: StackMarcos,
      navigationOptions: {
        tabBarLabel: "Marcos",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={icons.menino}
            resizeMode="contain"
            style={{ width: 50, height: 50, marginBottom: 15 }}
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
            style={{ width: 60, height: 60, marginBottom: 15 }}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      style: {
        height: 60,
        padding: 5,
        backgroundColor: "#f5f5f5",
      },

      labelStyle: {
        fontSize: 17,
        fontWeight: "bold",
        fontStyle: "italic",
      },
    },
  }
);

export default BottomDevs;
