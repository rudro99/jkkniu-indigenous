import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useLogin } from "../Components/LoginProvider";
import { Button, Image, Input } from "@rneui/base";
import logo from "../assets/avatar.png";
import { ScrollView } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../App";

export default function Profile() {
  const [name, setname] = useState("");
  const [Department, setDepartment] = useState("");
  const [mobile, setmobile] = useState("");
  const [gender, setgender] = useState("");
  const [Blood, setblood] = useState("");
  const [Session, setSession] = useState("");
  const [Race, setrace] = useState("");
  const [designation, setdesignation] = useState("");
  const [company, setcompany] = useState("");
  const [location, setlocation] = useState("");
  const { currentuser } = useLogin();
  const docRef = doc(db, "student info", currentuser.user.uid);
  const data = {
    name: name,
    department: Department,
    mobile: mobile,
    gender: gender,
    blood: Blood,
    session: Session,
    race: Race,
    designation: designation,
    company: company,
    loctaion: location,
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View style={styles.photo}>
        <View style={{ flex: 2 }}>
          <Image
            source={logo}
            style={{
              width: 180,
              height: 180,
              borderRadius: 90,
              marginHorizontal: 5,
              marginVertical: 2,
            }}
          ></Image>
        </View>
        <View style={{ flex: 2 }}>
          <Input placeholder="Image"></Input>
        </View>
      </View>
      <View style={styles.edit}>
        <ScrollView>
          <Text style={{ textAlign: "center", fontSize: 24, color: "#009387" }}>
            Personal Information
          </Text>
          <View
            style={{
              backgroundColor: "#009387",
              height: 5,
              width: 250,
              alignSelf: "center",
              borderRadius: 5,
            }}
          ></View>
          <Input
            placeholder="Full name"
            onChangeText={(input) => setname(input)}
          ></Input>
          <Input
            placeholder="Department name"
            onChangeText={(input) => setDepartment(input)}
          ></Input>
          <Input
            placeholder="Mobile number"
            onChangeText={(input) => setmobile(input)}
          ></Input>
          <View style={{ borderWidth: 1 }}>
            <Picker
              selectedValue={gender}
              onValueChange={(input) => setgender(input)}
            >
              <Picker.Item label="Gender" value=""></Picker.Item>
              <Picker.Item label="Male" value="male"></Picker.Item>
              <Picker.Item label="Female" value="female"></Picker.Item>
            </Picker>
          </View>
          <View style={{ borderWidth: 1 }}>
            <Picker
              selectedValue={Blood}
              onValueChange={(input) => setblood(input)}
            >
              <Picker.Item label="Blood Group" value="Garo"></Picker.Item>
              <Picker.Item label="O positive" value="O positive"></Picker.Item>
              <Picker.Item label="O negative" value="O negative"></Picker.Item>
              <Picker.Item label="A positive" value="A positive"></Picker.Item>
              <Picker.Item label="A negative" value="A negative"></Picker.Item>
              <Picker.Item label="B positive" value="B positive"></Picker.Item>
              <Picker.Item label="B negative" value="B negative"></Picker.Item>
              <Picker.Item
                label="AB positive"
                value="AB positive"
              ></Picker.Item>
              <Picker.Item
                label="AB negative"
                value="AB negative"
              ></Picker.Item>
              <Picker.Item label="Unknown" value="Unknown"></Picker.Item>
            </Picker>
          </View>
          <View style={{ borderWidth: 1 }}>
            <Picker
              selectedValue={Session}
              onValueChange={(input) => setSession(input)}
            >
              <Picker.Item label="Session" value=""></Picker.Item>
              <Picker.Item label="2006-7" value="2006-7"></Picker.Item>
              <Picker.Item label="2007-8" value="2007-8"></Picker.Item>
              <Picker.Item label="2008-9" value="2008-9"></Picker.Item>
              <Picker.Item label="2009-10" value="2009-10"></Picker.Item>
              <Picker.Item label="2010-11" value="2010-11"></Picker.Item>
              <Picker.Item label="2011-12" value="2011-12"></Picker.Item>
              <Picker.Item label="2012-13" value="2012-13"></Picker.Item>
              <Picker.Item label="2013-14" value="2013-14"></Picker.Item>
              <Picker.Item label="2014-15" value="2014-15"></Picker.Item>
              <Picker.Item label="2015-16" value="2015-16"></Picker.Item>
              <Picker.Item label="2016-17" value="2016-17"></Picker.Item>
              <Picker.Item label="2017-18" value="2017-18"></Picker.Item>
              <Picker.Item label="2018-19" value="2018-19"></Picker.Item>
              <Picker.Item label="2019-20" value="2019-20"></Picker.Item>
              <Picker.Item label="2020-21" value="2020-21"></Picker.Item>
              <Picker.Item label="2021-22" value="2021-22"></Picker.Item>
              <Picker.Item label="2022-23" value="2022-23"></Picker.Item>
            </Picker>
          </View>
          <View style={{ borderWidth: 1 }}>
            <Picker
              selectedValue={Race}
              onValueChange={(input) => setrace(input)}
            >
              <Picker.Item label="Race" value=""></Picker.Item>
              <Picker.Item label="Garo" value="Garo"></Picker.Item>
              <Picker.Item label="Chakam" value="Chakam"></Picker.Item>
              <Picker.Item label="Marma" value="Marma"></Picker.Item>
              <Picker.Item label="Tripura" value="Tripura"></Picker.Item>
              <Picker.Item label="Hajong" value="Hajong"></Picker.Item>
              <Picker.Item label="Rakhain" value="Rakhain"></Picker.Item>
              <Picker.Item label="Others" value="Others"></Picker.Item>
            </Picker>
          </View>
          <Text style={{ textAlign: "center", fontSize: 24, color: "#009387" }}>
            Job Information
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
          <Input
            placeholder="Job designation"
            onChangeText={(input) => setdesignation(input)}
          ></Input>
          <Input
            placeholder="Company name"
            onChangeText={(input) => setcompany(input)}
          ></Input>
          <Input
            placeholder="Job location"
            onChangeText={(input) => setlocation(input)}
          ></Input>
          <Button
            size="lg"
            color="secondary"
            onPress={() => {
              if (
                name &&
                Department &&
                mobile &&
                gender &&
                Blood &&
                Session &&
                Race
              ) {
                setDoc(docRef, data).then(() => {
                  alert("Profile updated successfully");
                });
              } else {
                alert("Fill all feilds");
              }
            }}
          >
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Update Profile
            </Text>
          </Button>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    flex: 1,
    backgroundColor: "#009387",
    width: "100%",
    flexDirection: "row",
  },
  edit: {
    flex: 3,
    backgroundColor: "white",
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
