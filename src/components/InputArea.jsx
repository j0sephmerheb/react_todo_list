import React, {useState} from 'react';

const InputArea = (props) => {
    const [inputText, setInputText] = useState('');
    const handleChange = (event) => {
        const newValue = event.target.value;
        setInputText(newValue);
    }
    return(
        <div className="input-group mb-2">
            <input className="form-control" type="text" onChange={handleChange} value={inputText} />
            <div className="input-group-append">
                <button className="btn btn-primary btn-block px-3" onClick={() => {
                    props.onAdd(inputText);
                    setInputText("");
                }}>Add</button>
            </div>
        </div>
    )
}

export {InputArea};