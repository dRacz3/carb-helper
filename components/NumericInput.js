import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const NumericInput = props => {
    return (
        <TextInput {...props} style={{
            ...styles.input, ...props.style
        }} />);
}

export default NumericInput

const styles = StyleSheet.create({
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'grey',
        maxWidth: '40%',
        height: 50,
        margin: 15,
        borderRadius: 5,
        textAlign: 'center'
    },
});