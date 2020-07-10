import React,{useState} from 'react';
import {InputArea} from './components/InputArea';
import ToDoItem from './components/ToDoItem';

function App() {
  const[items, setItems] = useState([]);

  const addItems = (inputText) => {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    })
  }

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="app-container">
      <div className="bg-warning p-3">
        <h4 className="m-0 text-center">To-Do List</h4>
      </div>
      <div className="p-3">
        <InputArea onAdd={addItems} />
        
        <div>
          <ul className="list-group">
            {items.map((item,index) => (
              <ToDoItem key={index} id={index} text={item} onChecked={deleteItem} />
            ))}
          </ul>
        </div>  
      </div>    
    </div>
  );
}

export default App;
