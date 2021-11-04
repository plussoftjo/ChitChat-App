import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 500,
          width: "100%",
          backgroundColor: "yellow",
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1, backgroundColor: "black" }}>
          <Text style={{ color: "red" }}>Hello </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "red" }}>
          <Text style={{ color: "white" }}>World</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
