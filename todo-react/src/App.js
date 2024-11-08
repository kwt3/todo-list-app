// Import necessary modules and components
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { Container, Typography } from '@mui/material';

// Main App component to manage todo state and render UI
const App = () => {
    const [todos, setTodos] = useState([]);

    // Fetch todos from the backend API on component mount
    useEffect(() => {
        fetchTodos();
    }, []);

    // Fetch all todos from the API
    const fetchTodos = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/todos');
            setTodos(response.data);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    // Add a new todo via the API and update the state
    const addTodo = async (title, description) => {
        const response = await axios.post('http://127.0.0.1:5000/api/todos', { title, description });
        setTodos([...todos, response.data.todo]);
    };

    // Delete a todo via the API and refresh the todos list
    const deleteTodo = async (sno) => {
        await axios.delete(`http://127.0.0.1:5000/api/todos/${sno}`);
        fetchTodos();
    };

    // Render the main application layout
    return (
        <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Todo List
            </Typography>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
            {todos.length === 0 && (
                <Typography variant="body1" color="textSecondary">
                    No todos available
                </Typography>
            )}
        </Container>
    );
};

export default App;
