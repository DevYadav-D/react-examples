import './App.css';
import {useState} from "react";

const uuid = (id = 0) => () => id++;
const getId = uuid();


function App() {

  const [inputValue, setInputVaule] = useState("learn");

  const [todos, setTodos] = useState([]);

  //alternate custom method
  // let inputValue = 'learn';

  const handleChange = (event) => {
    setInputVaule(event.target.value) 

  }
  const handleKeyUp = (e) => {

    // if (e.key === 'Enter'){
    //   setTodos([...todos, inputValue])
    //   console.log('it works')
    // }

    if(e.key ==='Enter'){
      setTodos([...todos, {
      id:getId(),
      title:e.target.value,
      status:false
    }])
    setInputVaule(" ");
    }
  }

  function handleChangeStatus(id){
    setTodos(todos.map((todo) => {
        if (todo.id === id) {
          todo.status = !todo.status;
        }
        return todo;
    }))
  }

  // console.log('check smth');  that's only for test purpose
  return (
    <div className="App">
      <h1>Todos </h1>
      <input type = "text" value={inputValue} onChange={handleChange} onKeyUp = {handleKeyUp}/>
      {/* <p>{inputValue}</p> */}
      {/* <pre>{JSON.stringify(todos, null, 4)}</pre> */}
      <ul>
        {todos.map((todo) => (
          <li key = {todo.id}>
            <span className={todo.status ? 'done' : 'active'} onClick={() => {handleChangeStatus(todo.id)}}></span>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
