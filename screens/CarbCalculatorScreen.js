import React, { useState } from "react";

import { StyleSheet, Text, View, Alert } from "react-native";

import NumericInput from "../components/NumericInput";
import Card from "../components/Card";

export default function CarbCalculatorScreen() {
  const [foodChContentIn100g, setFoodChContentIn100g] = useState(0);
  const [AmountOfChToEat, setAmountOfChToEat] = useState(1);

  const foodChContentIn100gInputHandler = (inputText) => {
    let input = inputText; //inputText.replace(/[^0-9]/g, '')
    console.log("Validating " + input);
    if (input < 0) {
      setFoodChContentIn100g("0");
      Alert.alert(
        "I don't think it is possible honey",
        "It cannot be under 0",
        [{ text: "Okay... sorry" }]
      );
      return;
    } else if (input > 100) {
      setFoodChContentIn100g("100");
      Alert.alert(
        "I don't think it is possible honey",
        "It cannot be over 100",
        [{ text: "Okay... sorry" }]
      );
      return;
    } else {
      setFoodChContentIn100g(input);
    }
  };

  const amountOfChToEatInputHandler = (inputText) => {
    let input = inputText; // inputText.replace(/[^0-9]/g, '')
    console.log("Validating " + input);
    if (input < 0) {
      setAmountOfChToEat(1);
      Alert.alert(
        "I don't think it is possible honey",
        "It cannot be under 0",
        [{ text: "Okay... sorry" }]
      );
      return;
    }
    setAmountOfChToEat(input);
  };

  let userFeedbackAboutFoodVolume;

  if (AmountOfChToEat > 0 && foodChContentIn100g > 0) {
    let amountOfFoodThatContainsTheDesiredAmountOfCh;
    amountOfFoodThatContainsTheDesiredAmountOfCh = (
      (100 * AmountOfChToEat) /
      foodChContentIn100g
    ).toFixed(1);
    userFeedbackAboutFoodVolume = (
      <Card style={styles.resultCard}>
        <Text>
          Then you will have to eat{" "}
          {amountOfFoodThatContainsTheDesiredAmountOfCh} g from that to consume{" "}
          {AmountOfChToEat}g CH
        </Text>
      </Card>
    );
  }

  return (
    <View style={styles.screen} contentContainerStyle={styles.contentContainer}>
      <View style={styles.subheader}>
        <Text style={{ fontSize: 30 }}> Normal Carb calculator</Text>
      </View>
      <View style={styles.container}>
        <Text>The food contains </Text>
        <View style={styles.inputContainer}>
          <NumericInput
            style={styles.inputField}
            blurOnSubmit
            keyboardType="number-pad"
            onChangeText={foodChContentIn100gInputHandler}
            value={foodChContentIn100g}
          />
          <Text>g CH / 100g</Text>
        </View>
        <View>
          <Text>
            Based on your input, there is {foodChContentIn100g}g CH in the food
            / 100g.{" "}
          </Text>
        </View>
        <View>
          <View style={styles.inputContainer}>
            <Text> I want to eat </Text>
            <NumericInput
              style={styles.inputField}
              blurOnSubmit
              autoCapitalize="none"
              keyboardType="number-pad"
              onChangeText={amountOfChToEatInputHandler}
              value={AmountOfChToEat}
            />
            <Text>g Carbs</Text>
          </View>
        </View>

        {userFeedbackAboutFoodVolume}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#fae1f5",
    borderRadius: 20,
    height: 100,
    marginVertical: 20,
  },
  resultCard: {
    marginTop: 40,
    borderWidth: 3,
    borderColor: "#fae1f5",
  },
  highlightedText: {},
  inputField: {
    flex: 1,
    width: "90%",
    height: 120,
  },
  container: {},
  screen: {
    height: "100%",
    padding: 40,
    backgroundColor: "#f5d3ef",
  },
  subheader: {
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    marginBottom: 20,
  },
});
