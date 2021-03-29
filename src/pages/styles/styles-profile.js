import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    height: "100%",
  },
  divLine: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    marginTop: 20,
  },
  divColumn: {
    display: "flex",
  },
  img: {
    height: 100,
    width: 150,
    borderRadius: 3,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  italic: {
    fontSize: 17,
    textAlign: "justify",
    fontStyle: "italic",
    fontWeight: "bold",
    marginBottom: 10,
    color: "rgba(0, 0, 0, 0.85)",
  },
  subtitle: { fontSize: 15, color: "black" },
  paragrafo: {
    fontSize: 15,
    textAlign: "justify",
    fontWeight: "normal",
    color: "rgba(0, 0, 0, 0.7)",
  },
});
