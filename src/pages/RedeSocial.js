import React from "react";
import { WebView } from "react-native-webview";

export default function RedeSocial({ navigation }) {
  const url = navigation.getParam("url");

  return <WebView style={{ flex: 1 }} source={{ uri: url }} />;
}
