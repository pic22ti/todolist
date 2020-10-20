import React, {useState, useRef, useCallback} from 'react';
import ToDoTemp from './components/ToDoTemp';
import ToDoInsert from './components/ToDoInsert';
import ToDoList from './components/ToDoList';

const App = ()=>{

  // todos 리스트 uesState 초기설정
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '오늘의 할일',
      checked: false
    }
  ]);

  // id 초기값 2부터 시작
  const nextID = useRef(2);

  // 입력된 값을 리스트에 추가하는 콜백함수
  const onInsert = useCallback(text=>{
      // 현재 id, text = 입력된 텍스트, 체크 여부는 false
      const next = {
        id: nextID.current,
        text,
        checked: false
      };
      // concat으로 next를 todos 리스트에 추가 
      setTodos( todos.concat(next) );
      nextID.current += 1;
    }, [todos]);

  // 선택된 리스트를 삭제하는 콜백함수
  const onRemove = useCallback(removeID=>{
    setTodos( todos.filter(list=>list.id !== removeID) );
  }, [todos]);

  // 체크박스 토글 콜백함수
  const onToggle = useCallback(selectId=>{
    setTodos( todos.map(data=>{
      return (data.id === selectId? {...data, checked: !data.checked} : data);
    }) );
  }, [todos]);

  return (
    <ToDoTemp>
      <ToDoInsert onInsert={onInsert}/>
      <ToDoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </ToDoTemp>
  );
}

export default App;
