// UpcomingEventsScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const EVENTS_DATA = [
  { id: '1', title: 'Tech Conference', date: '2024-03-15', location: 'Tech Center' },
  { id: '2', title: 'Art Exhibition', date: '2024-04-05', location: 'Art Gallery' },
  { id: '3', title: 'Sports Tournament', date: '2024-05-20', location: 'Sports Complex' },
  // Add more event data as needed
];

const UpcomingEventsScreen = ({ navigation }) => {
  const renderEventCard = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleEventPress(item)}>
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text style={styles.eventDetails}>{`Date: ${item.date} | Location: ${item.location}`}</Text>
    </TouchableOpacity>
  );

  const handleEventPress = (event) => {
    // Navigate to event details or any other action
    console.log(`Pressed on ${event.title}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Events</Text>
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
    marginTop: 12,
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
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333', // Dark gray text color
  },
  eventDetails: {
    fontSize: 16,
    color: '#666', // Gray text color
  },
});

export default UpcomingEventsScreen;
