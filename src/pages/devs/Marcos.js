import React from "react";
import { WebView } from "react-native-webview";

export default function Maria() {
  const github_username = "Mpadilhat";

  return (
    <WebView
      style={{ flex: 1 }}
      source={{ uri: `https://github.com/${github_username}` }}
    />
  );
}
