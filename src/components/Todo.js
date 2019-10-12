import React, { useState } from "react";
import PropTypes from "prop-types";

const Todo = todo => {
  const [{ done, content }, setTodo] = useState(todo);
  const [editMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState("");

  const toggleTodo = () => {
    setTodo(prev => {
      const newTodo = { content: prev.content, done: !prev.done, id: prev.id };
      return newTodo;
    });
    todo.onToggle();
  };

  const editTodo = () => {
    setEditMode(true);
    setEditContent(content);
  };

  const saveTodo = e => {
    e.preventDefault();
    if (editContent.length) {
      setEditMode(false);
      setTodo(prev => {
        const newTodo = { content: editContent, done: prev.done, id: prev.id };
        return newTodo;
      });
      todo.onEdit(editContent);
    }
  };

  return (
    <div className="todo">
      <div className="todo-input">
        {editMode ? (
          <form onSubmit={e => saveTodo(e)}>
            <input
              type="text"
              value={editContent}
              onChange={({ target }) => setEditContent(target.value)}
            />
          </form>
        ) : (
          <p className={done ? "done" : ""} onClick={toggleTodo}>
            {done ? (
              <i className="far fa-check-square" />
            ) : (
              <i className="far fa-square" />
            )}
            <span>{content}</span>
          </p>
        )}
      </div>
      <div className="todo-controls">
        <button onClick={() => editTodo()} title="edit" className="edit">
          <i className="fas fa-pencil-alt" />
        </button>
        <button
          onClick={() => todo.onRemove()}
          title="remove"
          className="remove"
        >
          <i className="fas fa-trash-alt" />
        </button>
      </div>
    </div>
  );
};

Todo.propTypes = {
  done: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default Todo;
