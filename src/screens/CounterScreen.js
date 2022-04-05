import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");
  const onHandleIncrease = () => {
    setCounter(counter + 1);
  };
  const onHandleDecrease = () => {
    setCounter(counter - 1);
  };
  return (
    <View>
      <Button title="Increase" onPress={onHandleIncrease} />
      <Button title="Decrease" onPress={onHandleDecrease} />
      <Text>Current Count: {counter}</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <Text>My Input: {text}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  textInput: {
    margin: 15,
    borderWidth: 2,
    borderColor: "black",
  },
});
