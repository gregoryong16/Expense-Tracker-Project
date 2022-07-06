import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { initializeApp } from 'firebase/app';

import Login from './components/LoginPage';
import Main from './components/Main';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
    <Login />
    {/* <Main />
    <Navbar /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 20,
  }
});
