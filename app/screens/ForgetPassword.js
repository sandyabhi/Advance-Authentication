import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../context/action";

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const { loading } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const forgetHandler = async () => {
    await dispatch(forgetPassword(email));
    navigation.navigate("ResetPassword");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F5F5F5",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 20, margin: 20 }}>WELCOME</Text>
      <View style={{ width: "70%" }}>
        <TextInput
          style={Styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <Button
        style={Styles.btn}
        onPress={forgetHandler}
        disabled={loading}
        loading={loading}
      >
        <Text style={{ color: "#fff" }}>Send Email</Text>
      </Button>
    </View>
  );
};

const Styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#b5b5b5",
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5,
    marginVertical: 15,
    fontSize: 15,
  },

  btn: {
    backgroundColor: "#51b0d7",
    color: "#fff",
    padding: 5,
    width: "70%",
  },
});

export default ForgetPassword;
