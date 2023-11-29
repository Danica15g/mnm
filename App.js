import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const LoginForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [message, setMessage] = useState('');
  const navigation = useNavigation(); // Initialize navigation

  const handleAdd = () => {
    // Logic to handle adding the user
    // You can use the entered values (firstName, lastName, username, password, selectedCourse)
    setMessage('User added!'); // Display a message indicating the user was added
  };

  const handleViewStudents = () => {
    // Navigate to the student list screen when the button is pressed
    navigation.navigate('StudentList');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <Picker
        selectedValue={selectedCourse}
        style={{ height: 40, width: 180, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10}}
        onValueChange={(itemValue) => setSelectedCourse(itemValue)}
      >
        <Picker.Item label="Select Course" value="" />
        <Picker.Item label="Course BSIT" value="courseBSIT" />
        <Picker.Item label="Course BSIS" value="courseBSIS" />
        <Picker.Item label="Course BsCRIM" value="courseBCRIM" />
      </Picker>
       {/* Adding space */}
       <View style={{ marginBottom: 20 }} />

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {/* Adding space */}
      <View style={{ marginBottom: 20 }} />
      <Button title="Add Student" onPress={handleAdd} />
      {/* Adding space */}
      <View style={{ marginBottom: 10 }} />
      <Button title="View Students List" onPress={handleViewStudents} /> {/* New button */}
      <Text style={{ marginTop: 20 }}>{message}</Text>
    </View>
  );
};
const StudentListScreen = () => {
  // Logic to fetch and display the list of students will go here
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>List of Students</Text>
      {/* Display the list of students here */}
    </View>
  );
};

// Modify the App component to include the new screen:
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="StudentList" component={StudentListScreen} />
        {/* Define other screens here if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App:
