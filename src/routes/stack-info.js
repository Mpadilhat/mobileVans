import { createStackNavigator } from "react-navigation-stack";
import { Info } from "../pages";

//Cria as rotas das páginas a partir da Perfil
const StackInfo = createStackNavigator(
  {
    Info: {
      screen: Info,
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

export default StackInfo;
