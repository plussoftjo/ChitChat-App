import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 500,
          width: "100%",
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Edited From main origin</Text>
        <FastImage
          style={{ width: 200, height: 200 }}
          source={{
            uri: "https://unsplash.it/400/400?image=1",
            headers: { Authorization: "someAuthToken" },
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
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
