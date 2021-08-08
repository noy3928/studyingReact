import React, {useState} from "react";
const TagsInput = (props) => {
    const [tags, setTags] = useState([]);
    const addTags = event => {
        if(event.key === 'Enter' && event.target.value !== ""){
            setTags([...tags, event.target.value]);
            props.selectedTags([...tags, event.target.value])
            event.target.value=""
        }
    }
    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)])
    }

    return(
        <div className="tags-input">
            <ul>
                {tags.map((tag, index) => {
                    <li key={index} className="tag">
                    <span className='tag-title'>{tag}</span>
                    <span className='tag-close-icon'
                        onClick={() => removeTags(index)}
                    >
                        x
                    </span>
                </li>
                })}
            </ul>
            <input 
            type="text" 
            onKeyUp={event => addTags(event)}
            placeholder="Press enter to add tags" />
        </div>
    )
}

export default TagsInput;