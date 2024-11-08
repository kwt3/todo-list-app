// Import React and Material-UI components
import React from 'react';
import TodoItem from './TodoItem';
import { Box } from '@mui/material';

// List component to render all todo items
const TodoList = ({ todos, deleteTodo }) => {
    return (
        <Box>
            {todos.map(todo => (
                <TodoItem key={todo.sno} todo={todo} deleteTodo={deleteTodo} />
            ))}
        </Box>
    );
};

export default TodoList;
