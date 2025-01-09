// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import axios from 'axios';
// import { useNavigation } from 'expo-router';

// const SignIn = () => {
//     const navigation = useNavigation();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = async () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'All fields are required!');
//       return;
//     }
  
//     try {
//       const response = await axios.post('http://localhost:3000/login', {
//         username: email, // Use 'username' instead of 'email' as per API
//         password,
//       });
//       Alert.alert('Success', 'Signed in successfully!');
//       // Store the token or navigate to the chat page
//       navigation.navigate('chat'); // Navigate to the chat screen
//     } catch (error) {
//       Alert.alert('Error', error.response?.data?.message || 'Invalid credentials');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign In</Text>
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//         keyboardType="email-address"
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         style={styles.input}
//         secureTextEntry
//       />
//       <Button title="Sign In" onPress={handleSignIn} />
//       <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
//         Don't have an account? Sign Up
//       </Text>
//     </View>
//   );
// };

// export default SignIn;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 15,
//     borderRadius: 5,
//   },
//   link: {
//     marginTop: 10,
//     textAlign: 'center',
//     color: 'blue',
//   },
// });
