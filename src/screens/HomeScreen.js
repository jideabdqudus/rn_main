import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentScreen";
import ListScreen from "./ListScreen";

const HomeScreen = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
      <ComponentsScreen />
      <Button
        title="Go to List Screen"
        onPress={() => navigation.navigate("List")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Components")}>
        <Text>Go to Component Screen</Text>
      </TouchableOpacity>
      <ListScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
