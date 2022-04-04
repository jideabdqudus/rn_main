import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const ListScreen = () => {
  const friends = ["bolu", "taiwo", "funmi"];
  return (
    <View>
      <Text>ListScreen</Text>
      <FlatList
        // horizontal={true}
        // showsHorizontalScrollIndicator={false}
        data={friends}
        renderItem={(element) => (
          <Text key={element.index} style={styles.textStyle}>
            {element.item}
          </Text>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
