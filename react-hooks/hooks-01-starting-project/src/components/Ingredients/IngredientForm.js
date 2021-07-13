import React, {useState} from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  //useState는 내부에 2개의 배열을 가진다. 첫번째 배열은 이전상태, 두번째 배열은 이후의 상태이다. 
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  //리액트 훅의 중요한 규칙 1) 함수형에서만 사용 가능하다. 2) 컴포넌트의 root에서 선언해야한다. nested된 형식으로 선언해서는 안된다. if문에서든 함수에서든, 어쩃뜬 안에서 선언되어서는 안된다. 

  const submitHandler = event => {
    event.preventDefault();
    props.onAddIngredient({title: enteredTitle, amount: enteredAmount});
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={enteredTitle} onChange={event=> {
            setEnteredTitle(event.target.value)}} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={enteredAmount} onChange={event=> {
            setEnteredAmount(event.target.value);
            }}  />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
