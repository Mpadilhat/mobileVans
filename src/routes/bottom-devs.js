import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Marcos, Maria } from "../pages";

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
    },
  },
  Maria: {
    screen: StackMaria,
    navigationOptions: {
      tabBarLabel: "Maria",
    },
  },
});

export default BottomDevs;
