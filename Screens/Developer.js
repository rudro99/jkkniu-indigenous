import { StyleSheet, Text, View } from "react-native";
import React from "react";
import logo from "../assets/rudro.jpg";
import { Image } from "@rneui/base";
export default function Developer() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#009387" }}>
        <Text>About this app developer</Text>
      </View>
      <View style={{ flex: 3, backgroundColor: "#sC9E4E7" }}>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Image
            source={logo}
            style={{
              width: 300,
              height: 300,
              borderRadius: 150,
              borderWidth: 5,
              borderColor: "#009387",
            }}
          ></Image>
        </View>
        <View style={{ marginLeft: 40, marginTop: 10 }}>
          <Text style={{ fontSize: 30, color: "#009387" }}>
            Rudro Aditto Pantra
          </Text>
          <View
            style={{
              borderWidth: 3,
              marginRight: 85,
              borderColor: "#009387",
            }}
          ></View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: 110 }}>
              <Text style={{ fontSize: 18, color: "#009387" }}>Session </Text>
            </View>
            <View style={{ width: 100 }}>
              <Text style={{ fontSize: 18 }}>: 2018-19</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: 110 }}>
              <Text style={{ fontSize: 18, color: "#009387" }}>Contact </Text>
            </View>
            <View style={{ width: 150 }}>
              <Text style={{ fontSize: 18 }}>: 01855303972</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: 110 }}>
              <Text style={{ fontSize: 18, color: "#009387" }}>
                Department{" "}
              </Text>
            </View>
            <View style={{ width: 250 }}>
              <Text style={{ fontSize: 18 }}>
                : Computer Science and Engineering
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
