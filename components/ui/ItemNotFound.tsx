import React from "react";
import { StyleSheet, Text, View } from "react-native";

function ItemNotFound() {
  return (
    <View style={styles.center}>
      <Text>Data not found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default ItemNotFound;
