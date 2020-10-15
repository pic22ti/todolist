import React, {useState, useRef, useCallback} from 'react';
import ToDoTemp from './components/ToDoTemp';
import ToDoInsert from './components/ToDoInsert';
import ToDoList from './components/ToDoList';

const App = ()=>{

  // useState 설정해서 ToDoList로 props 값을 전달해줌
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '오늘의 할일',
      checked: false
    }
  ]);

  // 모든 언어는 상호참조가 안됨

  // 값이 변하는데 const 써도 되는지
  // useRef 함수를 넣었기 때문에 const를 써도됨
  
  // 콜백함수
  // useCallback []부분
  // 관리해야하는 상태값, 관찰해야하는 상태값...리스트

  const nextID = useRef(2);
  const onInsert = useCallback(text=>{
      const next = {
        // nextID가 아니라 그 안에 current값
        id: nextID.current,
        // text: text, 아래와 같은 말
        text,
        checked: false
      };
      setTodos( todos.concat(next) );
      nextID.current += 1;
    }, [todos]);

  const onRemove = useCallback(removeID=>{
    // 값이 같은 애는 필터로 거르고 나머지만 남김
    // filter 는 for문처럼 배열 값을 한씩 불러와서 처리
    // list 객체의 id, onRemove 인자가 같은지
    setTodos( todos.filter(list=>list.id !== removeID) );
  }, [todos]);

  const onToggle = useCallback(selectId=>{
    setTodos( todos.map(data=>{
      // ...data 객체를 새로 복사해서 만들고 
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
