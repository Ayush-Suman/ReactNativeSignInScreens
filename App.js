/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import StartScreen from "./src/view/StartScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import PhoneLoginScreen from "./src/view/PhoneLoginScreen";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import EmailLoginScreen from "./src/view/EmailLoginScreen";
import OTPVerificationScreen from "./src/view/OTPVerificationScreen";
import ForgotPasswordScreen from "./src/view/ForgotPasswordScreen";

const Stack = createNativeStackNavigator();
const options = {headerShown: false};

const App: () => Node = () => {
  return (
      <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Start">
              <Stack.Screen name="Start" component={StartScreen} options={options}/>
              <Stack.Screen name="PhoneLogin" component={PhoneLoginScreen} options={options}/>
              <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} options={options}/>
              <Stack.Screen name="EmailLogin" component={EmailLoginScreen} options={options}/>
              <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={options}/>
          </Stack.Navigator>
      </NavigationContainer>
      </GestureHandlerRootView>
  );
}

export default App;
