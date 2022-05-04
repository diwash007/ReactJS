import {useState} from 'react';

const ToDoForm = ({data}) => {

    const [item, setItem] = useState('');

    const handleChange = (event) => {
        setItem(event.currentTarget.value)
    }
    const handleInput = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleInput}>
            <input type='text' onChange={handleChange}/>
            <input type='submit' value='Add'/>
        </form>
     );
}
 
export default ToDoForm