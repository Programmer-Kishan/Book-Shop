import { useState } from 'react';

import './App.css';

import Navbar from './Components/Navbar/Navbar';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <Navbar className="dark-scheme fonts" isLogin={isLoggedIn}/>
    </>
  );
}

export default App;
