import {useState} from 'react';

const ToDoForm = ({addItem}) => {

    const [item, setItem] = useState('');

    const handleChange = (event) => {
        setItem(event.currentTarget.value)
    }
    const handleInput = (e) => {
        e.preventDefault()
        if (item !== '')
            addItem(item)
        setItem('')
    }

    return (
        <form onSubmit={handleInput}>
            <input type='text' value={item} onChange={handleChange}/> <br />
            <input type='submit' className='btn' value='Add'/>
        </form>
     );
}
 
export default ToDoForm