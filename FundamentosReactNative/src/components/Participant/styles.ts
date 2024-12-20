import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1f1e25",
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  participant: {
    flex: 1,
    fontSize: 16,
    color: "#FFF",
    marginLeft: 16,
  },
  button: {
    height: 56,
    width: 56,
    backgroundColor: "#E23C44",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
});
