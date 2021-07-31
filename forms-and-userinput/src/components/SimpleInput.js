import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if(enteredNameIsValid){
      console.log('Name Input is valid!')
    }
   } ,[enteredNameIsValid])

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true)

    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false);
      return;
    }
  }

  const formSubmissionHandler = event => {
    event.preventDefault(); // 브라우저 상에서 기본적으로 일어나는 행위를 막는다. 그 행위로써는 섭밋이 될 때, http request가 보내지는 것이 될 수 있겠다. 
  
    setEnteredNameTouched(true);

    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName)
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue)

    // nameInputRef.current.value = '' // 이런 방법도 있지만, 그렇게 좋은 방법은 아니다. 
    setEnteredName('')//이렇게 하면 제출이 된 후 폼의 내용물이 지워질 수 있다. 
  }
  
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          ref={nameInputRef} 
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler} 
          onBlur={nameInputBlurHandler}
          value={enteredName}
          />
          {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
