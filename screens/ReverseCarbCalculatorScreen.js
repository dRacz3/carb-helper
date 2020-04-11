import React, { useState } from 'react';

import { StyleSheet, Text, View, Alert } from 'react-native';

import NumericInput from '../components/NumericInput'
import Card from '../components/Card'
import Header from '../components/Header'

export default function ReverseCarbCalculatorScreen() {
    const [foodChContentIn100g, setFoodChContentIn100g] = useState(0)
    const [AmountOfFoodAvailable, setAmountOfFoodAvailable] = useState(1)

    const foodChContentIn100gInputHandler = (inputText) => {
        let input = inputText //inputText.replace(/[^0-9]/g, '')
        console.log('Validating ' + input)
        if (input < 0) {
            setFoodChContentIn100g('0');
            Alert.alert('I don\'t think it is possible honey', 'It cannot be under 0', [{ text: 'Okay... sorry' }])
            return;
        } else if (input > 100) {
            setFoodChContentIn100g('100');
            Alert.alert('I don\'t think it is possible honey', 'It cannot be over 100', [{ text: 'Okay... sorry. I am a dumb sandwitch' }])
            return;
        }
        else {
            setFoodChContentIn100g(input);
        }
    }

    const amountOfChToEatInputHandler = (inputText) => {
        let input = inputText // inputText.replace(/[^0-9]/g, '')
        console.log('Validating ' + input)
        if (input < 0) {
            setAmountOfFoodAvailable(1);
            Alert.alert('I don\'t think it is possible honey', 'It cannot be under 0', [{ text: 'Okay... sorry' }])
            return;
        }
        setAmountOfFoodAvailable(input);
    }


    let userFeedbackAboutFoodVolume;

    if (AmountOfFoodAvailable > 0 && foodChContentIn100g > 0) {
        let amountOfCHInFoodPortion;
        amountOfCHInFoodPortion = (foodChContentIn100g * AmountOfFoodAvailable / 100).toFixed(1);
        userFeedbackAboutFoodVolume = <Card
            style={styles.resultCard}>
            <Text>
                That food will have a total of {amountOfCHInFoodPortion} g CH in {AmountOfFoodAvailable}g of that food type.
         </Text>
        </Card>
    }

    return (
      <View
        style={styles.screen}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.subheader}>
          <Text style={ {fontSize : 30}}> Reverse Carb calculator</Text>
        </View>
        <Text style={styles.highlightedText}>The food contains </Text>
        <View style={styles.inputContainer}>
          <NumericInput
            style={styles.inputField}
            blurOnSubmit
            keyboardType="number-pad"
            onChangeText={foodChContentIn100gInputHandler}
            value={foodChContentIn100g}
          />
          <Text style={styles.highlightedText}>g CH / 100g</Text>
        </View>
        <View>
          <Text style={styles.highlightedText}>
            Based on your input, there is {foodChContentIn100g}g CH in the food
            / 100g.{" "}
          </Text>
        </View>
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.highlightedText}> You have </Text>
            <NumericInput
              style={styles.inputField}
              blurOnSubmit
              autoCapitalize="none"
              keyboardType="number-pad"
              onChangeText={amountOfChToEatInputHandler}
              value={AmountOfFoodAvailable}
            />
            <Text style={styles.highlightedText}>
              {" "}
              g available from that food
            </Text>
          </View>
        </View>

        {userFeedbackAboutFoodVolume}
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
    borderWidth : 2,
    alignItems : 'center',
    marginBottom : 20
  },
});
