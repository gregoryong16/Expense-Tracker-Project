import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity, Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
// references : 
// https://blog.codemagic.io/firebase-authentication-using-react-native/
// https://console.firebase.google.com/u/0/project/expensetracker-f6f69/overview

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    return (
      <View>
        <Image source = {require("../assets/Xpense-logo.png")} style = {styles.image}/>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
        </View>

        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        </View>

        <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
          <Text style={styles.sign_up_button}>Not an existing user? Sign Up!</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    image :{
      resizeMode: "contain",
      height: 300,
      width: 300,
    },

    inputView: {
      marginLeft: 50,
      backgroundColor: "#DCDCDC",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    
    TextInput: {
      height: 50,
      width: 200,
      flex: 1,
      padding: 10,
      marginLeft: 10,
    },

    forgot_button: {
      marginLeft:50,
      height: 30,
      backgroundColor: "black",
      width: 200,
      color: "#1b78e4",
      textAlign:"center",
      fontWeight: "bold",
      textDecorationLine: "underline",
    },

    loginBtn:{
      marginLeft:30,
      width:250,
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop: 20,
      backgroundColor:"#e1ab1e",
    },

    sign_up_button:{
      marginLeft:50,
      height: 30,
      backgroundColor: "black",
      width: 200,
      color: "#1b78e4",
      textAlign:"center",
      fontWeight: "bold",
      marginTop: 10,
      textDecorationLine: "underline",
    },
  });