import React from 'react';
import './App.css';

// Custom comp imports 
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import ProgramList from './containers/ProgramList/ProgramList';
import ChannelList from './containers/ChannelList/ChannelList';
import TrendingShows from './containers/TrendingShows/TrendingShows';
import MyProfile from './containers/MyProfile/MyProfile';
import Subscription from './components/Subscription/Subscription';
import AnnualSubscription from './containers/AnnualSubscription/AnnualSubscription';
import WithLastLogin from './hoc/WithLastLogin';
import LifeCycleDemo from './containers/LifeCycleDemo/LifeCycleDemo';
import ContactForm from './containers/ContactForm/ContactForm';

// Root Comp / Main Comp 
// Ideal place for Layout 
function App() {
  return (
    <div>
      <Header></Header>
      <div className="MarginTop text-center">
        <h1>Welcome to My Fav Program App!</h1>
        <hr />
        <ProgramList></ProgramList>
        <hr />
        <ChannelList></ChannelList>
        <hr/>
        <TrendingShows></TrendingShows>
        <hr/>
        <MyProfile></MyProfile>
        <hr/>
        <Subscription></Subscription>
        <hr/>
        <AnnualSubscription></AnnualSubscription>
        <hr />
        {/* in the following.. the children prop is needed because WithLastLogin is a HOC */}
        <WithLastLogin>
          <div className='alert alert-warning'>
            Last Login: Thu 24, March 2020 | Demo of HOC
          </div>
        </WithLastLogin>
        <hr/>
        <LifeCycleDemo></LifeCycleDemo>
        <hr/>
        <ContactForm></ContactForm>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
