import logo from './logo.svg';
import './App.css';
import React from "react";
import MyComponent from './3장/MyComponent';
import PropsComponent from './3장/PropsComponent';
import ChildComponent from './3장/ChildComponent';

class App extends React.Component{
  render(){

    return(
      <ChildComponent
      boolValue={true}
      numValue={1}
      arrayValue={[1,2,3,]}
      objValue={{name: '제목', age: 30}}
      nodeValue={<h1>노드</h1>}
            funcValue= {()=> {console.log('메시지')}}
      />
    )
  }
}


export default App;
