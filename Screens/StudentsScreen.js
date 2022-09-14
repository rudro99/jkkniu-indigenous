import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../App";
const Width = Dimensions.get("window").width;

const StudentsScreen = () => {
  const [details, setDetails] = useState([]);

  const userData = async () => {
    const q = query(collection(db, "student info"));

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      // doc.data() is never undefined for query doc snapshots
      ...doc.data(),
      id: doc.id,
    }));
    setDetails(data);
  };
  useEffect(() => {
    userData();
  }, []);

  return (
    <View style={{ alignItems: "center" }}>
      <View>
        <Text style={{ fontSize: 30, color: "#009387" }}>
          Students Information
        </Text>
        <View
          style={{ borderWidth: 3, borderColor: "#009387", marginBottom: 20 }}
        ></View>
      </View>
      <FlatList
        data={details}
        // keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "column",
              width: Width - 20,
              backgroundColor: "skyblue",
              borderWidth: 1,
              marginBottom: 5,
              paddingLeft: 20,
              paddingVertical: 5,
            }}
          >
            <View>
              <Text style={{ fontSize: 24 }}>Name :{item.name}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 18 }}>Session :{item.session}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 18 }}>Mobile Number :{item.mobile}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 18 }}>
                Department :{item.department}
              </Text>
            </View>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default StudentsScreen;

const styles = StyleSheet.create({});
