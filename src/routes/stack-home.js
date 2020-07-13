import { createStackNavigator } from "react-navigation-stack";

import { Main, Profile } from "../pages";

//Cria as rotas das páginas a partir da Inicial
const StackHome = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        title: "Encontre uma Van",
      },
    },

    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "Informações",
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

export default StackHome;
