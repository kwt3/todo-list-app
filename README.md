# Flask-React Todo Application

A full-stack todo application built with Flask backend and React frontend, featuring Material-UI components for a polished user interface.

## Features

- Create new todos with title and description
- View list of all todos
- Delete existing todos
- RESTful API backend
- Modern, responsive UI with Material-UI
- SQLite database for data persistence

## Project Structure

```
todo-app/
├── app.py           # Flask application
├── instance/
│   └── todo.db      # SQLite database
└── todo-react/
    ├── src/
    │   ├── App.js       # Main React component
    │   └── components/
    │       ├── TodoForm.js    # Todo creation form
    │       ├── TodoList.js    # List of todos
    │       └── TodoItem.js    # Individual todo component
    └── package.json
```

## Prerequisites

- Python 3.11.9
- Node.js and npm
- Flask
- React

## Setup Instructions

### Backend Setup

1. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install required Python packages:
```bash
pip install flask flask-sqlalchemy flask-cors
```

3. Run the Flask application:
```bash
python app.py
```
The backend server will start on http://localhost:5000

### Frontend Setup

1. Navigate to the frontend directory and install dependencies:
```bash
cd todo-react
npm install
```

2. Install additional required packages:
```bash
npm install @mui/material @emotion/react @emotion/styled axios
```

3. Start the React development server:
```bash
npm start
```
The frontend application will start on http://localhost:3000

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/todos | Retrieve all todos |
| POST   | /api/todos | Create a new todo |
| PUT    | /api/todos/{id} | Update a specific todo |
| DELETE | /api/todos/{id} | Delete a specific todo |

## Tech Stack

- **Backend**
  - Flask: Python web framework
  - SQLAlchemy: SQL toolkit and ORM
  - SQLite: Database
  - Flask-CORS: Handle Cross-Origin Resource Sharing

- **Frontend**
  - React: JavaScript library for building user interfaces
  - Material-UI: React UI framework
  - Axios: HTTP client for API requests

## Development

The application uses a simple but effective architecture:
- Flask backend provides a RESTful API
- React frontend consumes the API and manages state
- Material-UI components ensure a consistent and professional look
- CORS is configured to allow frontend-backend communication

## Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is open source and available under the MIT License.
