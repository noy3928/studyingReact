import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const TagsInput = props => {
  const [tags, setTags] = React.useState(["node.js", "mongoDB"]);
  const removeTags = indexToRemove => {
    setTags(tags.filter((_, index) => index !== indexToRemove))
    props.selected(tags.filter((_, index) => index !== indexToRemove))
  }
  const addTags = (event) => {
    if( event.target.value !== ""){
      setTags([...tags, event.target.value])
      props.selected([...tags, event.target.value])
      event.target.value = "";
    }
  }

  return(
    <div className="tags-input">
        <ul>
          {tags.map((tag,index) => 
          <li key={index}>
            <span>{tag}</span>
            <i className="material-icons" onClick={()=> removeTags(index)}>close</i>
          </li>)}
        </ul>
        <input 
        type="text" 
        onKeyUp={e => e.key === "Enter" ? addTags(e) : null} 
        placeholder="Presss enter to add tags"></input>
      </div>
  )
}

function App() {
  const selected = tags => {
    setTags([tags])
  }
  const [tags, setTags] = React.useState([])
  console.log(tags)
  return(
    <div className="App">
      <TagsInput selected={selected}/>
    </div>
  )
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

