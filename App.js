import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login from './components/LoginPage';
import Main from './components/Main';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <View>
      <View style={styles.container}>
      <Text style={styles.text}>Hi!</Text>
      <StatusBar style="auto" />
    </View>
    <Login />
    <Main />
    <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 20,
  }
});
