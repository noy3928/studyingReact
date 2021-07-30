const BasicForm = (props) => {
  return (
    <form>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' />
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

/*무엇이 form을 복잡하게 만드는가? 개발자의 관점에서는 복잡하다. 
굉장히 다양한 데이터를 주고 받기 때문에 그렇다.
첫번째는 유효한 값과 그렇지 않은 값으로 나누어진다. 

유효하지 않다면, 에어를 내보내야 하고, 저자되지 않아야 하며, 
유효하면 저장되어야 한다. 

언제 유저의 인풋을 체크할 것인가? 3가지 방법이 있다. 
1)유저가 제출할때?
-> 경고하기 전에 유저가 올바른 값을 입력할 수 있도록 해준다. 
이것은 나쁘지 않은 방법이지만, 피드백이 약간 느릴 수 있다. 

2) 유저가 인풋을 떠났을때?
-> 경고하기 전에 유저가 올바른 값을 입력할 수 있도록 해준다. 
여러모로 유익하지만, 유저가 떠났다가 에러를 다시 발견했을 때, 
수정하기 위해서 다시 돌아와야하는 수고를 해야한다. 


3) 매번의 키 값이 입력될 때마다? 
-> 잘못된 값이 있을 때, 유저에게 바로바로 알려줄 수 있다. 


*/ 