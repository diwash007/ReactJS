import './App.css';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

import data from './data/items.json'

function App() {
  return (
    <div>
      <Header />
      <ToDoForm data={data}/>
      <ToDoList toDoList={data} />
    </div>
  );
}

export default App;
