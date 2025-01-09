import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation, useRouter } from 'expo-router';


const SignupScreen = () => {
    const navigation = useNavigation();
    const router = useRouter(); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        if (!username || !password) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/signup', { username, password });
            Alert.alert('Success', response.data.message);
            router.push('/login');
            } catch (error) {
            Alert.alert('Error', error.response?.data?.message || 'Something went wrong.');
        }
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Signup</Text>
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
            <Button title="Signup" onPress={handleSignup} />
            <Text onPress={()=>navigation.navigate('myapp',{screen: 'signin'})}>Already have an account?</Text>
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

export default SignupScreen;
