import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { Checkbox } from "react-native-paper";
import { useDispatch } from "react-redux";
import { deleteTask, loadUser, updateTask } from "../context/action";

const Task = ({ title, description, status, taskId }) => {
  const dispatch = useDispatch();

  const [completed, setCompleted] = useState(status);

  const handleCheckbox = () => {
    setCompleted(!completed);
    dispatch(updateTask(taskId));
  };

  const deleteHandler = async () => {
    await dispatch(deleteTask(taskId));
    dispatch(loadUser());
  };

  return (
    <View
      style={{
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#fff",
        margin: 5,
      }}
    >
      <View style={{ width: "70%" }}>
        <Text style={{ fontSize: 20, marginVertical: 7, color: "#4ed4b3" }}>
          {title}
        </Text>
        <Text style={{ color: "#4a4a4a" }}>{description}</Text>
      </View>
      <Checkbox
        status={completed ? "checked" : "unchecked"}
        color="#51b0d7"
        onPress={handleCheckbox}
      />
      <Icon
        name="delete"
        color="#fff"
        size={20}
        style={{
          backgroundColor: "#FF5349",
          padding: 10,
          borderRadius: 100,
        }}
        onPress={deleteHandler}
      />
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({});
