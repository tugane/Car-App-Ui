import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import SPACING from "./app/config/SPACING";
import colors from "./app/config/colors";
import HomeScreen from "./app/screens/HomeScreen";
import CompanyScreen from "./app/screens/CompanyScreen";

const App = () => {
  return (
    <View
      style={{
        paddingHorizontal: SPACING * 2,
        flex: 1,
        backgroundColor: colors.black,
      }}
    >
      <HomeScreen />
      {/* <CompanyScreen /> */}
      <StatusBar barStyle="light-content" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
