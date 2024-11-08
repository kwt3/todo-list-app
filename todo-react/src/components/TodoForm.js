// Import React and Material-UI components
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

// Form component to add a new todo
const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Handle form submission and reset inputs
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(title, description);
        setTitle('');
        setDescription('');
    };

    // Render the form fields and submit button
    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mb: 2 }}>
            <TextField
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Description"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                fullWidth
                sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Add Todo
            </Button>
        </Box>
    );
};

export default TodoForm;
