// NotificationScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const NOTIFICATIONS_DATA = [
  { id: '1', title: 'New Message', content: 'You have a new message from John Doe.' },
  { id: '2', title: 'Event Reminder', content: 'Don\'t forget the tech conference tomorrow at 3 PM.' },
  { id: '3', title: 'Upcoming Event', content: 'The art exhibition is just around the corner. Prepare yourself!' },
  // Add more notification data as needed
];

const NotificationScreen = ({ navigation }) => {
  const renderNotificationCard = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleNotificationPress(item)}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </TouchableOpacity>
  );

  const handleNotificationPress = (notification) => {
    // Handle notification press event, e.g., navigate to notification details
    console.log(`Pressed on notification: ${notification.title}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={NOTIFICATIONS_DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderNotificationCard}
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
  content: {
    fontSize: 16,
    color: '#666', // Gray text color
  },
});

export default NotificationScreen;
