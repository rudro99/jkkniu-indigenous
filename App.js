import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./Screens/LoginScreen";
import Registration from "./Screens/Registration";
import HomeScreen from "./Screens/HomeScreen";
const mystack = createStackNavigator();
const myswitch = createStackNavigator();
const mydrawer = createDrawerNavigator();
import PreScreen from "./Screens/PreScreen";
import Bloodscreen from "./Screens/Bloodscreen";
import JobScreen from "./Screens/JobScreen";
import StudentsScreen from "./Screens/StudentsScreen";
import DrawerNavigation from "./Screens/DrawerNavigation";
import AboutUs from "./Screens/AboutUs";
import Developer from "./Screens/Developer";
import Profile from "./Screens/Profile";
import { Image } from "@rneui/base";
const HomeStackScreen = () => {
  return (
    <mystack.Navigator>
      <mystack.Screen name="Home" component={HomeScreen}></mystack.Screen>
      <mystack.Screen name="Job" component={JobScreen}></mystack.Screen>
      <mystack.Screen
        name="Student"
        component={StudentsScreen}
      ></mystack.Screen>
      <mystack.Screen name="Blood" component={Bloodscreen}></mystack.Screen>
      <mystack.Screen></mystack.Screen>
    </mystack.Navigator>
  );
};
const DrawerScreen = () => {
  return (
    <mydrawer.Navigator
      drawerContent={(props) => <DrawerNavigation {...props} />}
      screenOptions={{
        // headerShown: false,

        drawerActiveBackgroundColor: "#009387",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: { marginLeft: -20, fontSize: 16 },
      }}
    >
      <mydrawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Image
              source={require("./assets/home-button.png")}
              style={{ width: 40, height: 40 }}
            ></Image>
          ),
        }}
      ></mydrawer.Screen>
      <mydrawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: () => (
            <Image
              source={require("./assets/user.png")}
              style={{ width: 40, height: 40 }}
            ></Image>
          ),
        }}
      ></mydrawer.Screen>

      <mydrawer.Screen
        name="Student"
        component={StudentsScreen}
        options={{
          drawerIcon: () => (
            <Image
              source={require("./assets/male-student.png")}
              style={{ width: 40, height: 40 }}
            ></Image>
          ),
        }}
      ></mydrawer.Screen>
      <mydrawer.Screen
        name="Blood"
        component={Bloodscreen}
        options={{
          drawerIcon: () => (
            <Image
              source={require("./assets/blood-drop.png")}
              style={{ width: 40, height: 40 }}
            ></Image>
          ),
        }}
      ></mydrawer.Screen>
      <mydrawer.Screen
        name="Job"
        component={JobScreen}
        options={{
          drawerIcon: () => (
            <Image
              source={require("./assets/job-search.png")}
              style={{ width: 40, height: 40 }}
            ></Image>
          ),
        }}
      ></mydrawer.Screen>
      <mydrawer.Screen
        name="About us"
        component={AboutUs}
        options={{
          drawerIcon: () => (
            <Image
              source={require("./assets/info.png")}
              style={{ width: 40, height: 40 }}
            ></Image>
          ),
        }}
      ></mydrawer.Screen>

      <mydrawer.Screen
        name="Developer"
        component={Developer}
        options={{
          drawerIcon: () => (
            <Image
              source={require("./assets/coding.png")}
              style={{ width: 40, height: 40 }}
            ></Image>
          ),
        }}
      ></mydrawer.Screen>
    </mydrawer.Navigator>
  );
};
const AuthStackScreen = () => {
  return (
    <myswitch.Navigator>
      <myswitch.Screen
        name="PreScreen"
        component={PreScreen}
        options={{ headerShown: false }}
      ></myswitch.Screen>
      <myswitch.Screen name="Login" component={LoginScreen}></myswitch.Screen>
      <myswitch.Screen
        name="Sign Up"
        component={Registration}
      ></myswitch.Screen>
    </myswitch.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      {/* <AuthStackScreen></AuthStackScreen> */}
      {/* <HomeStackScreen /> */}
      {/* <HomeScreen></HomeScreen> */}
      <DrawerScreen />
    </NavigationContainer>
  );
}
