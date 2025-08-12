import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function ErrorData({
  error,
  handlePress,
}: {
  error: never | string | null;
  handlePress?: ((event: GestureResponderEvent) => void) | undefined;
}) {
  return (
    <View style={styles.center}>
      <Text style={{ color: "red" }}>{error}</Text>
      {handlePress && (
        <TouchableOpacity onPress={handlePress}>
          <Text style={{ color: "blue" }}>Coba Lagi</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default ErrorData;
