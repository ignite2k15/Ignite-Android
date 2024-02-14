// FeedScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const EVENTS_DATA = [
  {
    id: '1',
    eventHeading: 'Tech Conference',
    expectedDate: '2024-03-15',
    description: 'Join us for the annual tech conference. Exciting talks and workshops!',
  },
  {
    id: '2',
    eventHeading: 'Art Exhibition',
    expectedDate: '2024-04-05',
    description: 'Explore beautiful artworks from talented artists. Don\'t miss it!',
  },
  {
    id: '3',
    eventHeading: 'Sports Tournament',
    expectedDate: '2024-05-20',
    description: 'Cheer for your favorite teams in the upcoming sports tournament.',
  },
  // Add more event data as needed
];

const FeedScreen = ({ navigation }) => {
  const renderEventCard = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleEventPress(item)}>
      <Text style={styles.eventHeading}>{item.eventHeading}</Text>
      <Text style={styles.expectedDate}>{`Expected Date: ${item.expectedDate}`}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  const handleEventPress = (event) => {
    // Handle event press event, e.g., navigate to event details
    console.log(`Pressed on event: ${event.eventHeading}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed</Text>
      <FlatList
        data={EVENTS_DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderEventCard}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Light gray background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Dark gray text color
  },
  flatList: {
    width: '100%',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3, // Add elevation for a card-like effect on Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.2, // Shadow opacity for iOS
    shadowRadius: 4, // Shadow radius for iOS
  },
  eventHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333', // Dark gray text color
  },
  expectedDate: {
    fontSize: 16,
    color: '#666', // Gray text color
  },
  description: {
    fontSize: 16,
    color: '#444', // Dark gray text color
  },
});

export default FeedScreen;
