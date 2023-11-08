import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Footer from "../components/Footer";
import Profile from "../screens/Profile";
import Register from "../screens/Register";
import Camera from "../screens/Camera";
import ForgetPassword from "../screens/ForgetPassword";
import ChangePassword from "../screens/ChangePassword";
import ResetPassword from "../screens/ResetPassword";
import Verify from "../screens/Verify";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../context/action";
import { useEffect } from "react";
import Loader from "../components/Loader";

const StackNavigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const Stack = createNativeStackNavigator();

  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  console.log(isAuthenticated);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={isAuthenticated ? "Home" : "Login"}
          >
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Verify"
              component={Verify}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgetPassword"
              component={ForgetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Camera"
              component={Camera}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
          {isAuthenticated && <Footer />}
        </NavigationContainer>
      )}
    </>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
