import { createStackNavigator } from "react-navigation-stack";
import { Profile } from "../pages";

//Cria as rotas das páginas a partir da Perfil
const StackPerfil = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "Perfil da empresa",
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

export default StackPerfil;
