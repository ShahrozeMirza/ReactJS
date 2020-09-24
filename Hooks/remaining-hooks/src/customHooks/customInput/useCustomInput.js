import {useState} from 'react'

function useCustomInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const bind = {
    //Instead of value:value, we used only value which is short hand for it i.t value means value:value in es6 short hand syntax.  
    value,
    onChange: e => {
        setValue(e.target.value);
    }
  }
  const reset = () => {
      setValue(initialValue);
  }
  
  return [value,bind,reset];
}

export default useCustomInput;
