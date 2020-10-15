import React from 'react';
import Class from 'classnames';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdDelete } from "react-icons/md";
import './ToDoListItem.css';

const ToDoListItem = ({todo, onRemove, onToggle})=>{
  const {id, text, checked} = todo;

  return (
    <div className="ToDoListItem">
      <div className={Class('checkbox', {checked})} onClick={()=>onToggle(id)}>
        {
          checked?
          <MdCheckBox />:<MdCheckBoxOutlineBlank />
        }
      </div>
      <div className={Class('text', {checked})} onClick={()=>onToggle(id)}>{text}</div>
      {/* onClick 되자마자 즉시 실행 */}
      <div className="remove" onClick={()=>onRemove(id)}>
        <MdDelete />
      </div>
    </div>
  );
}

export default ToDoListItem;