// screens/TeacherScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const TeacherScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome, Teacher!</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default TeacherScreen;
