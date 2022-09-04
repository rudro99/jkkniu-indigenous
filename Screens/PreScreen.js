import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
const PreScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.footer}>
        <Text style={styles.title}>Stay connect with everyone!</Text>
        <Text style={styles.text}>Sign in with an account</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttom}>Get start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    height: 40,
    width: 150,
    backgroundColor: "#009387",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  buttom: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
