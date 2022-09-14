import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../App";
const Width = Dimensions.get("window").width;

const Bloodscreen = () => {
  const [details, setDetails] = useState([]);

  const userData = async () => {
    const q = query(collection(db, "student info"));

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
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
          Blood Information
        </Text>
        <View
          style={{ borderWidth: 3, borderColor: "#009387", marginBottom: 20 }}
        ></View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: Width - 20,
          backgroundColor: "yellow",
          borderWidth: 1,
          marginBottom: 5,
          paddingLeft: 5,
          paddingVertical: 5,
        }}
      >
        <View>
          <Text style={{ width: (2 * Width) / 5, fontSize: 15 }}>Name</Text>
        </View>
        <View>
          <Text style={{ width: (1.3 * Width) / 5, fontSize: 15 }}>Group</Text>
        </View>
        <View>
          <Text style={{ width: (1.7 * Width) / 5, fontSize: 15 }}>Mobile</Text>
        </View>
      </View>

      <FlatList
        data={details}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              width: Width - 20,
              backgroundColor: "skyblue",
              borderWidth: 1,
              marginBottom: 5,
              paddingLeft: 5,
              paddingVertical: 5,
            }}
          >
            <View>
              <Text style={{ width: (2 * Width) / 5, fontSize: 15 }}>
                {item.name}
              </Text>
            </View>
            <View>
              <View>
                <Text style={{ width: (1.3 * Width) / 5, fontSize: 15 }}>
                  {item.blood}
                </Text>
              </View>
            </View>
            <View>
              <Text style={{ width: (1.7 * Width) / 5, fontSize: 15 }}>
                {item.mobile}
              </Text>
            </View>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default Bloodscreen;

const styles = StyleSheet.create({});
