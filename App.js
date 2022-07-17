import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/LoginPage';
import Main from './components/Main';
import Navbar from './components/Navbar';
import SignUp from './components/SignUpPage';
import ForgotPassword from './components/ForgotPassword';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      // <View style={styles.container}>
      //   <Login />
      //   {/* <Main />
      //   <Navbar /> */}
      // </View>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options= {{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options= {{headerShown: false}} name="SignUp" component={SignUp} />
        <Stack.Screen options= {{headerShown: false}} name="Main" component={Main} />
        <Stack.Screen options= {{headerShown: false}} name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}

