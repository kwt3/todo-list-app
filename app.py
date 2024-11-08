from flask import Flask, request, jsonify, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todo.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Configure CORS to allow requests from React (localhost:3000)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# Define Todo Model
class Todo(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.String(200), nullable=False)

# Retrieve all todos
@app.route("/api/todos", methods=['GET'])
def get_todos():
    todos = Todo.query.all()
    return jsonify([{"sno": todo.sno, "title": todo.title, "description": todo.description} for todo in todos])

# Add a new todo
@app.route("/api/todos", methods=['POST'])
def add_todo():
    data = request.get_json()
    new_todo = Todo(title=data['title'], description=data['description'])
    db.session.add(new_todo)
    db.session.commit()
    return jsonify({"message": "Todo added", "todo": {"sno": new_todo.sno, "title": new_todo.title, "description": new_todo.description}}), 201

# Update a todo
@app.route("/api/todos/<int:sno>", methods=['PUT'])
def update_todo(sno):
    data = request.get_json()
    todo = Todo.query.filter_by(sno=sno).first()
    if todo:
        todo.title = data['title']
        todo.description = data['description']
        db.session.commit()
        return jsonify({"message": "Todo updated", "todo": {"sno": todo.sno, "title": todo.title, "description": todo.description}})
    return jsonify({"error": "Todo not found"}), 404

# Delete a todo
@app.route("/api/todos/<int:sno>", methods=['DELETE'])
def delete_todo(sno):
    todo = Todo.query.filter_by(sno=sno).first()
    if todo:
        db.session.delete(todo)
        db.session.commit()
        return jsonify({"message": "Todo deleted"})
    return jsonify({"error": "Todo not found"}), 404

if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Ensures database is created
    app.run(debug=True)
