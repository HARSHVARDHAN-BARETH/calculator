import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, FlatList } from "react-native";
import axios from "axios";
import { RouteProp, useRoute } from "@react-navigation/native";

const Todo = () => {

    const route = useRoute<RouteProp<{ params: { id: string, name: string } }, 'params'>>();
    const { id, name } = route.params || {};
    
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [username, setUsername] = useState("");
    const API = "http://localhost:8000"; // Replace with your server URL

    // Fetch user data by ID
    const fetchUser = async () => {
        try {
            const response = await axios.get(`${API}/users/${id}`); // Fetch user by ID
            setUsername(response.data.username); // Set the username
        } catch (error) {
            console.error("Error fetching user:", error.message);
        }
    };

    // Fetch tasks
    const fetchTasks = async () => {
        try {
            const response = await axios.get(`${API}/tasks?userId=${id}`); // Fetch tasks for the user
            setTasks(response.data);
        } catch (error) {
            console.error("Error fetching tasks:", error.message);
        }
    };

    // Add a new task
    const addTask = async () => {
        if (newTask.trim()) {
            try {
                await axios.post(`${API}/tasks`, { description: newTask, userId: id }); // Include userId
                setNewTask("");
                fetchTasks();
            } catch (error) {
                console.error("Error adding task:", error.message);
            }
        }
    };

    useEffect(() => {
        fetchUser();
        fetchTasks();
    }, [id]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`${username}'s Todo ${name}`}</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter a new task"
                    value={newTask}
                    onChangeText={setNewTask}
                />
                <Button title="Add" onPress={addTask} />
            </View>

            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.taskContainer}>
                        <Text style={styles.taskText}>{item.description}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default Todo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f8f8f8",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    inputContainer: {
        flexDirection: "row",
        marginBottom: 20,
        alignItems: "center",
    },
    input: {
        flex: 1,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
    },
    taskContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    taskText: {
        fontSize: 16,
    },
});
