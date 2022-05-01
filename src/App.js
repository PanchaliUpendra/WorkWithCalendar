import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Bodypart from './Components/Bodypart/Bodypart';
import Content from './Components/Content/Content';
import Countodd from './Components/Countodd/Countodd';
import Weekday  from './Components/Weekday/Weekday';
import Personal from './Components/Personal/Personal';
import './App.css';

function App() {
  return (
    <div className='total'>
      <Navbar className="navbar" />
      <Bodypart />
      <Content/>
      <Countodd/>
      <Weekday/>
      <Personal/>
    </div>
  );
}

export default App;
