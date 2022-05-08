import Button from './Button.jsx';
import {useState} from 'react';

const Counter = () => {
  const[num, setNum] = useState(0);

  const handleClick = (op) => {
    switch(op) {
      case '+':
        setNum(num+1);
        break;
      case '-':
        if (num>0)
          setNum(num-1);
        break;
      default:
        setNum(0)
    }
  }

  return (
    <div className="counterbox">
      <Button value='-' onclick={() => {handleClick('-')}}/><br/>
      <span>{num}</span><br/>
      <Button value='+' onclick={() => {handleClick('+')}}/><br/><br/>
      <Button value="reset" onclick={() => {handleClick('0')}}/>
    </div>
  );
}

export default Counter;

  // const addNum = () => setNum(num+1)
  // const subtractNum = () => {
  //   if (num>0) setNum(num-1)
  //   }
  // const reset = () => setNum(0)
