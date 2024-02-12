<<<<<<< HEAD
// App.js
import React from 'react';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return <AppNavigator />;
};
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Started working </Text>
      <StatusBar style="auto" />
      <Home/>
    </View>
  );
}
>>>>>>> 6f36da2549feea266daad9671319e91c0a2474fa

export default App;
