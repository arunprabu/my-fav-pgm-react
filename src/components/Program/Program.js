import React from 'react';
import './Program.css';

// Functional Comp with props 
const Program = (props) => {
  console.log(props);

  // Event handling inside functional comp -onClick is synthetic event
  const watchItHandler = (e) => {
    alert('Open up console to see the event obj');
    console.log(e); // event object baked by react
  }

  return(
    <div className='card'>
      <div className="card-header">
        Featured 
        <span className="badge badge-warning float-right">
          {props.category}
        </span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.children}</p>
        <a href="#" className="btn btn-primary" onClick={watchItHandler}>Watch it</a>
      </div>
      <div className="card-footer text-muted">
        {props.time}
      </div>
    </div>
  )
}

export default Program;
