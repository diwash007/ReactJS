import {useState} from 'react';

const ToDoForm = ({addItem}) => {

    const [item, setItem] = useState('');

    const handleChange = (event) => {
        setItem(event.currentTarget.value)
    }
    const handleInput = (e) => {
        e.preventDefault()
        addItem(item)
        setItem('')
    }

    return (
        <form onSubmit={handleInput}>
            <input type='text' onChange={handleChange}/>&nbsp;
            <input type='submit' value='Add'/>
        </form>
     );
}
 
export default ToDoForm