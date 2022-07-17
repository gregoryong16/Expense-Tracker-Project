import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity, Linking,KeyboardAvoidingView} from 'react-native';
import React, { useState , useEffect} from 'react';
import {auth} from "../firebase";
import {useNavigation} from "@react-navigation/core";
import { createUserWithEmailAndPassword } from 'firebase/auth';
// references : 
// https://www.youtube.com/watch?v=20TSEoJkg5k
// https://www.youtube.com/watch?v=ql4J6SpLXZA

export default function SignUp() {
  const [isSignedIn, setIsSignedIn] =useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation= useNavigation()
  const handleSignUp =() =>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.email)
        setIsSignedIn(true)
        navigation.navigate("Main")
      })
    .catch(error => alert(error.message))
  }
    return (
      <KeyboardAvoidingView style={styles.background} behavior="padding">
        <Image source = {require("../assets/Xpense-logo.png")} style = {styles.image}/>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          value= {email}
          onChangeText={(email) => setEmail(email)}
        />
        </View>

        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          value={password}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        </View>

        <TouchableOpacity onPress ={handleSignUp} style={styles.signUpBtn}>
          <Text style={styles.loginText}>Sign Up!</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.sign_in_button}>Already a user? Sign In!</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
  
  const styles = StyleSheet.create({

    background: {
      backgroundColor: "black",
      height: 600,
      flex: 1,
      alignItems: "center",
    },

    image :{
      resizeMode: "contain",
      height: 300,
      width: 300,
    },

    inputView: {
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
    },

    signUpBtn:{
      width:250,
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop: 20,
      backgroundColor:"#e1ab1e",
    },

    sign_in_button:{
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