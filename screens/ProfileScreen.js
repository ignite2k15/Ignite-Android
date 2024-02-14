// ProfileScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = ({ route }) => {
//   const { name, email, profilePhoto } = route.params;
    const {name,email,profilePhoto} = ["ppr","pr","gh"]
  return (
    <View style={styles.container}>
      <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // Styles for ProfileScreen
});

export default ProfileScreen;
