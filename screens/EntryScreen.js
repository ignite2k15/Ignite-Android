// screens/LoginScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { loginScreenStyles } from '../styles/LoginScreenStyles';

const EntryScreen = ({ navigation }) => {
  const handleLogin = (role) => {
    // Navigate to respective screens based on the role selected
    switch (role) {
      case 'student':
        navigation.navigate('StudentScreen');
        break;
      case 'guest':
        navigation.navigate('GuestScreen');
        break;
      case 'teacher':
        navigation.navigate('TeacherScreen');
        break;
      default:
        break;
    }
  };

  return (
    <View style={loginScreenStyles.container}>
      <Text style={loginScreenStyles.title}>Choose Login Option:</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Login as Student" onPress={() => handleLogin('student')} />
        </View>
        <View style={styles.button}>
          <Button title="Login as Guest" onPress={() => handleLogin('guest')} />
        </View>
        <View style={styles.button}>
          <Button title="Login as Teacher" onPress={() => handleLogin('teacher')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20, // Add margin top
  },
  button: {
    marginVertical: 10, // Add margin vertical
    padding: 10, // Add padding
  },
});

export default EntryScreen;