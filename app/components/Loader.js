import { View } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";

const Loader = () => {
  return (
    <View
      style={{
        backgroundColor: "#4ed4b3",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator animating={true} size={100} color="#51b0d7" />
    </View>
  );
};

export default Loader;
