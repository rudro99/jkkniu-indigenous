import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
} from "react-native";
import React from "react";
import { useState } from "react";
import { Image } from "@rneui/base";
import { TouchableOpacity } from "react-native-gesture-handler";
const images = [
  require("../assets/ind.jpg"),
  require("../assets/ind1.jpg"),
  require("../assets/ind2.jpg"),
];
const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;
const HomeScreen = () => {
  const [imgactive, setimgactive] = useState(0);
  onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgactive) {
        setimgactive(slide);
      }
    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.wrap}>
            <ScrollView
              onScroll={({ nativeEvent }) => onChange(nativeEvent)}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
            >
              {images.map((e, index) => (
                <Image
                  key={e}
                  source={e}
                  resizeMode="stretch"
                  style={{ width: Width, height: 200 }}
                ></Image>
              ))}
            </ScrollView>
            <View style={styles.wrapdot}>
              {images.map((e, index) => (
                <Text
                  key={e}
                  style={imgactive == index ? styles.dotactive : styles.dot}
                >
                  ●
                </Text>
              ))}
            </View>
          </View>
        </SafeAreaView>
        <View>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 30,
              color: "#009387",
              marginTop: 100,
            }}
          >
            Our Services
          </Text>
          <View
            style={{
              backgroundColor: "#009387",
              height: 5,
              width: 200,
              alignSelf: "center",
              borderRadius: 5,
            }}
          ></View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity onPress={() => {}} style={styles.item}>
            <View style={styles.button}>
              <Image
                source={require("../assets/user.png")}
                style={styles.img}
              ></Image>
              <Text style={{ fontSize: 24, color: "white" }}>Students</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.item}>
            <View style={styles.button}>
              <Image
                source={require("../assets/job-search.png")}
                style={styles.img}
              ></Image>
              <Text style={{ fontSize: 24, color: "white" }}>Jobs</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity onPress={() => {}} style={styles.item}>
            <View style={styles.button}>
              <Image
                source={require("../assets/blood-drop.png")}
                style={styles.img}
              ></Image>
              <Text style={{ fontSize: 24, color: "white" }}>Bloods</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.item}>
            <View style={styles.button}>
              <Image
                source={require("../assets/info.png")}
                style={styles.img}
              ></Image>
              <Text style={{ fontSize: 24, color: "white" }}>About Us</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  card: {
    flex: 2,
    flexDirection: "row",
  },
  item: {
    backgroundColor: "#009387",
    height: Height * 0.2,
    width: Width / 2 - 20,
    margin: 1,
    alignContent: "center",
    alignItems: "center",
  },
  button: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 30,
  },
  img: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  slider: {},
  wrap: {
    height: Height * 0.25,
    width: Width,
  },
  container: {
    flex: 2,
  },
  wrapdot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotactive: {
    margin: 3,
    color: "black",
  },
  dot: {
    margin: 3,
    color: "white",
  },
});
