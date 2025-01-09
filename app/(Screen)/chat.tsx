import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Update your socket URL if needed

const ChatPage = () => {
    const { params } = useRoute();
    const { receiverId, receiverUsername } = params;
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const flatListRef = useRef();

    useEffect(() => {
        // Fetch previous messages
        axios.get(`http://localhost:3000/messages/${receiverId}`)
            .then((response) => {
                setMessages(response.data);
            })
            .catch((error) => {
                console.error('Error fetching messages:', error);
            });

        socket.on('message', (message) => {
            if (message.receiverId === receiverId) {
                setMessages((prevMessages) => [...prevMessages, message]);
            }
        });

        return () => {
            socket.off('message'); // Clean up the socket listener
        };
    }, [receiverId]);

    const sendMessage = () => {
        const message = {
            senderId: 1, // Replace with actual user ID
            receiverId,
            text: newMessage,
        };

        socket.emit('send_message', message);

        // Clear message input
        setNewMessage('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Chat with {receiverUsername}</Text>

            <FlatList
                ref={flatListRef}
                data={messages}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.messageContainer}>
                        <Text style={styles.message}>{item.text}</Text>
                    </View>
                )}
            />

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type a message"
                    value={newMessage}
                    onChangeText={setNewMessage}
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    messageContainer: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10,
        borderRadius: 5,
    },
    message: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        width: '80%',
    },
    sendButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginLeft: 10,
    },
    sendButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ChatPage;
