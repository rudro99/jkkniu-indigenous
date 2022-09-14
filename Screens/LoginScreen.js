import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button } from "@rneui/base";
import { Input } from "@rneui/base";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLogin } from "../Components/LoginProvider";

const LoginScreen = ({ navigation }) => {
  const { setisLoggedin } = useLogin();
  const { setcurrentuser } = useLogin();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.login}>
          <Text style={styles.label}>Email:</Text>
          <Input
            placeholder="Email"
            leftIcon={<AntDesign name="user" size={24} color="black" />}
            onChangeText={(input) => {
              setemail(input);
            }}
          />

          <Text style={styles.label}>Password:</Text>
          <Input
            placeholder="Password"
            secureTextEntry={true}
            leftIcon={
              <MaterialCommunityIcons
                name="form-textbox-password"
                size={24}
                color="black"
              />
            }
            onChangeText={(input) => {
              setpassword(input);
            }}
          />

          <Button
            title="Login"
            size="lg"
            color={"#009387"}
            onPress={() => {
              const auth = getAuth();
              signInWithEmailAndPassword(auth, email, password)
                .then((userCreds) => {
                  setcurrentuser(userCreds);
                  setisLoggedin(true);
                })
                .catch((error) => {
                  alert(error);
                });
            }}
          ></Button>
          <View style={styles.button}>
            <Button
              title="Don't have an account?"
              size="lg"
              color={"#009387"}
              type="outline"
              onPress={() => navigation.navigate("Sign Up")}
            ></Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
  },
  login: {
    marginHorizontal: 20,
    marginVertical: 50,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  label: {
    fontSize: 18,
    marginLeft: 10,
  },
  button: { paddingVertical: 5 },
});
