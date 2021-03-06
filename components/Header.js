import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 120,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
});

export default Header;
