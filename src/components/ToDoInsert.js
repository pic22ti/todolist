import React, {useCallback, useState} from 'react';
import './ToDoInsert.css';
import { MdCreate } from "react-icons/md";

const ToDoInsert = ({onInsert})=>{
  const [inputValue,setValue] = useState('');

  const changeValue = useCallback(e=>{
    setValue(e.target.value);
  }, []);

  const clickBtn = useCallback((e)=>{
    // 새로고침이 안되게 하기, html form 기본기능 삭제
    e.preventDefault();
    // app.js에 insert 시켜주는 함수
    onInsert(inputValue);
    // value 값을 공백으로 만들어 주는 함수
    setValue('');
  }, [onInsert, inputValue]);

  return (
    <form className="ToDoInsert">
      <input className="input" type="text" placeholder="할 일을 입력하세요" value={inputValue} onChange={changeValue} />
      <button className="btn" type="submit" onClick={clickBtn}>
        <MdCreate />
      </button>
    </form>
  );
}

export default ToDoInsert;