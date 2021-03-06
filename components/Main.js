import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
export default function Main() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hi!</Text>
        <StatusBar style="auto" />
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