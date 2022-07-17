import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity, Linking,KeyboardAvoidingView} from 'react-native';
import React, { useState , useEffect} from 'react';
import {auth} from "../firebase";
import {useNavigation} from "@react-navigation/core";
import { sendPasswordResetEmail } from 'firebase/auth';
export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const navigation= useNavigation()
    const resetPassword =() =>{
      sendPasswordResetEmail(auth,email)
      .then(() => {
          console.log("Email to reset password sent to",email)
          alert("Email to reset password sent to specified email address.",email)
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
  
          <TouchableOpacity onPress ={resetPassword} style={styles.signUpBtn}>
            <Text style={styles.loginText}>Send password reset</Text>
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
  
    });