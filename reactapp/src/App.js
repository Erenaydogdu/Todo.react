import { useState, useEffect, useRef } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { useTodoLayerValue } from './context/TodoContext';

const App = () => {
  const [{todos},dispatch] = useTodoLayerValue();
  const [content,setContent]=useState("");

  const inputRef= useRef(null);

  useEffect(()=>{
    inputRef.current.focus()
  },[])

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(!content) return;

    const newTodo ={
      id: Math.floor(Math.random()*254866),
      content,
      isCompleted:false
    };

    dispatch({
      type:'ADD_TODO',
      payload: newTodo,
    })

    setContent("");
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input type="text" className="todo-input" value={content} onChange={( e )=> setContent(e.target.value)} 
        ref={inputRef}/>
        <button className='todo-button'>Ekle</button>
      </form>

      {/* Todo Listesi */}
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
