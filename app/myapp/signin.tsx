import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation, useRouter } from 'expo-router';

const LoginScreen = () => {
    const navigation = useNavigation();
    const router = useRouter(); // Use router from expo-router
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!username || !password) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/signin', { username, password }); // Replace <YOUR_MACHINE_IP> with your machine's IP
            Alert.alert('Success', response.data.message);
            navigation.navigate('myapp',
                {
                    screen: 'users'
                }
            )
        } catch (error) {
            Alert.alert('Error', error.response?.data?.message || 'Something went wrong.');
            console.log(error.response?.data?.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    heading: { fontSize: 24, marginBottom: 16 },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 16,
        borderRadius: 4,
    },
});

export default LoginScreen;
