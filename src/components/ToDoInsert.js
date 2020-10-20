import React, {useCallback, useState} from 'react';
import './ToDoInsert.css';
import { MdCreate } from "react-icons/md";

const ToDoInsert = ({onInsert})=>{

  // inputValue 초기설정
  const [inputValue,setValue] = useState('');

  // 변경된(입력된) value값을 inputValue에 넣는 콜백함수 
  const changeValue = useCallback(e=>{
    setValue(e.target.value);
  }, []);

  // submit 버튼을 눌렀을때 
  const clickBtn = useCallback((e)=>{
    // 새로고침이 안되게 하기위해 html form 기본기능 삭제
    e.preventDefault();

    // inputValue값을 app.js에 insert시키기
    onInsert(inputValue);

    // value 값을 공백으로 만들기
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