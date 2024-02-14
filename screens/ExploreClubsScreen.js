// ExploreClubsScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const CLUBS_DATA = [
  { id: '1', name: 'Coding Club', description: 'Learn and practice coding skills.' },
  { id: '2', name: 'Art Club', description: 'Express your creativity through art.' },
  { id: '3', name: 'Sports Club', description: 'Stay active and play your favorite sports.' },
  // Add more club data as needed
];

const ExploreClubsScreen = ({ navigation }) => {
  const renderClubCard = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleClubPress(item)}>
      <Text style={styles.clubName}>{item.name}</Text>
      <Text style={styles.clubDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  const handleClubPress = (club) => {
    // Navigate to club details or any other action
    console.log(`Pressed on ${club.name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Clubs</Text>
      <FlatList
        data={CLUBS_DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderClubCard}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1,
    padding: 20,
    backgroundColor: 'white', // Use a light background color
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  flatList: {
    width: '100%',
  },
  card: {
    backgroundColor: 'lightgray',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
  },
  clubName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  clubDescription: {
    fontSize: 16,
  },
});

export default ExploreClubsScreen;
