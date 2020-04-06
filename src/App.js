import React from 'react';
import './App.css';

// Custom comp imports 
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ProgramList from './ProgramList/ProgramList';

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
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
