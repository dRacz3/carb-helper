import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const Card = (props) => {
    return (
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        elevation: 5,
        padding: 20,
        borderRadius: 20,
        backgroundColor: 'white'
    },
});

export default Card;
