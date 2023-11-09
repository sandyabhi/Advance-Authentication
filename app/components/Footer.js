import { View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        padding: 30,
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Icon name="home" size={30} color="#51b0d7" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Icon name="user" size={30} color="#51b0d7" />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
