import React from 'react';
import './ToDoTemp.css';

const ToDoTemp = ({children})=>{
  return (
    <div className="ToDoTemp">
      <div className="AppTitle">TO DO LIST</div>
      <div>{children}</div>
    </div>
  );
}

export default ToDoTemp;