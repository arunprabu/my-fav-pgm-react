import React, { Component } from 'react'; 
import Program from './Program/Program';

// Class Component 
class ProgramList extends Component{

  render(){
    return( 
      <div className='container text-left'>
        <h2>Featured Programs List | Props </h2>

        <Program 
          name='Man Vs Wild' 
          category='TV Show' 
          time='8 PM'>Wild Adventure TV Show</Program>

        <Program 
          name='Planet Earth' 
          category='Wildlife Show' 
          time='9 PM'>Wildlife Show</Program>

        <Program 
          name='Fear Factor' 
          category='Action' 
          time='10 PM'>Action adventure TV show</Program>

      </div>
    )
  }
}

export default ProgramList;
