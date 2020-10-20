import React from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = ({todos, onRemove, onToggle})=>{
  return (
    <div className="ToDoList">
      {
        // map함수로 todos 리스트의 값을 하나씩 ToDoListItem에 보내기
        todos.map(todo=>(
          <ToDoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>
        ))
      }
    </div>
  );
}

export default ToDoList;