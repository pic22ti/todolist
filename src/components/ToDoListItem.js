import React from 'react';
import Class from 'classnames';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdDelete } from "react-icons/md";
import './ToDoListItem.css';

const ToDoListItem = ({todo, onRemove, onToggle})=>{
  const {id, text, checked} = todo;

  return (
    <div className="ToDoListItem">

      {/* 체크박스 */}
      <div className={Class('checkbox', {checked})} onClick={()=>onToggle(id)}>
        {checked? <MdCheckBox />:<MdCheckBoxOutlineBlank />}
      </div>

      {/* 텍스트 */}
      <div className={Class('text', {checked})} onClick={()=>onToggle(id)}>{text}</div>

      {/* 삭제 버튼 */}
      <div className="remove" onClick={()=>onRemove(id)}>
        <MdDelete />
      </div>
    </div>
  );
}

export default ToDoListItem;