import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Input, Button } from "@rneui/base";
const Registration = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Register Now!</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.regi}>
          <Input placeholder="Your Name"></Input>
          <Input placeholder="University Roll"></Input>
          <Input placeholder="Batch"></Input>
          <Input placeholder="Session"></Input>
          <Input placeholder="Mobile Number"></Input>
          <Input placeholder="Email Adress"></Input>
          <Input placeholder="Password" secureTextEntry={true}></Input>
          <Button title="Register" size="lg" color="#009387"></Button>
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
