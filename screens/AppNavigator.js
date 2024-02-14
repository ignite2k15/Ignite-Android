// AppNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import StudentScreen from '../screens/StudentScreen';
import GuestScreen from '../screens/GuestScreen';
import TeacherScreen from '../screens/TeacherScreen';
import FeedScreen from '../screens/FeedScreen';
// import CalendarScreen from '../screens/CalendarScreen'; // Add this line

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="StudentScreen" component={StudentScreen} />
        <Stack.Screen name="GuestScreen" component={GuestScreen} />
        <Stack.Screen name="TeacherScreen" component={TeacherScreen} />
        <Stack.Screen name="FeedScreen" component={FeedScreen} />
        {/* <Stack.Screen name="CalendarScreen" component={CalendarScreen} /> Add this line */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
