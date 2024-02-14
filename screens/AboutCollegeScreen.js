// AboutCollegeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutCollegeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Our College</Text>
      <Text style={styles.description}>
        Welcome to [Your College Name]! We are located in [College Location].
        Our college is dedicated to providing high-quality education and fostering
        a positive learning environment for our students.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
});

export default AboutCollegeScreen;
