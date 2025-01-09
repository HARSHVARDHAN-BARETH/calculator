import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';  // Install axios if you haven't already
import { useNavigation } from '@react-navigation/native'; // for navigation

const API_URL = 'http://localhost:3000/users';  // Updated URL for the GET API

const UsersListPage = ({ userId }) => {
    const [users, setUsers] = useState([]);
    const navigation = useNavigation(); // Use navigation hook

    useEffect(() => {
        // Fetch users from the backend API
        axios.get(API_URL)
            .then((response) => {
                setUsers(response.data);  // Update users state with the response data
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const selectUser = (id, username) => {
        // Navigate to chat page with selected user
        navigation.navigate('Chat', { receiverId: id, receiverUsername: username });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>All Logged-In Users:</Text>

            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.userItem}
                        onPress={() => selectUser(item.id, item.username)} // Select user to chat
                    >
                        <Text>{item.username}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    userItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
    },
});

export default UsersListPage;
