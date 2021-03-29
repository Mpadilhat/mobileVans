import { createStackNavigator } from "react-navigation-stack";

import { Main, Profile, RedeSocial } from "../pages";

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
        title: "Perfil da empresa",
      },
    },
    RedeSocial: {
      screen: RedeSocial,
      navigationOptions: {
        title: "Rede social da empresa",
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
