// screens/GuestScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const GuestScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome, Guest!</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default GuestScreen;
