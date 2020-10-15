import React from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = ({todos, onRemove, onToggle})=>{
  return (
    <div className="ToDoList">
      {
        // map함수 (콜백함수(익명함수))
        todos.map(todo=>(
          <ToDoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>
        ))
      }
    </div>
  );
}

export default ToDoList;