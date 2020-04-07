import React, { Component } from 'react';

// Class Component - with Lists and Keys
class TrendingShows extends Component{

  constructor(props){
    super(props);
    this.state = {
      showsList: [
        { id: 1, name: 'The Planet Earth', host: 'David Attenborough', isInWatchList: false},
        { id: 2, name: 'Cricket World Cup 2020', host: 'Ganguly', isInWatchList: false},
        { id: 3, name: 'Man Vs Wild', host: 'Bear Grylls', isInWatchList: false},
        { id: 4, name: 'The Planet Earth IV', host: 'David Attenborough', isInWatchList: false}
      ]
    };
  }

  // when attaching event in an element, .bind(this) is needed to get the context of 'this' keyword
  addToWatchlistHandler(){
    console.log(this);
    this.setState({
      showsList: [
        { id: 1, name: 'The Planet Earth', host: 'David Attenborough', isInWatchList: true},
        { id: 2, name: 'Cricket World Cup 2020', host: 'Ganguly', isInWatchList: false},
        { id: 3, name: 'Man Vs Wild', host: 'Bear Grylls', isInWatchList: false},
        { id: 4, name: 'The Planet Earth IV', host: 'David Attenborough', isInWatchList: false}
      ]
    })
  }

  render(){
    // ideal place for comp specific transformations in JSX -- particularly looping
    let shows = null;

    if(this.state.showsList && this.state.showsList.length > 0 ){
      // using es2015's map to extract array elements
      shows = this.state.showsList.map( (show) => {
        return(
          <li className='list-group-item' key={`show${show.id}`}>
            #{show.id}. {show.name} - hosted by {show.host}
            <button type="button" 
              className="btn btn-primary btn-sm float-right" onClick={this.addToWatchlistHandler.bind(this)}>
                { show.isInWatchList? 'In Watchlist' : 'Add to Watchlist'}
            </button>
          </li>
        )
      });
    }
    
    return( 
      <div className='container text-left'>
        <h2>Trending Shows List | Lists and Keys Example </h2>
        <ul className="list-group">
          { /* Will have conditionals */ }
          { this.state.showsList && this.state.showsList.length > 0 ? 
              shows
              :
              <div className='alert alert-danger'>
                No Trending shows found!
              </div>
          }
          
        </ul>
      </div>
    )
  }
}

export default TrendingShows;