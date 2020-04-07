import React, { Component } from 'react';

import Channel from '../../components/Channel/Channel';

// Class Component with states 
class ChannelList extends Component {

  // data within the comp 
  state = {
    tvChannelList: [
      { name: 'Star Sports', info: '#1 Sports Channel', logo: 'star.png'},
      { name: 'HBO', info: 'Entertainment Channel', logo: 'hbo.png'},
      { name: 'NatGeo', info: 'Infotainment Channel', logo: 'natgeo.png'}
    ],
    number: 10
  }

  changeStateHandler = () => {
    // changing the state will re-render 
    // merge with the unchanged existing properties
    // changing the state often is okay in simple react app.. but not in redux app.
    // changing state will result in unwanted behaviors in child comp tree
    this.setState({
      tvChannelList: [
        { name: 'Star Sports [Added]', info: '#1 Sports Channel', logo: 'star.png'},
        { name: 'HBO', info: 'Entertainment Channel', logo: 'hbo.png'},
        { name: 'NatGeo', info: 'Infotainment Channel', logo: 'natgeo.png'}
      ]
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className='container text-left'>
        <h2>Channel List | States Example</h2>

        <div className="row">

          <Channel 
            name={this.state.tvChannelList[0].name}
            info={this.state.tvChannelList[0].info}
            logo={this.state.tvChannelList[0].logo} addToFav={this.changeStateHandler}></Channel>
          
          <Channel 
            name={this.state.tvChannelList[1].name}
            info={this.state.tvChannelList[1].info}
            logo={this.state.tvChannelList[1].logo}></Channel>

          <Channel 
            name={this.state.tvChannelList[2].name}
            info={this.state.tvChannelList[2].info}
            logo={this.state.tvChannelList[2].logo}></Channel>

        </div>
      </div>
    )
  }
}

export default ChannelList;