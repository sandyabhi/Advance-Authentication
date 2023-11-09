import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { loadUser, verify } from "../context/action";

const Verify = () => {
  const [otp, setOtp] = useState();

  const dispatch = useDispatch();

  const verifyHandler = async () => {
    await dispatch(verify(otp));
    dispatch(loadUser());
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
      <Text style={{ fontSize: 20, margin: 20 }}>Verification</Text>
      <View style={{ width: "70%" }}>
        <TextInput
          style={Styles.input}
          placeholder="OTP"
          value={otp}
          onChangeText={setOtp}
          keyboardType="number-pad"
        />
      </View>

      <Button style={Styles.btn} textColor="#fff" onPress={verifyHandler}>
        Verify
      </Button>
    </View>
  );
};

export default Verify;

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
    padding: 5,
    width: "70%",
  },
});
