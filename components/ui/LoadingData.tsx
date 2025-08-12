import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

function LoadingData() {
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" />
      <Text>Memuat data...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default LoadingData;
