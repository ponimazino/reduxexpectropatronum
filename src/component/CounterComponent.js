import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../actions/actions";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const CounterComponent = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.countText}>Count: {count}</Text>
            <TouchableOpacity style={styles.button} onPress={() => dispatch(increment())}>
                <Text style={styles.buttonText}>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => dispatch(decrement())}>
                <Text style={styles.buttonText}>Decrement</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    countText: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
});

export default CounterComponent;
