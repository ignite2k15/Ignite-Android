// screens/StudentScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const StudentScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome, Student!</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default StudentScreen;
