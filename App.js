import React, { useState } from "react";
import { StyleSheet, Text, View,Button } from 'react-native';

import CarbCalculatorScreen from './screens/CarbCalculatorScreen'
import ReverseCarbCalculatorScreen from './screens/ReverseCarbCalculatorScreen'

import Header from './components/Header'
import Colors from "./constants/Colors";

export default function App() {
const [activeScreen, setActiveScreen] = useState("CarbCalculator");



let activeScreenView;

if(activeScreen === "CarbCalculator")
{
  activeScreenView = <CarbCalculatorScreen></CarbCalculatorScreen>;
}
else if (activeScreen === "ReverseCalculator") {
  activeScreenView = <ReverseCarbCalculatorScreen></ReverseCarbCalculatorScreen>;
}

  return (
    <View>
      <Header title="Carb calculator">
        <View style={styles.headerButtonView}>
          <Button style={styles.headerButton} color={Colors.primary} title="Normal" onPress={() => {
            setActiveScreen("CarbCalculator")
          }}></Button>
          <Button style={styles.headerButton} color={Colors.accent} title="Reverse" onPress={() => {
            setActiveScreen("ReverseCalculator")
          }}></Button>
        </View>
      </Header>

      {activeScreenView}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-evenly",
  },

  headerButtonView: {
    flexDirection: "row",
    flex: 1,
    alignContent: "space-between",
    alignItems: "stretch",
    justifyContent: "center",
  },
  headerButton: {
    color: Colors.accent,
    alignContent:'center',
    textAlign : "center"
  },
});
