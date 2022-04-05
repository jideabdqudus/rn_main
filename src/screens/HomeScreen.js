import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import ComponentsScreen from "./ComponentScreen";
import ListScreen from "./ListScreen";

const HomeScreen = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
      <Button
        title="Go to List Screen"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to Counter Screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Components")}>
        <Text>Go to Component Screen</Text>
      </TouchableOpacity>
      <Image source={require("../../assets/mountain.jpg" )} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
