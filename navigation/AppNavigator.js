import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import StudentScreen from '../screens/StudentScreen';
import GuestScreen from '../screens/GuestScreen';
import TeacherScreen from '../screens/TeacherScreen';
import EntryScreen from '../screens/EntryScreen';  // Import your EntryScreen
import React from 'react';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entry">
        <Stack.Screen name="Entry" component={EntryScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="StudentScreen" component={StudentScreen} />
        <Stack.Screen name="GuestScreen" component={GuestScreen} />
        <Stack.Screen name="TeacherScreen" component={TeacherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
