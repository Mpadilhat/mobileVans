import React from "react";
import Routes from "./src/routes/routes";
import { YellowBox } from "react-native";

//Ignora avisos com esse início
YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

export default function App() {
  return <Routes />;
}
