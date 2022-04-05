import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  const onHandleIncrease = () => {
    setCounter(counter + 1);
  };
  const onHandleDecrease = () => {
    setCounter(counter--);
  };
  return (
    <View>
      <Button title="Increase" onPress={onHandleIncrease} />
      <Button title="Decrease" onPress={onHandleDecrease} />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
