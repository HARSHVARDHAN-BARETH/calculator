import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';

const API_URL = 'http://localhost:3000/users';
const CHAT_API_URL = 'http://localhost:3000/chats'; // Assuming you have a chat API

const UserProfilePage = ({ userId }) => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [usernameInput, setUsernameInput] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    // Fetch logged-in user profile details using userId
    axios.get(`${API_URL}/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, [userId]);

  // Fetch chat messages between logged-in user and selected user
  useEffect(() => {
    if (selectedUser) {
      axios.get(`${CHAT_API_URL}/${userId}/${selectedUser.id}`)
        .then((response) => {
          setChatMessages(response.data);
        })
        .catch((error) => {
          console.error('Error fetching chat messages:', error);
        });
    }
  }, [selectedUser, userId]);

  const selectUserForChat = (receiverId, receiverUsername) => {
    // Set the selected user and fetch chat history
    setSelectedUser({ id: receiverId, username: receiverUsername });
  };

  const sendMessage = () => {
    if (messageInput.trim() && selectedUser) {
      // Send message to selected user (send to backend)
      axios.post(`${CHAT_API_URL}/send`, {
        senderId: userId,
        receiverId: selectedUser.id,
        message: messageInput
      })
      .then(() => {
        // Fetch updated messages
        setMessageInput('');
        axios.get(`${CHAT_API_URL}/${userId}/${selectedUser.id}`)
          .then((response) => {
            setChatMessages(response.data);
          })
          .catch((error) => {
            console.error('Error fetching chat messages:', error);
          });
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.username}>Welcome, {user.username}</Text>

      {/* Input to search for other users by username */}
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={usernameInput}
        onChangeText={setUsernameInput}
      />

      {/* Button to select a user for chat */}
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => selectUserForChat(selectedUser?.id, selectedUser?.username)}
        disabled={!selectedUser}
      >
        <Text style={styles.searchButtonText}>Start Chat</Text>
      </TouchableOpacity>

      {/* Display selected user details */}
      {selectedUser ? (
        <>
          <Image style={styles.profileImage} source={{ uri: selectedUser.profilePicture || 'https://www.w3schools.com/howto/img_avatar.png' }} />
          <Text style={styles.selectedUsername}>{selectedUser.username}</Text>
          <Text style={styles.details}>Email: {selectedUser.email}</Text>
        </>
      ) : (
        <Text style={styles.noUserText}>No user selected. Try entering a username.</Text>
      )}

      {/* Chat interface */}
      {selectedUser && (
        <View style={styles.chatContainer}>
          {/* Chat Messages */}
          <FlatList
            data={chatMessages}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={item.senderId === userId ? styles.sentMessage : styles.receivedMessage}>
                <Text style={styles.messageText}>{item.message}</Text>
              </View>
            )}
          />

          {/* Message input field */}
          <TextInput
            style={styles.messageInput}
            placeholder="Type a message"
            value={messageInput}
            onChangeText={setMessageInput}
          />

          {/* Send button */}
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '80%',
  },
  searchButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  selectedUsername: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  chatContainer: {
    width: '100%',
    marginTop: 20,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '70%',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '70%',
  },
  messageText: {
    color: 'white',
    fontSize: 16,
  },
  messageInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    marginBottom: 10,
  },
  sendButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    width: '80%',
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noUserText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default UserProfilePage;
