import logo from './logo.svg';
import './App.css';
import React from "react";
import MyComponent from './3장/MyComponent';
import PropsComponent from './3장/PropsComponent';

class App extends React.Component{
  render(){
    return(
      <PropsComponent name="두잇 리액트"/>
    )
  }
}


export default App;
