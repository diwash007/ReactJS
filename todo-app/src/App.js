import './App.css';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import { useState } from 'react';

import data from './data/items.json';

function App() {
  const [dataList, setDataList] = useState(data);

  const addItem = (task) => {
    let items = dataList;
    let item = {
      "id": dataList.length + 1,
      "task": task,
      "complete": false
    }
    items.push(item)
    setDataList(items)
    console.log(dataList)
  }
  return (
    <div className='todoapp'>
      <Header />
      <ToDoForm addItem={addItem}/>
      <ToDoList toDoList={dataList} />
    </div>
  );
}

export default App;
