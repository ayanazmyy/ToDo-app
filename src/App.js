import { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import { nanoid } from 'nanoid'
import $ from 'jquery'

function App() {
  
  const checkLocalStorage = ()=> {
    if(JSON.parse(localStorage.getItem('todos')) !== []){
      return JSON.parse(localStorage.getItem('todos'))
    }
  }
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState(checkLocalStorage() || []);
  const [completed, setCompleted] = useState(false);
  const [status, setStatus] = useState('All')
  const [filteredItems, setFilteredItems] = useState([]);


  // const getFromLocal = ()=> {
  //   if(localStorage.getItem('todos') !== null){
  //     const localTodos = JSON.parse(localStorage.getItem('todos'));
  //     setTodos(localTodos)
  //   }
  // }


  // useEffect(()=>{
  //   getFromLocal()
  // }, [])

  const saveToLocal = ()=> { 
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  useEffect(()=>{
    filterHandler();
    saveToLocal();
  }, [todos, status])


  const inputHandler = (e) => {
    setInputText(e.target.value)
  }

  const addTaskHandler = (e) => {
    setTodos([
      ...todos, { text: inputText, completed: false, id: nanoid() }
    ]);
    saveToLocal();
    setInputText('')
  }

  const deleteHandler = (id) => {
    setTodos(todos.filter(el => el.id !== id))
  }

  const completeHandler = (id) => {
    setTodos(todos.map(el => {
      if (el.id == id) {
        return {
          ...el, completed: !el.completed
        }
      }
      return el
    }))
  }

  const statusHandler = (e) => {
    e.target.classList.add('active-btn')
    $(e.target).siblings().removeClass('active-btn')
    console.log(e.target.classList);
    setStatus(e.target.innerText);
  }

  const filterHandler = ()=> {
    switch(status) {
      case 'Completed':
        setFilteredItems(todos.filter(el=>el.completed == true));
        break;
      case 'All':
        setFilteredItems(todos);
        break;
      default:
        setFilteredItems(todos);
        break;
    }
  
  }



  

  return (
    <>
      <header className='position-relative'>
        <div className="header-img"></div>
        <div className="container main-container">
          <div className="row flex-column">
            <Form inputHandler={inputHandler} inputText={inputText} addTaskHandler={addTaskHandler} />
            <TodoList todos={todos} deleteHandler={deleteHandler} completed={completed} completeHandler={completeHandler} statusHandler={statusHandler} filteredItems={filteredItems} />
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
