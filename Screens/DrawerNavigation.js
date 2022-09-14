import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { DrawerItemList } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useLogin } from "../Components/LoginProvider";

export default function DrawerNavigation(props) {
  const { setisLoggedin } = useLogin();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <ImageBackground
          source={require("../assets/bg.jpg")}
          style={{ padding: 20 }}
        >
          <Image
            source={require("../assets/avatar.png")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          ></Image>
          <Text
            style={{
              color: "white",
              fontSize: 18,
            }}
          >
            User name
          </Text>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <DrawerItemList {...props}></DrawerItemList>
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity
          onPress={() => {
            setisLoggedin(false);
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/log-out.png")}
              style={{ width: 40, height: 40, marginRight: 10 }}
            ></Image>
            <Text style={{ fontSize: 18 }}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
