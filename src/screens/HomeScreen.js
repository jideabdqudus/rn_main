import React, {Fragment} from 'react';
import { Text, StyleSheet, View } from 'react-native';
// import { View } from 'react-native-web';
import ComponentsScreen from './ComponentScreen';
import ListScreen from './ListScreen';

const HomeScreen = () => {
  return (<View>
  <Text style={styles.text}>Hello World</Text><ComponentsScreen/>
    <ListScreen/>
  </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;