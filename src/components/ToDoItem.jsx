import React from 'react';

const ToDoItem = (props) => {
    return(        
        <li className="list-group-item clearfix">
            {props.text} 
            <button className="btn btn-danger px-2 btn-sm float-right" onClick={() => props.onChecked(props.id)}>X</button>
        </li>
    )
}

export default ToDoItem;