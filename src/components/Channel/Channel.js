import React from 'react';

// Functional Comp can't have states 
// react 16.3+ fn comp can work with states using react hooks
const Channel = (props) => {
  console.log(props);

  return(
    <div className='col-md-3'>
      <div className="card">
        <div className="card-body">
          <img className="card-img-top" alt="..." />
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.info}</p>
          <button type="button"
            className="btn btn-primary float-right" onClick={props.addToFav}>
            Add to Fav
          </button>
        </div>
      </div>
    </div>
  )
}

export default Channel;