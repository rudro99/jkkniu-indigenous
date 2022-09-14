import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Input, Button } from "@rneui/base";
import LoginScreen from "./LoginScreen";
const Registration = ({ navigation }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Register Now!</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.regi}>
          <Input
            placeholder="Email Adress"
            onChangeText={(input) => {
              setemail(input);
            }}
          ></Input>
          <Input
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(input) => {
              setpassword(input);
            }}
          ></Input>
          <Input
            placeholder="Confirm password"
            secureTextEntry={true}
            onChangeText={(input) => {
              setcpassword(input);
            }}
          ></Input>
          <Button
            title="Register"
            size="lg"
            color="#009387"
            onPress={() => {
              const auth = getAuth();
              if (email && password && cpassword) {
                if (password == cpassword) {
                  createUserWithEmailAndPassword(auth, email, password)
                    .then((userCreds) => {
                      alert("Account created successfully");
                      navigation.navigate("Login");
                    })
                    .catch((error) => {
                      alert(error);
                    });
                } else {
                  alert("Enter same password");
                }
              } else {
                alert("Feild can't be empty");
              }
            }}
          ></Button>
        </View>
      </View>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 4,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    marginHorizontal: 10,
    marginVertical: 50,
  },
  regi: {
    marginHorizontal: 20,
    marginVertical: 50,
  },
});
