// Import React and Material-UI components
import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

// Component to display individual todo details and delete button
const TodoItem = ({ todo, deleteTodo }) => {
    return (
        <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h6" component="div">
                    {todo.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {todo.description}
                </Typography>
                <Box mt={2}>
                    <Button variant="outlined" color="secondary" onClick={() => deleteTodo(todo.sno)}>
                        Delete
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default TodoItem;
