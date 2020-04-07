import React, { Component } from 'react';

// Class Comp
class LifeCycleDemo extends Component {
  constructor(props){
    super(props);
    this.state = {};
    console.log('[LifeCycleDemo.js] -- Inside Constructor');
  }

  // read more about the following method here: https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
  // This method exists for rare use cases where the state depends on changes in props over time. 
  static getDerivedStateFromProps( props, state ){
    // static method can't have access to 'this' keyword inside.
    // so, you can't access any other method of this class either
    // so the only way to update state is returning an object. 
    // If you don’t want to update any state, simply return null.
    
    console.log('[LifeCycleDemo.js] -- Inside getDerivedStateFromProps');
    console.log(props);
    // you can update state here by duplicating using array slice or es6's spread operator and return it
    return state;
  }

  componentDidMount(){
    // ideal place for Ajax calls 
    console.log('[LifeCycleDemo.js] -- Inside componentDidMount');
  }

  render(){
    console.log('[LifeCycleDemo.js] -- Inside Render');

    return (
      <div className='container text-left'>
        <h2>Component LifeCycle Demo</h2>
        <div className='alert alert-info'>Open up LifeCycleDemo.js file to understand</div>
        <p>
          All LifeCycle Hooks here <br />
          https://reactjs.org/docs/react-component.html
        </p>
        <br />
      </div>
    )
  }
}

export default LifeCycleDemo;