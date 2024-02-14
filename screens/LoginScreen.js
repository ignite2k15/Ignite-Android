// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here, e.g., send credentials to a server

    // For demonstration purposes, just navigate to another screen
    navigation.navigate('Home');
  };

  const handleForgotPassword = () => {
    // Implement forgot password logic (e.g., navigate to a forgot password screen)
    console.log('Forgot Password pressed');
  };

  const handleCreateAccount = () => {
    // Implement create account logic (e.g., navigate to a registration screen)
    console.log('Create Account pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.createAccountContainer}>
        <Text style={styles.createAccountText}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleCreateAccount}>
          <Text style={[styles.createAccountText, styles.createAccountButton]}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    width: '100%',
    color: 'white',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPasswordText: {
    color: 'blue',
    marginTop: 10,
    color: 'white',
  },
  createAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  createAccountText: {
    color: 'white',
    marginRight: 5,
  },
  createAccountButton: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
